import {
  Approval as ApprovalEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RedemptionRequested as RedemptionRequestedEvent,
  SPARedeemed as SPARedeemedEvent,
  StakedInVeSPA as StakedInVeSPAEvent,
  Transfer as TransferEvent,
} from "../generated/xSPA/xSPA";
import {
  Approval,
  Initialize,
  OwnershipTransfer,
  RedemptionRequest,
  SPARedeem,
  VeSPAStake,
  Transfer,
} from "../generated/schema";
import {
  timestampConvertDateTime,
  digitsConvert,
  timestampConvertDate,
  actionTypeConverter,
  timestampConvertWeek,
} from "./utils/utils";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRedemptionRequested(
  event: RedemptionRequestedEvent
): void {
  let entity = new RedemptionRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.by = event.params._by;
  entity.requestId = event.params._requestId;
  entity.xSpaAmount = digitsConvert(event.params._xSpaAmount);
  entity.unlockTimeUnix = event.params._unlockTime;
  entity.unlockTime = timestampConvertDateTime(event.params._unlockTime);
  entity.duration = (entity.unlockTimeUnix
    .minus(event.block.timestamp))
    .div(BigInt.fromI64(86400));
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSPARedeemed(event: SPARedeemedEvent): void {
  let entity = new SPARedeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.redeemer = event.params._redeemer;
  entity.recipient = event.params._recipient;
  entity.requestId = event.params._requestId;
  entity.spaAmount = digitsConvert(event.params._spaAmount);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStakedInVeSPA(event: StakedInVeSPAEvent): void {
  let entity = new VeSPAStake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.for = event.params._for;
  entity.spaAmount = digitsConvert(event.params._spaAmount);
  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = digitsConvert(event.params.value);

  entity.timeStamp = timestampConvertDateTime(event.block.timestamp);
  entity.timeStampUnix = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
