//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,toTimestamp } from '../helpers';
export interface _SetSignerParams {
  actorAddress: string;
  expiredAt: Date;
}
export interface _SetSignerParamsProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle._SetSignerParams';
  value: Uint8Array;
}
export interface _SetSignerParamsAmino {
  actor_address?: string;
  expired_at?: string;
}
export interface _SetSignerParamsAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle._SetSignerParams';
  value: _SetSignerParamsAmino;
}
export interface _SetSignerParamsSDKType {
  actor_address: string;
  expired_at: Date;
}
export interface BindedSigner {
  ownerAddress: string;
  signers: _SetSignerParams[];
  actorCount: bigint;
}
export interface BindedSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.BindedSigner';
  value: Uint8Array;
}
export interface BindedSignerAmino {
  ownerAddress?: string;
  signers?: _SetSignerParamsAmino[];
  actorCount?: string;
}
export interface BindedSignerAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.BindedSigner';
  value: BindedSignerAmino;
}
export interface BindedSignerSDKType {
  ownerAddress: string;
  signers: _SetSignerParamsSDKType[];
  actorCount: bigint;
}
function createBase_SetSignerParams(): _SetSignerParams {
  return {
    actorAddress: '',
    expiredAt: new Date()
  };
}
export const _SetSignerParams = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle._SetSignerParams',
  encode(message: _SetSignerParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actorAddress !== '') {
      writer.uint32(10).string(message.actorAddress);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiredAt), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): _SetSignerParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBase_SetSignerParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actorAddress = reader.string();
        break;
      case 2:
        message.expiredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<_SetSignerParams>): _SetSignerParams {
    const message = createBase_SetSignerParams();
    message.actorAddress = object.actorAddress ?? '';
    message.expiredAt = object.expiredAt ?? undefined;
    return message;
  },
  fromAmino(object: _SetSignerParamsAmino): _SetSignerParams {
    const message = createBase_SetSignerParams();
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    return message;
  },
  toAmino(message: _SetSignerParams): _SetSignerParamsAmino {
    const obj: any = {};
    obj.actor_address = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.expired_at = message.expiredAt ? Timestamp.toAmino(toTimestamp(message.expiredAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: _SetSignerParamsAminoMsg): _SetSignerParams {
    return _SetSignerParams.fromAmino(object.value);
  },
  fromProtoMsg(message: _SetSignerParamsProtoMsg): _SetSignerParams {
    return _SetSignerParams.decode(message.value);
  },
  toProto(message: _SetSignerParams): Uint8Array {
    return _SetSignerParams.encode(message).finish();
  },
  toProtoMsg(message: _SetSignerParams): _SetSignerParamsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle._SetSignerParams',
      value: _SetSignerParams.encode(message).finish()
    };
  }
};
function createBaseBindedSigner(): BindedSigner {
  return {
    ownerAddress: '',
    signers: [],
    actorCount: BigInt(0)
  };
}
export const BindedSigner = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.BindedSigner',
  encode(message: BindedSigner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    for (const v of message.signers) {
      _SetSignerParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.actorCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.actorCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BindedSigner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindedSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      case 2:
        message.signers.push(_SetSignerParams.decode(reader, reader.uint32()));
        break;
      case 3:
        message.actorCount = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BindedSigner>): BindedSigner {
    const message = createBaseBindedSigner();
    message.ownerAddress = object.ownerAddress ?? '';
    message.signers = object.signers?.map(e => _SetSignerParams.fromPartial(e)) || [];
    message.actorCount = object.actorCount !== undefined && object.actorCount !== null ? BigInt(object.actorCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BindedSignerAmino): BindedSigner {
    const message = createBaseBindedSigner();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    message.signers = object.signers?.map(e => _SetSignerParams.fromAmino(e)) || [];
    if (object.actorCount !== undefined && object.actorCount !== null) {
      message.actorCount = BigInt(object.actorCount);
    }
    return message;
  },
  toAmino(message: BindedSigner): BindedSignerAmino {
    const obj: any = {};
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? _SetSignerParams.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.actorCount = message.actorCount !== BigInt(0) ? (message.actorCount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BindedSignerAminoMsg): BindedSigner {
    return BindedSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: BindedSignerProtoMsg): BindedSigner {
    return BindedSigner.decode(message.value);
  },
  toProto(message: BindedSigner): Uint8Array {
    return BindedSigner.encode(message).finish();
  },
  toProtoMsg(message: BindedSigner): BindedSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.BindedSigner',
      value: BindedSigner.encode(message).finish()
    };
  }
};