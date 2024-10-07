//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
export interface Burn {
  id: bigint;
  creator: string;
  token: string;
  amount: bigint;
}
export interface BurnProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn';
  value: Uint8Array;
}
export interface BurnAmino {
  id?: string;
  creator?: string;
  token?: string;
  amount?: string;
}
export interface BurnAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.Burn';
  value: BurnAmino;
}
export interface BurnSDKType {
  id: bigint;
  creator: string;
  token: string;
  amount: bigint;
}
function createBaseBurn(): Burn {
  return {
    id: BigInt(0),
    creator: '',
    token: '',
    amount: BigInt(0)
  };
}
export const Burn = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn',
  encode(message: Burn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator);
    }
    if (message.token !== '') {
      writer.uint32(26).string(message.token);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Burn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      case 2:
        message.creator = reader.string();
        break;
      case 3:
        message.token = reader.string();
        break;
      case 4:
        message.amount = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Burn>): Burn {
    const message = createBaseBurn();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? '';
    message.token = object.token ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BurnAmino): Burn {
    const message = createBaseBurn();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: Burn): BurnAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.token = message.token === '' ? undefined : message.token;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BurnAminoMsg): Burn {
    return Burn.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnProtoMsg): Burn {
    return Burn.decode(message.value);
  },
  toProto(message: Burn): Uint8Array {
    return Burn.encode(message).finish();
  },
  toProtoMsg(message: Burn): BurnProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn',
      value: Burn.encode(message).finish()
    };
  }
};