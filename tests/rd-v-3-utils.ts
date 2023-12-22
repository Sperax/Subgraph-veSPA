import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Claimed,
  OwnershipTransferred,
  RecoveredERC20,
  RewardAdded,
  RewardTokenRecovered,
  RewardTokenRegistered
} from "../generated/RD_V3/RD_V3"

export function createClaimedEvent(
  account: Address,
  rewardsTill: BigInt,
  amount: Array<BigInt>
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsTill",
      ethereum.Value.fromUnsignedBigInt(rewardsTill)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigIntArray(amount)
    )
  )

  return claimedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRecoveredERC20Event(
  token: Address,
  amount: BigInt
): RecoveredERC20 {
  let recoveredErc20Event = changetype<RecoveredERC20>(newMockEvent())

  recoveredErc20Event.parameters = new Array()

  recoveredErc20Event.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  recoveredErc20Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return recoveredErc20Event
}

export function createRewardAddedEvent(
  token: Address,
  amount: BigInt,
  numEpochs: BigInt
): RewardAdded {
  let rewardAddedEvent = changetype<RewardAdded>(newMockEvent())

  rewardAddedEvent.parameters = new Array()

  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "numEpochs",
      ethereum.Value.fromUnsignedBigInt(numEpochs)
    )
  )

  return rewardAddedEvent
}

export function createRewardTokenRecoveredEvent(
  token: Address,
  recipient: Address,
  totalAmount: BigInt
): RewardTokenRecovered {
  let rewardTokenRecoveredEvent = changetype<RewardTokenRecovered>(
    newMockEvent()
  )

  rewardTokenRecoveredEvent.parameters = new Array()

  rewardTokenRecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  rewardTokenRecoveredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  rewardTokenRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return rewardTokenRecoveredEvent
}

export function createRewardTokenRegisteredEvent(
  token: Address
): RewardTokenRegistered {
  let rewardTokenRegisteredEvent = changetype<RewardTokenRegistered>(
    newMockEvent()
  )

  rewardTokenRegisteredEvent.parameters = new Array()

  rewardTokenRegisteredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return rewardTokenRegisteredEvent
}
