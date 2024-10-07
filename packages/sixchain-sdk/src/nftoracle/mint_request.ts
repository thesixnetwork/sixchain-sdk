//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,toTimestamp } from '../helpers';
import { DataHash, DataHashAmino, DataHashSDKType,RequestStatus } from './request';
export interface MintRequest {
  id: bigint;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: bigint;
  status: RequestStatus;
  currentConfirm: bigint;
  confirmers: string[];
  /** NftOriginData nft_origin_data = 8; */
  createdAt: Date;
  validUntil: Date;
  dataHashes: DataHash[];
  expiredHeight: bigint;
}
export interface MintRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.MintRequest';
  value: Uint8Array;
}
export interface MintRequestAmino {
  id?: string;
  nft_schema_code?: string;
  token_id?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: string[];
  /** NftOriginData nft_origin_data = 8; */
  created_at?: string;
  valid_until?: string;
  data_hashes?: DataHashAmino[];
  expired_height?: string;
}
export interface MintRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.MintRequest';
  value: MintRequestAmino;
}
export interface MintRequestSDKType {
  id: bigint;
  nft_schema_code: string;
  token_id: string;
  required_confirm: bigint;
  status: RequestStatus;
  current_confirm: bigint;
  confirmers: string[];
  created_at: Date;
  valid_until: Date;
  data_hashes: DataHashSDKType[];
  expired_height: bigint;
}
function createBaseMintRequest(): MintRequest {
  return {
    id: BigInt(0),
    nftSchemaCode: '',
    tokenId: '',
    requiredConfirm: BigInt(0),
    status: 0,
    currentConfirm: BigInt(0),
    confirmers: [],
    createdAt: new Date(),
    validUntil: new Date(),
    dataHashes: [],
    expiredHeight: BigInt(0)
  };
}
export const MintRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.MintRequest',
  encode(message: MintRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.requiredConfirm !== BigInt(0)) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.currentConfirm !== BigInt(0)) {
      writer.uint32(48).uint64(message.currentConfirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(58).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.dataHashes) {
      DataHash.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.expiredHeight !== BigInt(0)) {
      writer.uint32(88).int64(message.expiredHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      case 4:
        message.requiredConfirm = reader.uint64();
        break;
      case 5:
        message.status = reader.int32() as any;
        break;
      case 6:
        message.currentConfirm = reader.uint64();
        break;
      case 7:
        message.confirmers.push(reader.string());
        break;
      case 8:
        message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 9:
        message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 10:
        message.dataHashes.push(DataHash.decode(reader, reader.uint32()));
        break;
      case 11:
        message.expiredHeight = reader.int64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintRequest>): MintRequest {
    const message = createBaseMintRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? BigInt(object.requiredConfirm.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? BigInt(object.currentConfirm.toString()) : BigInt(0);
    message.confirmers = object.confirmers?.map(e => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.dataHashes = object.dataHashes?.map(e => DataHash.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? BigInt(object.expiredHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MintRequestAmino): MintRequest {
    const message = createBaseMintRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.required_confirm !== undefined && object.required_confirm !== null) {
      message.requiredConfirm = BigInt(object.required_confirm);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.current_confirm !== undefined && object.current_confirm !== null) {
      message.currentConfirm = BigInt(object.current_confirm);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.validUntil = fromTimestamp(Timestamp.fromAmino(object.valid_until));
    }
    message.dataHashes = object.data_hashes?.map(e => DataHash.fromAmino(e)) || [];
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = BigInt(object.expired_height);
    }
    return message;
  },
  toAmino(message: MintRequest): MintRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.required_confirm = message.requiredConfirm !== BigInt(0) ? (message.requiredConfirm?.toString)() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.current_confirm = message.currentConfirm !== BigInt(0) ? (message.currentConfirm?.toString)() : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.valid_until = message.validUntil ? Timestamp.toAmino(toTimestamp(message.validUntil)) : undefined;
    if (message.dataHashes) {
      obj.data_hashes = message.dataHashes.map(e => e ? DataHash.toAmino(e) : undefined);
    } else {
      obj.data_hashes = message.dataHashes;
    }
    obj.expired_height = message.expiredHeight !== BigInt(0) ? (message.expiredHeight?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MintRequestAminoMsg): MintRequest {
    return MintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MintRequestProtoMsg): MintRequest {
    return MintRequest.decode(message.value);
  },
  toProto(message: MintRequest): Uint8Array {
    return MintRequest.encode(message).finish();
  },
  toProtoMsg(message: MintRequest): MintRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.MintRequest',
      value: MintRequest.encode(message).finish()
    };
  }
};