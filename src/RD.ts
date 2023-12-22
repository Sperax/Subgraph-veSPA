import { bigInt, BigInt,BigDecimal,Bytes } from "@graphprotocol/graph-ts";
import {
  RewardDistributor_v1,
  CheckpointAllowed,
  Claimed,
  Killed,
  MaxIterationsUpdated,
  OwnershipTransferred,
  RecoveredERC20,
  RewardsCheckpointed,
} from "../generated/RewardDistributor_v1/RewardDistributor_v1";
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

export function handleClaimed(event: Claimed): void {
  let entity = new veSPARewardClaimedEvent(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );
  let amounts = new Array<BigDecimal>(0);
  entity.recipient = event.params._recipient;
  amounts.push(digitsConvert(event.params._amount));
  entity.rewardAmount = amounts;
  entity.staked = event.params._staked;
  entity.rewardClaimTill = timestampConvertDateTime(
    event.params._rewardClaimedTill
  );
 
  entity.rewardClaimTillUnix = event.params._rewardClaimedTill;
  entity.version = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleCheckpointAllowed(event: CheckpointAllowed): void {
  let entity = new veSPARewardCheckpointAllowedEvent(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );

  entity.allowed = event.params._allowed;
  entity.version = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleKilled(event: Killed): void {
  let entity = new veSPARewardKilledEvent(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );
  entity.version = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}
export function handleRewardsCheckpointed(event: RewardsCheckpointed): void {
  let entity = new veSPARewardCheckpointEvent(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );
  entity.amount = digitsConvert(event.params._amount);
  entity.version = BigInt.fromI32(1);
  entity.numEpochs = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.token= Bytes.fromHexString("0x5575552988A3A80504bBaeB1311674fCFd40aD4B")
  if (event.params._amount > BigInt.fromI32(0)) {
    entity.save();
  }
}

export function handleMaxIterationsUpdated(event: MaxIterationsUpdated): void {
  let entity = new veSPARewardMaxItterationUpdate(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );

  entity.oldItteration = event.params._oldNo;
  entity.newItteration = event.params._newNo;
  entity.version = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;
  entity.gasUsed = event.block.gasUsed;

  entity.save();
}

export function handleRecoveredERC20(event: RecoveredERC20): void {
  let entity = new veSPARecoverERC20Event(
 event.transaction.hash.toHex().concat("_").concat(event.logIndex.toString())
  );
  entity.tokenAddress = event.params._token;
  entity.amount = event.params._amount;
  entity.version = BigInt.fromI32(1);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;


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
