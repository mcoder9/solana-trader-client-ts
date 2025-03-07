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
  export interface GetPumpFunSwapsStreamRequest {
    tokens: string[];
  }
}
export type Type = $.api.GetPumpFunSwapsStreamRequest;

export function getDefaultValue(): $.api.GetPumpFunSwapsStreamRequest {
  return {
    tokens: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunSwapsStreamRequest>): $.api.GetPumpFunSwapsStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunSwapsStreamRequest): unknown {
  const result: any = {};
  result.tokens = value.tokens.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunSwapsStreamRequest {
  const result = getDefaultValue();
  result.tokens = value.tokens?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunSwapsStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.tokens) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunSwapsStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.tokens = value as any;
  }
  return result;
}
