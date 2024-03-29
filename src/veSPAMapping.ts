import {
  BigDecimal,
  bigInt,
  BigInt,
  Bytes,
  log,
  store,
} from "@graphprotocol/graph-ts";
import {
  veSPA,
  GlobalCheckpoint,
  OwnershipTransferred,
  Supply,
  UserCheckpoint,
  Withdraw,
} from "../generated/veSPA/veSPA";

import {
  veSPAGlobalCheckpointEvent,
  stakedSPASupplyEvent,
  stakedSPASupplyDayEvent,
  veSPAUserCheckpointEvent,
  veSPAWithdrawEvent,
  veSPASupplyEvent,
  veSPASupplyDayEvent,
  veSPADepositForEvent,
  veSPACreateLockEvent,
  veSPAIncreaseAmountEvent,
  veSPAIncreaseLockTimeEvent,
  veSPAInitiateCooldownEvent,
  totalSpaDayStaked,
  totalSpaStaked,
  veSPAActiveHolder,
  veSPAHolder,
  holderReward,
  veSPANumberHolder,
} from "../generated/schema";
import {
  timestampConvertDateTime,
  digitsConvert,
  timestampConvertDate,
  actionTypeConverter,
  timestampConvertWeek,
} from "./utils/utils";

export function handleGlobalCheckpoint(event: GlobalCheckpoint): void {
  let entity = new veSPAGlobalCheckpointEvent(
    event.transaction.hash
      .toHex()
      .concat("_")
      .concat(event.logIndex.toString())
  );

  entity.caller = event.params.caller;
  entity.epoch = event.params.epoch.toBigDecimal();
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleSupply(event: Supply): void {
  let entity = new stakedSPASupplyEvent(
    event.transaction.hash
      .toHex()
      .concat("_")
      .concat(event.logIndex.toString())
  );
  // let spaDateSupply = new stakedSPASupplyDayEvent(
  //   timestampConvertDate(event.block.timestamp)
  // );

  let spaDateSupply = stakedSPASupplyDayEvent.load(
    timestampConvertDate(event.block.timestamp)
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!spaDateSupply) {
    spaDateSupply = new stakedSPASupplyDayEvent(
      timestampConvertDate(event.block.timestamp)
    );

    // Entity fields can be set using simple assignments
    spaDateSupply.count = BigInt.fromI32(0);
  }

  entity.previousSPASupply = digitsConvert(event.params.prevSupply);
  entity.actualSPASupply = digitsConvert(event.params.supply);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  spaDateSupply.previousSPASupply = digitsConvert(event.params.prevSupply);
  spaDateSupply.actualSPASupply = digitsConvert(event.params.supply);
  spaDateSupply.count = spaDateSupply.count.plus(BigInt.fromI32(1));
  spaDateSupply.timeStamp = timestampConvertDateTime(event.block.timestamp);
  spaDateSupply.timeStampUnix = event.block.timestamp;
  spaDateSupply.blockNumber = event.block.number;
  spaDateSupply.transactionHash = event.transaction.hash;
  spaDateSupply.gasPrice = event.transaction.gasPrice;
  spaDateSupply.gasUsed = event.block.gasUsed;

  spaDateSupply.save();
  entity.save();
}

export function handleUserCheckpoint(event: UserCheckpoint): void {
  let arrayHolders = new Array<Bytes>(0);
  let activeHolder = veSPAActiveHolder.load(event.params.provider.toHex());
  if (!activeHolder) {
    activeHolder = new veSPAActiveHolder(event.params.provider.toHex());
    activeHolder.actionsCount = BigInt.fromI32(0);
    activeHolder.activeHolder = event.params.provider
    activeHolder.depositedValue= BigDecimal.fromString("0")
    activeHolder.autoCooldown= false
    activeHolder.expiryUnix = BigInt.fromI32(0); 
    activeHolder.expiry = timestampConvertDateTime(BigInt.fromI32(0));
    activeHolder.actionType = new Array<string>(0);
    activeHolder.timeStamp = timestampConvertDateTime(event.block.timestamp);
    activeHolder.timeStampUnix = event.block.timestamp;
    activeHolder.blockNumber = event.block.number;
    activeHolder.transactionHash = event.transaction.hash;
    
    
  }
  let Holder = veSPAHolder.load(event.params.provider.toHex());
  if (!Holder) {
    arrayHolders.push(event.params.provider);
    Holder = new veSPAHolder(event.params.provider.toHex());
    Holder.actionsCount = BigInt.fromI32(0);
    Holder.holders = arrayHolders;
    Holder.actionType = new Array<string>(0);
    Holder.Holder = event.params.provider
    Holder.depositedValue= BigDecimal.fromString("0")
    Holder.autoCooldown= false
    Holder.expiryUnix = BigInt.fromI32(0);
    Holder.expiry = timestampConvertDateTime(BigInt.fromI32(0));
    Holder.actionType = new Array<string>(0);
    Holder.rewardDistributed = BigDecimal.fromString("0")
    Holder.totalRewardDistributed = BigDecimal.fromString("0")
    Holder.timeStamp = timestampConvertDateTime(event.block.timestamp);
    Holder.timeStampUnix = event.block.timestamp;
    Holder.blockNumber = event.block.number;
    Holder.transactionHash = event.transaction.hash;
    
  }
  let totalActions = new Array<string>(0);
  let totalActionsNonActive = new Array<string>(0);
  let entity = new veSPAUserCheckpointEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(
        event.params.actionType
          .toString()
          .concat("_")
          .concat(event.block.number.toHexString())
      )
  );
  let vespaSupply = new veSPASupplyEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(
        event.params.actionType
          .toString()
          .concat("_")
          .concat(event.block.number.toHexString())
      )
  );
  let vespaDateSupply = new veSPASupplyDayEvent(
    timestampConvertDate(event.block.timestamp)
  );

  let contract = veSPA.bind(event.address);

  switch (event.params.actionType) {
    case 0:
      let depositFor = new veSPADepositForEvent(
        event.transaction.from
          .toHex()
          .concat("_")
          .concat(
            event.params.actionType
              .toString()
              .concat("_")
              .concat(event.block.number.toHexString())
          )
      );

      depositFor.actionType = actionTypeConverter(event.params.actionType);
      depositFor.autoCooldown = event.params.autoCooldown;
      depositFor.provider = event.params.provider;
      depositFor.depositedValue = digitsConvert(event.params.value);

      depositFor.timeStamp = timestampConvertDateTime(event.block.timestamp);
      depositFor.timeStampUnix = event.block.timestamp;
      depositFor.blockNumber = event.block.number;
      depositFor.transactionHash = event.transaction.hash;
      depositFor.gasPrice = event.transaction.gasPrice;
      depositFor.gasUsed = event.block.gasUsed;
      depositFor.save();

      activeHolder.actionsCount = activeHolder.actionsCount.plus(
        BigInt.fromI32(1)
      );
      activeHolder.activeHolder = event.params.provider;
      activeHolder.depositedValue = activeHolder.depositedValue.plus(
        digitsConvert(event.params.value)
      );
      activeHolder.autoCooldown = event.params.autoCooldown;
      activeHolder.expiryUnix = event.params.locktime;
      activeHolder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActions = activeHolder.actionType;
      totalActions.push(actionTypeConverter(event.params.actionType));
      activeHolder.actionType = totalActions;
      // activeHolder.count = (BigInt.fromI32(1));

      Holder.actionsCount = activeHolder.actionsCount;
      Holder.Holder = event.params.provider;
      Holder.depositedValue = activeHolder.depositedValue;
      Holder.autoCooldown = event.params.autoCooldown;
      Holder.expiryUnix = event.params.locktime;
      Holder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActionsNonActive = Holder.actionType;
      totalActionsNonActive.push(actionTypeConverter(event.params.actionType));
      Holder.actionType = totalActionsNonActive;

      break;
    case 1:
      let numberHolders = veSPANumberHolder.load("veSPA Holders");
      if (!numberHolders) {
        numberHolders = new veSPANumberHolder("veSPA Holders");
        numberHolders.active = BigInt.fromI32(0);
        numberHolders.all = BigInt.fromI32(0);
      }
      let createLock = new veSPACreateLockEvent(
        event.transaction.from
          .toHex()
          .concat("_")
          .concat(
            event.params.actionType
              .toString()
              .concat("_")
              .concat(event.block.number.toHexString())
          )
      );
      // activeHolder.count = activeHolder.count.plus(BigInt.fromI32(1));


      createLock.actionType = actionTypeConverter(event.params.actionType);
      createLock.autoCooldown = event.params.autoCooldown;
      createLock.expiryUnix = event.params.locktime;
      createLock.expiry = timestampConvertDateTime(event.params.locktime);
      createLock.provider = event.params.provider;
      createLock.depositedValue = digitsConvert(event.params.value);

      createLock.timeStamp = timestampConvertDateTime(event.block.timestamp);
      createLock.timeStampUnix = event.block.timestamp;
      createLock.blockNumber = event.block.number;
      createLock.transactionHash = event.transaction.hash;
      createLock.gasPrice = event.transaction.gasPrice;
      createLock.gasUsed = event.block.gasUsed;
      createLock.save();

      activeHolder.actionsCount = activeHolder.actionsCount.plus(
        BigInt.fromI32(1)
      );
      activeHolder.activeHolder = event.params.provider;
      activeHolder.depositedValue = activeHolder.depositedValue.plus(
        digitsConvert(event.params.value)
      );
      activeHolder.autoCooldown = event.params.autoCooldown;
      activeHolder.expiryUnix = event.params.locktime;
      activeHolder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActions = activeHolder.actionType;
      totalActions.push(actionTypeConverter(event.params.actionType));
      activeHolder.actionType = totalActions;

      Holder.actionsCount = activeHolder.actionsCount;
      Holder.Holder = event.params.provider;
      Holder.depositedValue = activeHolder.depositedValue;
      Holder.autoCooldown = event.params.autoCooldown;
      Holder.expiryUnix = event.params.locktime;
      Holder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActionsNonActive = Holder.actionType;
      totalActionsNonActive.push(actionTypeConverter(event.params.actionType));
      Holder.actionType = totalActionsNonActive;

      numberHolders.active = numberHolders.active.plus(BigInt.fromI32(1));
      numberHolders.all = numberHolders.all.plus(BigInt.fromI32(1));
      numberHolders.save();
      break;
    case 2:
      let increaseAmount = new veSPAIncreaseAmountEvent(
        event.transaction.from
          .toHex()
          .concat("_")
          .concat(
            event.params.actionType
              .toString()
              .concat("_")
              .concat(event.block.number.toHexString())
          )
      );
      increaseAmount.actionType = actionTypeConverter(event.params.actionType);
      increaseAmount.autoCooldown = event.params.autoCooldown;
      increaseAmount.provider = event.params.provider;
      increaseAmount.depositedValue = digitsConvert(event.params.value);

      increaseAmount.timeStamp = timestampConvertDateTime(
        event.block.timestamp
      );
      increaseAmount.timeStampUnix = event.block.timestamp;
      increaseAmount.blockNumber = event.block.number;
      increaseAmount.transactionHash = event.transaction.hash;
      increaseAmount.gasPrice = event.transaction.gasPrice;
      increaseAmount.gasUsed = event.block.gasUsed;
      increaseAmount.save();

      activeHolder.actionsCount = activeHolder.actionsCount.plus(
        BigInt.fromI32(1)
      );
      activeHolder.activeHolder = event.params.provider;
      activeHolder.depositedValue = activeHolder.depositedValue.plus(
        digitsConvert(event.params.value)
      );
      activeHolder.autoCooldown = event.params.autoCooldown;
      activeHolder.expiryUnix = event.params.locktime;
      activeHolder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActions = activeHolder.actionType;
      totalActions.push(actionTypeConverter(event.params.actionType));
      activeHolder.actionType = totalActions;

      Holder.actionsCount = activeHolder.actionsCount;
      Holder.Holder = event.params.provider;
      Holder.depositedValue = activeHolder.depositedValue;
      Holder.autoCooldown = event.params.autoCooldown;
      Holder.expiryUnix = event.params.locktime;
      Holder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActionsNonActive = Holder.actionType;
      totalActionsNonActive.push(actionTypeConverter(event.params.actionType));
      Holder.actionType = totalActionsNonActive;

      break;
    case 3:
      let increaseLockTime = new veSPAIncreaseLockTimeEvent(
        event.transaction.from
          .toHex()
          .concat("_")
          .concat(
            event.params.actionType
              .toString()
              .concat("_")
              .concat(event.block.number.toHexString())
          )
      );

      increaseLockTime.actionType = actionTypeConverter(
        event.params.actionType
      );
      increaseLockTime.autoCooldown = event.params.autoCooldown;
      increaseLockTime.provider = event.params.provider;
      increaseLockTime.expiryUnix = event.params.locktime;
      increaseLockTime.expiry = timestampConvertDateTime(event.params.locktime);
      increaseLockTime.timeStamp = timestampConvertDateTime(
        event.block.timestamp
      );
      increaseLockTime.timeStampUnix = event.block.timestamp;
      increaseLockTime.blockNumber = event.block.number;
      increaseLockTime.transactionHash = event.transaction.hash;
      increaseLockTime.gasPrice = event.transaction.gasPrice;
      increaseLockTime.gasUsed = event.block.gasUsed;
      increaseLockTime.save();

      activeHolder.actionsCount = activeHolder.actionsCount.plus(
        BigInt.fromI32(1)
      );
      activeHolder.activeHolder = event.params.provider;
      activeHolder.depositedValue = activeHolder.depositedValue.plus(
        digitsConvert(event.params.value)
      );
      activeHolder.autoCooldown = event.params.autoCooldown;
      activeHolder.expiryUnix = event.params.locktime;
      activeHolder.expiry = timestampConvertDateTime(event.params.locktime);

      totalActions = activeHolder.actionType;
      totalActions.push(actionTypeConverter(event.params.actionType));
      activeHolder.actionType = totalActions;

      Holder.actionsCount = activeHolder.actionsCount;
      Holder.Holder = event.params.provider;
      Holder.depositedValue = activeHolder.depositedValue;
      Holder.autoCooldown = event.params.autoCooldown;
      Holder.expiryUnix = event.params.locktime;
      Holder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActionsNonActive = Holder.actionType;
      totalActionsNonActive.push(actionTypeConverter(event.params.actionType));
      Holder.actionType = totalActionsNonActive;

      break;
    case 4:
      let initiateCooldown = new veSPAInitiateCooldownEvent(
        event.transaction.from
          .toHex()
          .concat("_")
          .concat(
            event.params.actionType
              .toString()
              .concat("_")
              .concat(event.block.number.toHexString())
          )
      );

      initiateCooldown.actionType = actionTypeConverter(
        event.params.actionType
      );
      initiateCooldown.autoCooldown = event.params.autoCooldown;
      initiateCooldown.expiryUnix = event.params.locktime;
      initiateCooldown.expiry = timestampConvertDateTime(event.params.locktime);
      initiateCooldown.provider = event.params.provider;
      initiateCooldown.depositedValue = digitsConvert(event.params.value);

      initiateCooldown.timeStamp = timestampConvertDateTime(
        event.block.timestamp
      );
      initiateCooldown.timeStampUnix = event.block.timestamp;
      initiateCooldown.blockNumber = event.block.number;
      initiateCooldown.transactionHash = event.transaction.hash;
      initiateCooldown.gasPrice = event.transaction.gasPrice;
      initiateCooldown.gasUsed = event.block.gasUsed;
      initiateCooldown.save();
      activeHolder.actionsCount = activeHolder.actionsCount.plus(
        BigInt.fromI32(1)
      );
      activeHolder.activeHolder = event.params.provider;

      activeHolder.depositedValue = activeHolder.depositedValue.plus(
        digitsConvert(event.params.value)
      );
      activeHolder.autoCooldown = event.params.autoCooldown;
      totalActions = activeHolder.actionType;
      totalActions.push(actionTypeConverter(event.params.actionType));
      activeHolder.actionType = totalActions;

      activeHolder.expiryUnix = event.params.locktime;
      activeHolder.expiry = timestampConvertDateTime(event.params.locktime);


      Holder.actionsCount = activeHolder.actionsCount;
      Holder.Holder = event.params.provider;
      Holder.depositedValue = activeHolder.depositedValue;
      Holder.autoCooldown = event.params.autoCooldown;
      Holder.expiryUnix = event.params.locktime;
      Holder.expiry = timestampConvertDateTime(event.params.locktime);
      totalActionsNonActive = Holder.actionType;
      totalActionsNonActive.push(actionTypeConverter(event.params.actionType));
      Holder.actionType = totalActionsNonActive;

      break;
  }

  // let getbalance = contract.try_balanceOf(
  //   event.params.provider,
  //   BigInt.fromI64(1650495600)
  // );
  // if (getbalance.reverted) {
  //   log.debug("veSPA Balance reverted", []);
  // } else {
  //   entity.veSPABalance = digitsConvert(getbalance.value);
  // }
  let veSpa = contract.try_totalSupply();
  if (veSpa.reverted) {
    log.debug("veSPA Total Supply reverted", []);
  } else {
    vespaSupply.VeSPASupply = digitsConvert(veSpa.value);
    vespaDateSupply.VeSPASupply = digitsConvert(veSpa.value);
  }
  entity.actionType = actionTypeConverter(event.params.actionType);
  entity.autoCooldown = event.params.autoCooldown;
  entity.expiryUnix = event.params.locktime;
  entity.expiry = timestampConvertDateTime(event.params.locktime);
  entity.provider = event.params.provider;
  entity.depositedValue = digitsConvert(event.params.value);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  vespaSupply.timeStamp = timestampConvertDateTime(event.block.timestamp);
  vespaSupply.timeStampUnix = event.block.timestamp;
  vespaSupply.blockNumber = event.block.number;
  vespaSupply.transactionHash = event.transaction.hash;
  vespaSupply.gasPrice = event.transaction.gasPrice;
  vespaSupply.gasUsed = event.block.gasUsed;

  vespaDateSupply.timeStamp = timestampConvertDateTime(event.block.timestamp);
  vespaDateSupply.timeStampUnix = event.block.timestamp;
  vespaDateSupply.blockNumber = event.block.number;
  vespaDateSupply.transactionHash = event.transaction.hash;
  vespaDateSupply.gasPrice = event.transaction.gasPrice;
  vespaDateSupply.gasUsed = event.block.gasUsed;

  activeHolder.timeStamp = timestampConvertDateTime(event.block.timestamp);
  activeHolder.timeStampUnix = event.block.timestamp;
  activeHolder.blockNumber = event.block.number;
  activeHolder.transactionHash = event.transaction.hash;

  Holder.timeStamp = timestampConvertDateTime(event.block.timestamp);
  Holder.timeStampUnix = event.block.timestamp;
  Holder.blockNumber = event.block.number;
  Holder.transactionHash = event.transaction.hash;
  activeHolder.save();
  Holder.save();
  vespaDateSupply.save();
  vespaSupply.save();
  entity.save();
}

export function handleWithdraw(event: Withdraw): void {
  let numberHolders = veSPANumberHolder.load("veSPA Holders");
  if (!numberHolders) {
    numberHolders = new veSPANumberHolder("veSPA Holders");
    numberHolders.active = BigInt.fromI32(0);
    numberHolders.all = BigInt.fromI32(0);

  }

  let Holder = veSPAHolder.load(event.params.provider.toHex());
  if (!Holder) {
    Holder = new veSPAHolder(event.params.provider.toHex());

    Holder = new veSPAHolder(event.params.provider.toHex());
    Holder.actionsCount = BigInt.fromI32(0);
    Holder.holders = new Array<Bytes>(0);
    Holder.actionType = new Array<string>(0);
    Holder.Holder = event.params.provider
    Holder.depositedValue= BigDecimal.fromString("0")
    Holder.autoCooldown= false
    Holder.expiryUnix = BigInt.fromI32(0);
    Holder.expiry = timestampConvertDateTime(BigInt.fromI32(0));
    Holder.actionType = new Array<string>(0);
    Holder.rewardDistributed = BigDecimal.fromString("0")
    Holder.totalRewardDistributed = BigDecimal.fromString("0")
    Holder.timeStamp = timestampConvertDateTime(event.block.timestamp);
    Holder.timeStampUnix = event.block.timestamp;
    Holder.blockNumber = event.block.number;
    Holder.transactionHash = event.transaction.hash;
    

  }

  let entity = new veSPAWithdrawEvent(
    event.transaction.hash
      .toHex()
      .concat("_")
      .concat(event.logIndex.toString())
  );
  // let oldHolderNumber = Holder.count;
  // Holder.count = oldHolderNumber.minus(BigInt.fromI32(1));
  entity.provider = event.params.provider;
  entity.withdrawTime = event.params.ts;
  entity.withdrawnValue = digitsConvert(event.params.value);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;
  entity.save();
  numberHolders.active = numberHolders.active.minus(BigInt.fromI32(1));
  store.remove("veSPAActiveHolder", event.params.provider.toHexString());
  Holder.save();
  numberHolders.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.I_MIN_TIME(...)
// - contract.I_YEAR(...)
// - contract.MAX_TIME(...)
// - contract.MIN_TIME(...)
// - contract.MULTIPLIER(...)
// - contract.SPA(...)
// - contract.WEEK(...)
// - contract.balanceOf(...)
// - contract.balanceOf(...)
// - contract.balanceOfAt(...)
// - contract.decimals(...)
// - contract.epoch(...)
// - contract.estimateDeposit(...)
// - contract.getLastUserSlope(...)
// - contract.getUserPointHistoryTS(...)
// - contract.lockedBalances(...)
// - contract.lockedEnd(...)
// - contract.name(...)
// - contract.owner(...)
// - contract.pointHistory(...)
// - contract.slopeChanges(...)
// - contract.symbol(...)
// - contract.totalSPALocked(...)
// - contract.totalSupply(...)
// - contract.totalSupply(...)
// - contract.totalSupplyAt(...)
// - contract.userPointEpoch(...)
// - contract.userPointHistory(...)
// - contract.version(...)
