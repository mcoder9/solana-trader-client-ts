import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetBundleTipRequest {}
}
export type Type = $.api.GetBundleTipRequest;

export function getDefaultValue(): $.api.GetBundleTipRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetBundleTipRequest>): $.api.GetBundleTipRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBundleTipRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetBundleTipRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetBundleTipRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBundleTipRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
