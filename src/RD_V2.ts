import { bigInt, BigInt } from "@graphprotocol/graph-ts";
import {
  rewardDistributorV2,
  CheckpointAllowed,
  Claimed,
  Killed,
  MaxIterationsUpdated,
  OwnershipTransferred,
  RecoveredERC20,
  RewardsCheckpointed,
} from "../generated/rewardDistributorV2/rewardDistributorV2";
import {
  timestampConvertDateTime,
  digitsConvert,
  timestampConvertDate,
  actionTypeConverter,
} from "./utils/utils";
import {
  veSPARewardClaimedEvent,
  veSPARewardCheckpointAllowedEvent,
  veSPARewardKilledEvent,
  veSPARewardCheckpointEvent,
  veSPARewardMaxItterationUpdate,
  veSPARecoverERC20Event,
} from "../generated/schema";

export function handleClaimedV2(event: Claimed): void {
  let entity = new veSPARewardClaimedEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );

  entity.recipient = event.params._recipient;
  entity.rewardAmount = digitsConvert(event.params._amount);
  entity.staked = event.params._staked;
  entity.lastRewardClaimTime = timestampConvertDateTime(
    event.params._lastRewardClaimTime
  );
  entity.rewardClaimTill = timestampConvertDateTime(
    event.params._rewardClaimedTill
  );
  entity.lastRewardClaimTimeUnix = event.params._lastRewardClaimTime;
  entity.rewardClaimTillUnix = event.params._rewardClaimedTill;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleCheckpointAllowedV2(event: CheckpointAllowed): void {
  let entity = new veSPARewardCheckpointAllowedEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );

  entity.allowed = event.params._allowed;
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleKilledV2(event: Killed): void {
  let entity = new veSPARewardKilledEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}
export function handleRewardsCheckpointedV2(event: RewardsCheckpointed): void {
  let entity = new veSPARewardCheckpointEvent(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );
  entity.amount = digitsConvert(event.params._amount);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;
  if (event.params._amount > BigInt.fromI32(0)) {
    entity.save();
  }
}

export function handleMaxIterationsUpdatedV2(
  event: MaxIterationsUpdated
): void {
  let entity = new veSPARewardMaxItterationUpdate(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );

  entity.oldItteration = event.params._oldNo;
  entity.newItteration = event.params._newNo;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleRecoveredERC20V2(event: RecoveredERC20): void {
  let entity = new veSPARecoverERC20Event(
    event.transaction.from
      .toHex()
      .concat("_")
      .concat(event.block.number.toHexString())
  );
  entity.tokenAddress = event.params._token;
  entity.amount = event.params._amount;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleOwnershipTransferredV2(
  event: OwnershipTransferred
): void {}

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
// - contract.EMERGENCY_RETURN(...)
// - contract.REWARD_CHECKPOINT_DEADLINE(...)
// - contract.SPA(...)
// - contract.WEEK(...)
// - contract.canCheckpointReward(...)
// - contract.claim(...)
// - contract.claim(...)
// - contract.computeRewards(...)
// - contract.isKilled(...)
// - contract.lastRewardBalance(...)
// - contract.lastRewardCheckpointTime(...)
// - contract.maxIterations(...)
// - contract.owner(...)
// - contract.rewardsPerWeek(...)
// - contract.startTime(...)
// - contract.timeCursorOf(...)
// - contract.veSPA(...)
// - contract.veSPASupply(...)
