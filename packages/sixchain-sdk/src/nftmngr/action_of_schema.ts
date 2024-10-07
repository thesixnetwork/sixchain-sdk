//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
export interface ActionOfSchema {
  nftSchemaCode: string;
  name: string;
  index: bigint;
}
export interface ActionOfSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftmngr.ActionOfSchema';
  value: Uint8Array;
}
export interface ActionOfSchemaAmino {
  nftSchemaCode?: string;
  name?: string;
  index?: string;
}
export interface ActionOfSchemaAminoMsg {
  type: '/thesixnetwork.sixnft.nftmngr.ActionOfSchema';
  value: ActionOfSchemaAmino;
}
export interface ActionOfSchemaSDKType {
  nftSchemaCode: string;
  name: string;
  index: bigint;
}
function createBaseActionOfSchema(): ActionOfSchema {
  return {
    nftSchemaCode: '',
    name: '',
    index: BigInt(0)
  };
}
export const ActionOfSchema = {
  typeUrl: '/thesixnetwork.sixnft.nftmngr.ActionOfSchema',
  encode(message: ActionOfSchema, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(24).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionOfSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionOfSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.index = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionOfSchema>): ActionOfSchema {
    const message = createBaseActionOfSchema();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ActionOfSchemaAmino): ActionOfSchema {
    const message = createBaseActionOfSchema();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: ActionOfSchema): ActionOfSchemaAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ActionOfSchemaAminoMsg): ActionOfSchema {
    return ActionOfSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionOfSchemaProtoMsg): ActionOfSchema {
    return ActionOfSchema.decode(message.value);
  },
  toProto(message: ActionOfSchema): Uint8Array {
    return ActionOfSchema.encode(message).finish();
  },
  toProtoMsg(message: ActionOfSchema): ActionOfSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftmngr.ActionOfSchema',
      value: ActionOfSchema.encode(message).finish()
    };
  }
};