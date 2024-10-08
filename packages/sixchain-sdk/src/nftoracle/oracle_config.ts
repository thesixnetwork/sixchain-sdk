//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
export interface OracleConfig {
  minimumConfirmation: number;
}
export interface OracleConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.OracleConfig';
  value: Uint8Array;
}
export interface OracleConfigAmino {
  minimum_confirmation?: number;
}
export interface OracleConfigAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.OracleConfig';
  value: OracleConfigAmino;
}
export interface OracleConfigSDKType {
  minimum_confirmation: number;
}
function createBaseOracleConfig(): OracleConfig {
  return {
    minimumConfirmation: 0
  };
}
export const OracleConfig = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.OracleConfig',
  encode(message: OracleConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumConfirmation !== 0) {
      writer.uint32(8).int32(message.minimumConfirmation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.minimumConfirmation = reader.int32();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleConfig>): OracleConfig {
    const message = createBaseOracleConfig();
    message.minimumConfirmation = object.minimumConfirmation ?? 0;
    return message;
  },
  fromAmino(object: OracleConfigAmino): OracleConfig {
    const message = createBaseOracleConfig();
    if (object.minimum_confirmation !== undefined && object.minimum_confirmation !== null) {
      message.minimumConfirmation = object.minimum_confirmation;
    }
    return message;
  },
  toAmino(message: OracleConfig): OracleConfigAmino {
    const obj: any = {};
    obj.minimum_confirmation = message.minimumConfirmation === 0 ? undefined : message.minimumConfirmation;
    return obj;
  },
  fromAminoMsg(object: OracleConfigAminoMsg): OracleConfig {
    return OracleConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleConfigProtoMsg): OracleConfig {
    return OracleConfig.decode(message.value);
  },
  toProto(message: OracleConfig): Uint8Array {
    return OracleConfig.encode(message).finish();
  },
  toProtoMsg(message: OracleConfig): OracleConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.OracleConfig',
      value: OracleConfig.encode(message).finish()
    };
  }
};