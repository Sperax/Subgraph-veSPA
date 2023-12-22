import {
  BigInt,
  BigDecimal,
  Address,
  log,
  Bytes,
  store,
} from "@graphprotocol/graph-ts";
import {
  Claimed as ClaimedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RecoveredERC20 as RecoveredERC20Event,
  RewardAdded as RewardAddedEvent,
  RewardTokenRecovered as RewardTokenRecoveredEvent,
  RewardTokenRegistered as RewardTokenRegisteredEvent,
} from "../generated/RD_V3/RD_V3";
import {
  timestampConvertDateTime,
  digitsConvert,
  timestampConvertDate,
  actionTypeConverter,
} from "./utils/utils";
import {
  RecoverRewardToken,
  RegisterRewardToken,
  veSPARewardClaimedEvent,
  veSPARewardCheckpointEvent,
  veSPARecoverERC20Event,
} from "../generated/schema";

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new veSPARewardClaimedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  let amounts = new Array<BigDecimal>(0);
  for (let i = 0; i < event.params.amount.length; i++) {
    amounts.push(digitsConvert(event.params.amount[i]));
  }
  entity.staked = false;
  entity.version = BigInt.fromI32(3);
  entity.recipient = event.params.account;
  entity.rewardAmount = amounts;
  entity.recipient = event.params.account;
  entity.rewardClaimTill = timestampConvertDateTime(event.params.rewardsTill);
  entity.rewardClaimTillUnix = event.params.rewardsTill;
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.blockNumber = event.block.number;
  entity.timeStampUnix = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}



export function handleRecoveredERC20(event: RecoveredERC20Event): void {
  let entity = new veSPARecoverERC20Event(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenAddress = event.params.token;
  entity.amount = event.params.amount;
  entity.version = BigInt.fromI32(3);

  entity.blockNumber = event.block.number;
  entity.timeStampUnix = event.block.timestamp;
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRewardAdded(event: RewardAddedEvent): void {
  let entity = new veSPARewardCheckpointEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.token = event.params.token;
  entity.amount = digitsConvert(event.params.amount);
  entity.numEpochs = event.params.numEpochs;
  entity.version = BigInt.fromI32(3);
  entity.blockNumber = event.block.number;
  entity.timeStampUnix = event.block.timestamp;
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRewardTokenRecovered(
  event: RewardTokenRecoveredEvent
): void {
  let entity = new RecoverRewardToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token;
  entity.recipient = event.params.recipient;
  entity.totalAmount = event.params.totalAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRewardTokenRegistered(
  event: RewardTokenRegisteredEvent
): void {
  let entity = new RegisterRewardToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
