//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
export interface ActionSignature {
  signature: string;
  message: string;
}
export interface ActionSignatureProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.ActionSignature';
  value: Uint8Array;
}
export interface ActionSignatureAmino {
  signature?: string;
  message?: string;
}
export interface ActionSignatureAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.ActionSignature';
  value: ActionSignatureAmino;
}
export interface ActionSignatureSDKType {
  signature: string;
  message: string;
}
function createBaseActionSignature(): ActionSignature {
  return {
    signature: '',
    message: ''
  };
}
export const ActionSignature = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.ActionSignature',
  encode(message: ActionSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature !== '') {
      writer.uint32(10).string(message.signature);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.signature = reader.string();
        break;
      case 2:
        message.message = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionSignature>): ActionSignature {
    const message = createBaseActionSignature();
    message.signature = object.signature ?? '';
    message.message = object.message ?? '';
    return message;
  },
  fromAmino(object: ActionSignatureAmino): ActionSignature {
    const message = createBaseActionSignature();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ActionSignature): ActionSignatureAmino {
    const obj: any = {};
    obj.signature = message.signature === '' ? undefined : message.signature;
    obj.message = message.message === '' ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: ActionSignatureAminoMsg): ActionSignature {
    return ActionSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionSignatureProtoMsg): ActionSignature {
    return ActionSignature.decode(message.value);
  },
  toProto(message: ActionSignature): Uint8Array {
    return ActionSignature.encode(message).finish();
  },
  toProtoMsg(message: ActionSignature): ActionSignatureProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.ActionSignature',
      value: ActionSignature.encode(message).finish()
    };
  }
};