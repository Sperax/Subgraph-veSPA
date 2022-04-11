import { BigInt } from "@graphprotocol/graph-ts";
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
  veSPASupplyEvent,
  veSPAUserCheckpointEvent,
  veSPAWithdrawEvent,
} from "../generated/schema";
import {
  timestampConvertDateTime,
  digitsConvert,
  timestampConvertDate,
  actionTypeConverter,
} from "./utils/utils";

export function handleGlobalCheckpoint(event: GlobalCheckpoint): void {
  let entity = new veSPAGlobalCheckpointEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
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
  let entity = new veSPASupplyEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );

  entity.previousSupply = digitsConvert(event.params.prevSupply);
  entity.actualSupply = digitsConvert(event.params.supply);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleUserCheckpoint(event: UserCheckpoint): void {
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

  entity.save();
}

export function handleWithdraw(event: Withdraw): void {
  let entity = new veSPAWithdrawEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );

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
