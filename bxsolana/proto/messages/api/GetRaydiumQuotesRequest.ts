import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetRaydiumQuotesRequest {
    inToken: string;
    outToken: string;
    inAmount: number;
    slippage: number;
    limit: number;
  }
}
export type Type = $.api.GetRaydiumQuotesRequest;

export function getDefaultValue(): $.api.GetRaydiumQuotesRequest {
  return {
    inToken: "",
    outToken: "",
    inAmount: 0,
    slippage: 0,
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumQuotesRequest>): $.api.GetRaydiumQuotesRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumQuotesRequest): unknown {
  const result: any = {};
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.int32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumQuotesRequest {
  const result = getDefaultValue();
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.int32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumQuotesRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumQuotesRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  return result;
}
