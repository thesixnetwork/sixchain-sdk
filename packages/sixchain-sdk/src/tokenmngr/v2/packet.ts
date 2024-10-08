//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
export interface TokenmngrPacketData {
  noData?: NoData;
}
export interface TokenmngrPacketDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.TokenmngrPacketData';
  value: Uint8Array;
}
export interface TokenmngrPacketDataAmino {
  noData?: NoDataAmino;
}
export interface TokenmngrPacketDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.v2.TokenmngrPacketData';
  value: TokenmngrPacketDataAmino;
}
export interface TokenmngrPacketDataSDKType {
  noData?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.NoData';
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.v2.NoData';
  value: NoDataAmino;
}
export interface NoDataSDKType {}
function createBaseTokenmngrPacketData(): TokenmngrPacketData {
  return {
    noData: undefined
  };
}
export const TokenmngrPacketData = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.TokenmngrPacketData',
  encode(message: TokenmngrPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenmngrPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenmngrPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.noData = NoData.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenmngrPacketData>): TokenmngrPacketData {
    const message = createBaseTokenmngrPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: TokenmngrPacketDataAmino): TokenmngrPacketData {
    const message = createBaseTokenmngrPacketData();
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromAmino(object.noData);
    }
    return message;
  },
  toAmino(message: TokenmngrPacketData): TokenmngrPacketDataAmino {
    const obj: any = {};
    obj.noData = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenmngrPacketDataAminoMsg): TokenmngrPacketData {
    return TokenmngrPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenmngrPacketDataProtoMsg): TokenmngrPacketData {
    return TokenmngrPacketData.decode(message.value);
  },
  toProto(message: TokenmngrPacketData): Uint8Array {
    return TokenmngrPacketData.encode(message).finish();
  },
  toProtoMsg(message: TokenmngrPacketData): TokenmngrPacketDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.TokenmngrPacketData',
      value: TokenmngrPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.NoData',
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.NoData',
      value: NoData.encode(message).finish()
    };
  }
};