import {
  BigInt,
  BigDecimal,
  TypedMap,
  TypedMapEntry,
  Address,
  log,
} from "@graphprotocol/graph-ts";


//Convert timestamp to Date
export function timestampConvertDateTime(time: BigInt): string {
  let date = new Date(1000 * time.toI32());
  let dateConverted = date
    .toDateString()
    .concat("_")
    .concat(date.toTimeString());

  return dateConverted;
}
export function timestampConvertDate(time: BigInt): string {
  let date = new Date(1000 * time.toI32());
  let dateConverted = date.toDateString();

  return dateConverted;
}
export function digitsConvert(value: BigInt): BigDecimal {
  let converted = value
    .toBigDecimal()
    .div(BigDecimal.fromString("1000000000000000000"));

  return converted;
}
export function collateralConvert(value: BigInt): BigDecimal {
  let converted = value.toBigDecimal().div(BigDecimal.fromString("1000000"));

  return converted;
}

export function actionTypeConverter(actionType: u32): string {
  let actionTypeConverted: string = "";
  switch(actionType) {
    case 0:
      actionTypeConverted = 'Deposit For';
      break;
    case 1:
      actionTypeConverted = 'Create Lock';
      break;
    case 2:
      actionTypeConverted = 'Increase Amount';
      break;
    case 3:
      actionTypeConverted = 'Increase Lock Time';
      break;
    case 4:
      actionTypeConverted = 'Initiate Cooldown';
      break;
  }

  return actionTypeConverted;
}

// let mapped = new TypedMap<string, BigDecimal>();

// export function getHolders(address:string,balance:BigDecimal):BigDecimal{
//   let mappedEntry = new TypedMapEntry<string, BigDecimal>(address,balance);

//   mapped.entries.push(mappedEntry)

//  let size= BigInt.fromI32(mapped.entries.length).toBigDecimal()
//   return size
// }
