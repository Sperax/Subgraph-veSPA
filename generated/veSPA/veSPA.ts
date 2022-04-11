// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GlobalCheckpoint extends ethereum.Event {
  get params(): GlobalCheckpoint__Params {
    return new GlobalCheckpoint__Params(this);
  }
}

export class GlobalCheckpoint__Params {
  _event: GlobalCheckpoint;

  constructor(event: GlobalCheckpoint) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get epoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Supply extends ethereum.Event {
  get params(): Supply__Params {
    return new Supply__Params(this);
  }
}

export class Supply__Params {
  _event: Supply;

  constructor(event: Supply) {
    this._event = event;
  }

  get prevSupply(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get supply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UserCheckpoint extends ethereum.Event {
  get params(): UserCheckpoint__Params {
    return new UserCheckpoint__Params(this);
  }
}

export class UserCheckpoint__Params {
  _event: UserCheckpoint;

  constructor(event: UserCheckpoint) {
    this._event = event;
  }

  get actionType(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get autoCooldown(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get provider(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get locktime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ts(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class veSPA__estimateDepositResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromSignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class veSPA__lockedBalancesResult {
  value0: boolean;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: boolean,
    value1: boolean,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class veSPA__pointHistoryResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class veSPA__userPointHistoryResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class veSPA extends ethereum.SmartContract {
  static bind(address: Address): veSPA {
    return new veSPA("veSPA", address);
  }

  I_MIN_TIME(): BigInt {
    let result = super.call("I_MIN_TIME", "I_MIN_TIME():(int128)", []);

    return result[0].toBigInt();
  }

  try_I_MIN_TIME(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("I_MIN_TIME", "I_MIN_TIME():(int128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  I_YEAR(): BigInt {
    let result = super.call("I_YEAR", "I_YEAR():(int128)", []);

    return result[0].toBigInt();
  }

  try_I_YEAR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("I_YEAR", "I_YEAR():(int128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_TIME(): BigInt {
    let result = super.call("MAX_TIME", "MAX_TIME():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_TIME(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_TIME", "MAX_TIME():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_TIME(): BigInt {
    let result = super.call("MIN_TIME", "MIN_TIME():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_TIME(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_TIME", "MIN_TIME():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MULTIPLIER(): BigInt {
    let result = super.call("MULTIPLIER", "MULTIPLIER():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MULTIPLIER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MULTIPLIER", "MULTIPLIER():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SPA(): Address {
    let result = super.call("SPA", "SPA():(address)", []);

    return result[0].toAddress();
  }

  try_SPA(): ethereum.CallResult<Address> {
    let result = super.tryCall("SPA", "SPA():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  WEEK(): BigInt {
    let result = super.call("WEEK", "WEEK():(uint256)", []);

    return result[0].toBigInt();
  }

  try_WEEK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("WEEK", "WEEK():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(addr: Address, ts: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromUnsignedBigInt(ts)]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(addr: Address, ts: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromUnsignedBigInt(ts)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf1(addr: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf1(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfAt(addr: Address, blockNumber: BigInt): BigInt {
    let result = super.call(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(addr),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOfAt(
    addr: Address,
    blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(addr),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  epoch(): BigInt {
    let result = super.call("epoch", "epoch():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epoch", "epoch():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimateDeposit(
    autoCooldown: boolean,
    value: BigInt,
    expectedUnlockTime: BigInt
  ): veSPA__estimateDepositResult {
    let result = super.call(
      "estimateDeposit",
      "estimateDeposit(bool,uint128,uint256):(bool,int128,int128,int128,int128,uint256,uint256,uint256)",
      [
        ethereum.Value.fromBoolean(autoCooldown),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromUnsignedBigInt(expectedUnlockTime)
      ]
    );

    return new veSPA__estimateDepositResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_estimateDeposit(
    autoCooldown: boolean,
    value: BigInt,
    expectedUnlockTime: BigInt
  ): ethereum.CallResult<veSPA__estimateDepositResult> {
    let result = super.tryCall(
      "estimateDeposit",
      "estimateDeposit(bool,uint128,uint256):(bool,int128,int128,int128,int128,uint256,uint256,uint256)",
      [
        ethereum.Value.fromBoolean(autoCooldown),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromUnsignedBigInt(expectedUnlockTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new veSPA__estimateDepositResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  getLastUserSlope(addr: Address): BigInt {
    let result = super.call(
      "getLastUserSlope",
      "getLastUserSlope(address):(int128)",
      [ethereum.Value.fromAddress(addr)]
    );

    return result[0].toBigInt();
  }

  try_getLastUserSlope(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastUserSlope",
      "getLastUserSlope(address):(int128)",
      [ethereum.Value.fromAddress(addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserPointHistoryTS(addr: Address, idx: BigInt): BigInt {
    let result = super.call(
      "getUserPointHistoryTS",
      "getUserPointHistoryTS(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromUnsignedBigInt(idx)]
    );

    return result[0].toBigInt();
  }

  try_getUserPointHistoryTS(
    addr: Address,
    idx: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserPointHistoryTS",
      "getUserPointHistoryTS(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromUnsignedBigInt(idx)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lockedBalances(param0: Address): veSPA__lockedBalancesResult {
    let result = super.call(
      "lockedBalances",
      "lockedBalances(address):(bool,bool,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new veSPA__lockedBalancesResult(
      result[0].toBoolean(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_lockedBalances(
    param0: Address
  ): ethereum.CallResult<veSPA__lockedBalancesResult> {
    let result = super.tryCall(
      "lockedBalances",
      "lockedBalances(address):(bool,bool,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new veSPA__lockedBalancesResult(
        value[0].toBoolean(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  lockedEnd(addr: Address): BigInt {
    let result = super.call("lockedEnd", "lockedEnd(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBigInt();
  }

  try_lockedEnd(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lockedEnd", "lockedEnd(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pointHistory(param0: BigInt): veSPA__pointHistoryResult {
    let result = super.call(
      "pointHistory",
      "pointHistory(uint256):(int128,int128,int128,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new veSPA__pointHistoryResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_pointHistory(
    param0: BigInt
  ): ethereum.CallResult<veSPA__pointHistoryResult> {
    let result = super.tryCall(
      "pointHistory",
      "pointHistory(uint256):(int128,int128,int128,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new veSPA__pointHistoryResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  slopeChanges(param0: BigInt): BigInt {
    let result = super.call("slopeChanges", "slopeChanges(uint256):(int128)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_slopeChanges(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "slopeChanges",
      "slopeChanges(uint256):(int128)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSPALocked(): BigInt {
    let result = super.call("totalSPALocked", "totalSPALocked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSPALocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSPALocked",
      "totalSPALocked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply1(ts: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(ts)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply1(ts: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(ts)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupplyAt(blockNumber: BigInt): BigInt {
    let result = super.call(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(blockNumber)]
    );

    return result[0].toBigInt();
  }

  try_totalSupplyAt(blockNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(blockNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userPointEpoch(param0: Address): BigInt {
    let result = super.call(
      "userPointEpoch",
      "userPointEpoch(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_userPointEpoch(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userPointEpoch",
      "userPointEpoch(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userPointHistory(
    param0: Address,
    param1: BigInt
  ): veSPA__userPointHistoryResult {
    let result = super.call(
      "userPointHistory",
      "userPointHistory(address,uint256):(int128,int128,int128,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new veSPA__userPointHistoryResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_userPointHistory(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<veSPA__userPointHistoryResult> {
    let result = super.tryCall(
      "userPointHistory",
      "userPointHistory(address,uint256):(int128,int128,int128,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new veSPA__userPointHistoryResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class CheckpointCall extends ethereum.Call {
  get inputs(): CheckpointCall__Inputs {
    return new CheckpointCall__Inputs(this);
  }

  get outputs(): CheckpointCall__Outputs {
    return new CheckpointCall__Outputs(this);
  }
}

export class CheckpointCall__Inputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }
}

export class CheckpointCall__Outputs {
  _call: CheckpointCall;

  constructor(call: CheckpointCall) {
    this._call = call;
  }
}

export class CreateLockCall extends ethereum.Call {
  get inputs(): CreateLockCall__Inputs {
    return new CreateLockCall__Inputs(this);
  }

  get outputs(): CreateLockCall__Outputs {
    return new CreateLockCall__Outputs(this);
  }
}

export class CreateLockCall__Inputs {
  _call: CreateLockCall;

  constructor(call: CreateLockCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get unlockTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get autoCooldown(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class CreateLockCall__Outputs {
  _call: CreateLockCall;

  constructor(call: CreateLockCall) {
    this._call = call;
  }
}

export class DepositForCall extends ethereum.Call {
  get inputs(): DepositForCall__Inputs {
    return new DepositForCall__Inputs(this);
  }

  get outputs(): DepositForCall__Outputs {
    return new DepositForCall__Outputs(this);
  }
}

export class DepositForCall__Inputs {
  _call: DepositForCall;

  constructor(call: DepositForCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositForCall__Outputs {
  _call: DepositForCall;

  constructor(call: DepositForCall) {
    this._call = call;
  }
}

export class IncreaseAmountCall extends ethereum.Call {
  get inputs(): IncreaseAmountCall__Inputs {
    return new IncreaseAmountCall__Inputs(this);
  }

  get outputs(): IncreaseAmountCall__Outputs {
    return new IncreaseAmountCall__Outputs(this);
  }
}

export class IncreaseAmountCall__Inputs {
  _call: IncreaseAmountCall;

  constructor(call: IncreaseAmountCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class IncreaseAmountCall__Outputs {
  _call: IncreaseAmountCall;

  constructor(call: IncreaseAmountCall) {
    this._call = call;
  }
}

export class IncreaseUnlockTimeCall extends ethereum.Call {
  get inputs(): IncreaseUnlockTimeCall__Inputs {
    return new IncreaseUnlockTimeCall__Inputs(this);
  }

  get outputs(): IncreaseUnlockTimeCall__Outputs {
    return new IncreaseUnlockTimeCall__Outputs(this);
  }
}

export class IncreaseUnlockTimeCall__Inputs {
  _call: IncreaseUnlockTimeCall;

  constructor(call: IncreaseUnlockTimeCall) {
    this._call = call;
  }

  get unlockTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class IncreaseUnlockTimeCall__Outputs {
  _call: IncreaseUnlockTimeCall;

  constructor(call: IncreaseUnlockTimeCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _SPA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _version(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitiateCooldownCall extends ethereum.Call {
  get inputs(): InitiateCooldownCall__Inputs {
    return new InitiateCooldownCall__Inputs(this);
  }

  get outputs(): InitiateCooldownCall__Outputs {
    return new InitiateCooldownCall__Outputs(this);
  }
}

export class InitiateCooldownCall__Inputs {
  _call: InitiateCooldownCall;

  constructor(call: InitiateCooldownCall) {
    this._call = call;
  }
}

export class InitiateCooldownCall__Outputs {
  _call: InitiateCooldownCall;

  constructor(call: InitiateCooldownCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}