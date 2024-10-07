//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
export interface TokenBurn {
  token: string;
  amount: bigint;
}
export interface TokenBurnProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn';
  value: Uint8Array;
}
export interface TokenBurnAmino {
  token?: string;
  amount?: string;
}
export interface TokenBurnAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn';
  value: TokenBurnAmino;
}
export interface TokenBurnSDKType {
  token: string;
  amount: bigint;
}
function createBaseTokenBurn(): TokenBurn {
  return {
    token: '',
    amount: BigInt(0)
  };
}
export const TokenBurn = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn',
  encode(message: TokenBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token = reader.string();
        break;
      case 2:
        message.amount = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenBurn>): TokenBurn {
    const message = createBaseTokenBurn();
    message.token = object.token ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TokenBurnAmino): TokenBurn {
    const message = createBaseTokenBurn();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: TokenBurn): TokenBurnAmino {
    const obj: any = {};
    obj.token = message.token === '' ? undefined : message.token;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenBurnAminoMsg): TokenBurn {
    return TokenBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenBurnProtoMsg): TokenBurn {
    return TokenBurn.decode(message.value);
  },
  toProto(message: TokenBurn): Uint8Array {
    return TokenBurn.encode(message).finish();
  },
  toProtoMsg(message: TokenBurn): TokenBurnProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn',
      value: TokenBurn.encode(message).finish()
    };
  }
};