//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
export interface Options {
  defaultMintee: string;
}
export interface OptionsProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.Options';
  value: Uint8Array;
}
export interface OptionsAmino {
  defaultMintee?: string;
}
export interface OptionsAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.v2.Options';
  value: OptionsAmino;
}
export interface OptionsSDKType {
  defaultMintee: string;
}
function createBaseOptions(): Options {
  return {
    defaultMintee: ''
  };
}
export const Options = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.Options',
  encode(message: Options, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultMintee !== '') {
      writer.uint32(10).string(message.defaultMintee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Options {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.defaultMintee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Options>): Options {
    const message = createBaseOptions();
    message.defaultMintee = object.defaultMintee ?? '';
    return message;
  },
  fromAmino(object: OptionsAmino): Options {
    const message = createBaseOptions();
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    }
    return message;
  },
  toAmino(message: Options): OptionsAmino {
    const obj: any = {};
    obj.defaultMintee = message.defaultMintee === '' ? undefined : message.defaultMintee;
    return obj;
  },
  fromAminoMsg(object: OptionsAminoMsg): Options {
    return Options.fromAmino(object.value);
  },
  fromProtoMsg(message: OptionsProtoMsg): Options {
    return Options.decode(message.value);
  },
  toProto(message: Options): Uint8Array {
    return Options.encode(message).finish();
  },
  toProtoMsg(message: Options): OptionsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.v2.Options',
      value: Options.encode(message).finish()
    };
  }
};