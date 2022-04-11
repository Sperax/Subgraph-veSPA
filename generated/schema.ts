// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class veSPAGlobalCheckpointEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caller", Value.fromBytes(Bytes.empty()));
    this.set("epoch", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save veSPAGlobalCheckpointEvent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save veSPAGlobalCheckpointEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("veSPAGlobalCheckpointEvent", id.toString(), this);
    }
  }

  static load(id: string): veSPAGlobalCheckpointEvent | null {
    return changetype<veSPAGlobalCheckpointEvent | null>(
      store.get("veSPAGlobalCheckpointEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caller(): Bytes {
    let value = this.get("caller");
    return value!.toBytes();
  }

  set caller(value: Bytes) {
    this.set("caller", Value.fromBytes(value));
  }

  get epoch(): BigDecimal {
    let value = this.get("epoch");
    return value!.toBigDecimal();
  }

  set epoch(value: BigDecimal) {
    this.set("epoch", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class veSPASupplyEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("previousSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("actualSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save veSPASupplyEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save veSPASupplyEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("veSPASupplyEvent", id.toString(), this);
    }
  }

  static load(id: string): veSPASupplyEvent | null {
    return changetype<veSPASupplyEvent | null>(
      store.get("veSPASupplyEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousSupply(): BigDecimal {
    let value = this.get("previousSupply");
    return value!.toBigDecimal();
  }

  set previousSupply(value: BigDecimal) {
    this.set("previousSupply", Value.fromBigDecimal(value));
  }

  get actualSupply(): BigDecimal {
    let value = this.get("actualSupply");
    return value!.toBigDecimal();
  }

  set actualSupply(value: BigDecimal) {
    this.set("actualSupply", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class veSPAUserCheckpointEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("provider", Value.fromBytes(Bytes.empty()));
    this.set("depositedValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("autoCooldown", Value.fromBoolean(false));
    this.set("expiryUnix", Value.fromBigInt(BigInt.zero()));
    this.set("expiry", Value.fromString(""));
    this.set("actionType", Value.fromString(""));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save veSPAUserCheckpointEvent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save veSPAUserCheckpointEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("veSPAUserCheckpointEvent", id.toString(), this);
    }
  }

  static load(id: string): veSPAUserCheckpointEvent | null {
    return changetype<veSPAUserCheckpointEvent | null>(
      store.get("veSPAUserCheckpointEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get provider(): Bytes {
    let value = this.get("provider");
    return value!.toBytes();
  }

  set provider(value: Bytes) {
    this.set("provider", Value.fromBytes(value));
  }

  get depositedValue(): BigDecimal {
    let value = this.get("depositedValue");
    return value!.toBigDecimal();
  }

  set depositedValue(value: BigDecimal) {
    this.set("depositedValue", Value.fromBigDecimal(value));
  }

  get autoCooldown(): boolean {
    let value = this.get("autoCooldown");
    return value!.toBoolean();
  }

  set autoCooldown(value: boolean) {
    this.set("autoCooldown", Value.fromBoolean(value));
  }

  get expiryUnix(): BigInt {
    let value = this.get("expiryUnix");
    return value!.toBigInt();
  }

  set expiryUnix(value: BigInt) {
    this.set("expiryUnix", Value.fromBigInt(value));
  }

  get expiry(): string {
    let value = this.get("expiry");
    return value!.toString();
  }

  set expiry(value: string) {
    this.set("expiry", Value.fromString(value));
  }

  get actionType(): string {
    let value = this.get("actionType");
    return value!.toString();
  }

  set actionType(value: string) {
    this.set("actionType", Value.fromString(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class veSPAWithdrawEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("provider", Value.fromBytes(Bytes.empty()));
    this.set("withdrawTime", Value.fromBigInt(BigInt.zero()));
    this.set("withdrawnValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save veSPAWithdrawEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save veSPAWithdrawEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("veSPAWithdrawEvent", id.toString(), this);
    }
  }

  static load(id: string): veSPAWithdrawEvent | null {
    return changetype<veSPAWithdrawEvent | null>(
      store.get("veSPAWithdrawEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get provider(): Bytes {
    let value = this.get("provider");
    return value!.toBytes();
  }

  set provider(value: Bytes) {
    this.set("provider", Value.fromBytes(value));
  }

  get withdrawTime(): BigInt {
    let value = this.get("withdrawTime");
    return value!.toBigInt();
  }

  set withdrawTime(value: BigInt) {
    this.set("withdrawTime", Value.fromBigInt(value));
  }

  get withdrawnValue(): BigDecimal {
    let value = this.get("withdrawnValue");
    return value!.toBigDecimal();
  }

  set withdrawnValue(value: BigDecimal) {
    this.set("withdrawnValue", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}