//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../cosmos/base/query/v1beta1/pagination';
import { ActionOracleRequest, ActionOracleRequestAmino, ActionOracleRequestSDKType } from './action_request';
import { ActionSigner, ActionSignerAmino, ActionSignerSDKType } from './action_signer';
import { ActionSignerConfig, ActionSignerConfigAmino, ActionSignerConfigSDKType } from './action_signer_config';
import { BindedSigner, BindedSignerAmino, BindedSignerSDKType } from './binded_signer';
import { CollectionOwnerRequest, CollectionOwnerRequestAmino, CollectionOwnerRequestSDKType } from './collection_owner_request';
import { MintRequest, MintRequestAmino, MintRequestSDKType } from './mint_request';
import { OracleConfig, OracleConfigAmino, OracleConfigSDKType } from './oracle_config';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { SyncActionSigner, SyncActionSignerAmino, SyncActionSignerSDKType } from './sync_action_signer';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetMintRequestRequest {
  id: bigint;
}
export interface QueryGetMintRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest';
  value: Uint8Array;
}
export interface QueryGetMintRequestRequestAmino {
  id?: string;
}
export interface QueryGetMintRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest';
  value: QueryGetMintRequestRequestAmino;
}
export interface QueryGetMintRequestRequestSDKType {
  id: bigint;
}
export interface QueryGetMintRequestResponse {
  mintRequest: MintRequest;
}
export interface QueryGetMintRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse';
  value: Uint8Array;
}
export interface QueryGetMintRequestResponseAmino {
  MintRequest?: MintRequestAmino;
}
export interface QueryGetMintRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse';
  value: QueryGetMintRequestResponseAmino;
}
export interface QueryGetMintRequestResponseSDKType {
  MintRequest: MintRequestSDKType;
}
export interface QueryAllMintRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllMintRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest';
  value: Uint8Array;
}
export interface QueryAllMintRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMintRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest';
  value: QueryAllMintRequestRequestAmino;
}
export interface QueryAllMintRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMintRequestResponse {
  mintRequest: MintRequest[];
  pagination?: PageResponse;
}
export interface QueryAllMintRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse';
  value: Uint8Array;
}
export interface QueryAllMintRequestResponseAmino {
  MintRequest?: MintRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMintRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse';
  value: QueryAllMintRequestResponseAmino;
}
export interface QueryAllMintRequestResponseSDKType {
  MintRequest: MintRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActionRequestRequest {
  id: bigint;
}
export interface QueryGetActionRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest';
  value: Uint8Array;
}
export interface QueryGetActionRequestRequestAmino {
  id?: string;
}
export interface QueryGetActionRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest';
  value: QueryGetActionRequestRequestAmino;
}
export interface QueryGetActionRequestRequestSDKType {
  id: bigint;
}
export interface QueryGetActionRequestResponse {
  actionOracleRequest: ActionOracleRequest;
}
export interface QueryGetActionRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse';
  value: Uint8Array;
}
export interface QueryGetActionRequestResponseAmino {
  ActionOracleRequest?: ActionOracleRequestAmino;
}
export interface QueryGetActionRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse';
  value: QueryGetActionRequestResponseAmino;
}
export interface QueryGetActionRequestResponseSDKType {
  ActionOracleRequest: ActionOracleRequestSDKType;
}
export interface QueryAllActionRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest';
  value: Uint8Array;
}
export interface QueryAllActionRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest';
  value: QueryAllActionRequestRequestAmino;
}
export interface QueryAllActionRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionRequestResponse {
  actionOracleRequest: ActionOracleRequest[];
  pagination?: PageResponse;
}
export interface QueryAllActionRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse';
  value: Uint8Array;
}
export interface QueryAllActionRequestResponseAmino {
  ActionOracleRequest?: ActionOracleRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse';
  value: QueryAllActionRequestResponseAmino;
}
export interface QueryAllActionRequestResponseSDKType {
  ActionOracleRequest: ActionOracleRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetCollectionOwnerRequestRequest {
  id: bigint;
}
export interface QueryGetCollectionOwnerRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest';
  value: Uint8Array;
}
export interface QueryGetCollectionOwnerRequestRequestAmino {
  id?: string;
}
export interface QueryGetCollectionOwnerRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest';
  value: QueryGetCollectionOwnerRequestRequestAmino;
}
export interface QueryGetCollectionOwnerRequestRequestSDKType {
  id: bigint;
}
export interface QueryGetCollectionOwnerRequestResponse {
  collectionOwnerRequest: CollectionOwnerRequest;
}
export interface QueryGetCollectionOwnerRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse';
  value: Uint8Array;
}
export interface QueryGetCollectionOwnerRequestResponseAmino {
  CollectionOwnerRequest?: CollectionOwnerRequestAmino;
}
export interface QueryGetCollectionOwnerRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse';
  value: QueryGetCollectionOwnerRequestResponseAmino;
}
export interface QueryGetCollectionOwnerRequestResponseSDKType {
  CollectionOwnerRequest: CollectionOwnerRequestSDKType;
}
export interface QueryAllCollectionOwnerRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllCollectionOwnerRequestRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest';
  value: Uint8Array;
}
export interface QueryAllCollectionOwnerRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllCollectionOwnerRequestRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest';
  value: QueryAllCollectionOwnerRequestRequestAmino;
}
export interface QueryAllCollectionOwnerRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllCollectionOwnerRequestResponse {
  collectionOwnerRequest: CollectionOwnerRequest[];
  pagination?: PageResponse;
}
export interface QueryAllCollectionOwnerRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse';
  value: Uint8Array;
}
export interface QueryAllCollectionOwnerRequestResponseAmino {
  CollectionOwnerRequest?: CollectionOwnerRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllCollectionOwnerRequestResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse';
  value: QueryAllCollectionOwnerRequestResponseAmino;
}
export interface QueryAllCollectionOwnerRequestResponseSDKType {
  CollectionOwnerRequest: CollectionOwnerRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOracleConfigRequest {}
export interface QueryGetOracleConfigRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest';
  value: Uint8Array;
}
export interface QueryGetOracleConfigRequestAmino {}
export interface QueryGetOracleConfigRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest';
  value: QueryGetOracleConfigRequestAmino;
}
export interface QueryGetOracleConfigRequestSDKType {}
export interface QueryGetOracleConfigResponse {
  oracleConfig: OracleConfig;
}
export interface QueryGetOracleConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse';
  value: Uint8Array;
}
export interface QueryGetOracleConfigResponseAmino {
  OracleConfig?: OracleConfigAmino;
}
export interface QueryGetOracleConfigResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse';
  value: QueryGetOracleConfigResponseAmino;
}
export interface QueryGetOracleConfigResponseSDKType {
  OracleConfig: OracleConfigSDKType;
}
export interface QueryGetActionSignerRequest {
  actorAddress: string;
  ownerAddress: string;
}
export interface QueryGetActionSignerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerRequest';
  value: Uint8Array;
}
export interface QueryGetActionSignerRequestAmino {
  actorAddress?: string;
  ownerAddress?: string;
}
export interface QueryGetActionSignerRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerRequest';
  value: QueryGetActionSignerRequestAmino;
}
export interface QueryGetActionSignerRequestSDKType {
  actorAddress: string;
  ownerAddress: string;
}
export interface QueryGetActionSignerResponse {
  actionSigner: ActionSigner;
}
export interface QueryGetActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerResponse';
  value: Uint8Array;
}
export interface QueryGetActionSignerResponseAmino {
  actionSigner?: ActionSignerAmino;
}
export interface QueryGetActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerResponse';
  value: QueryGetActionSignerResponseAmino;
}
export interface QueryGetActionSignerResponseSDKType {
  actionSigner: ActionSignerSDKType;
}
export interface QueryAllActionSignerRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionSignerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerRequest';
  value: Uint8Array;
}
export interface QueryAllActionSignerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionSignerRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerRequest';
  value: QueryAllActionSignerRequestAmino;
}
export interface QueryAllActionSignerRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionSignerResponse {
  actionSigner: ActionSigner[];
  pagination?: PageResponse;
}
export interface QueryAllActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerResponse';
  value: Uint8Array;
}
export interface QueryAllActionSignerResponseAmino {
  actionSigner?: ActionSignerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerResponse';
  value: QueryAllActionSignerResponseAmino;
}
export interface QueryAllActionSignerResponseSDKType {
  actionSigner: ActionSignerSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetBindedSignerRequest {
  ownerAddress: string;
}
export interface QueryGetBindedSignerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerRequest';
  value: Uint8Array;
}
export interface QueryGetBindedSignerRequestAmino {
  ownerAddress?: string;
}
export interface QueryGetBindedSignerRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerRequest';
  value: QueryGetBindedSignerRequestAmino;
}
export interface QueryGetBindedSignerRequestSDKType {
  ownerAddress: string;
}
export interface QueryGetBindedSignerResponse {
  bindedSigner: BindedSigner;
}
export interface QueryGetBindedSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerResponse';
  value: Uint8Array;
}
export interface QueryGetBindedSignerResponseAmino {
  bindedSigner?: BindedSignerAmino;
}
export interface QueryGetBindedSignerResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerResponse';
  value: QueryGetBindedSignerResponseAmino;
}
export interface QueryGetBindedSignerResponseSDKType {
  bindedSigner: BindedSignerSDKType;
}
export interface QueryGetActionSignerConfigRequest {
  chain: string;
}
export interface QueryGetActionSignerConfigRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigRequest';
  value: Uint8Array;
}
export interface QueryGetActionSignerConfigRequestAmino {
  chain?: string;
}
export interface QueryGetActionSignerConfigRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigRequest';
  value: QueryGetActionSignerConfigRequestAmino;
}
export interface QueryGetActionSignerConfigRequestSDKType {
  chain: string;
}
export interface QueryGetActionSignerConfigResponse {
  actionSignerConfig: ActionSignerConfig;
}
export interface QueryGetActionSignerConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigResponse';
  value: Uint8Array;
}
export interface QueryGetActionSignerConfigResponseAmino {
  actionSignerConfig?: ActionSignerConfigAmino;
}
export interface QueryGetActionSignerConfigResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigResponse';
  value: QueryGetActionSignerConfigResponseAmino;
}
export interface QueryGetActionSignerConfigResponseSDKType {
  actionSignerConfig: ActionSignerConfigSDKType;
}
export interface QueryAllActionSignerConfigRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionSignerConfigRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigRequest';
  value: Uint8Array;
}
export interface QueryAllActionSignerConfigRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionSignerConfigRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigRequest';
  value: QueryAllActionSignerConfigRequestAmino;
}
export interface QueryAllActionSignerConfigRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionSignerConfigResponse {
  actionSignerConfig: ActionSignerConfig[];
  pagination?: PageResponse;
}
export interface QueryAllActionSignerConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigResponse';
  value: Uint8Array;
}
export interface QueryAllActionSignerConfigResponseAmino {
  actionSignerConfig?: ActionSignerConfigAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionSignerConfigResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigResponse';
  value: QueryAllActionSignerConfigResponseAmino;
}
export interface QueryAllActionSignerConfigResponseSDKType {
  actionSignerConfig: ActionSignerConfigSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetSyncActionSignerRequest {
  id: bigint;
}
export interface QueryGetSyncActionSignerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerRequest';
  value: Uint8Array;
}
export interface QueryGetSyncActionSignerRequestAmino {
  id?: string;
}
export interface QueryGetSyncActionSignerRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerRequest';
  value: QueryGetSyncActionSignerRequestAmino;
}
export interface QueryGetSyncActionSignerRequestSDKType {
  id: bigint;
}
export interface QueryGetSyncActionSignerResponse {
  syncActionSigner: SyncActionSigner;
}
export interface QueryGetSyncActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerResponse';
  value: Uint8Array;
}
export interface QueryGetSyncActionSignerResponseAmino {
  SyncActionSigner?: SyncActionSignerAmino;
}
export interface QueryGetSyncActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerResponse';
  value: QueryGetSyncActionSignerResponseAmino;
}
export interface QueryGetSyncActionSignerResponseSDKType {
  SyncActionSigner: SyncActionSignerSDKType;
}
export interface QueryAllSyncActionSignerRequest {
  pagination?: PageRequest;
}
export interface QueryAllSyncActionSignerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerRequest';
  value: Uint8Array;
}
export interface QueryAllSyncActionSignerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSyncActionSignerRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerRequest';
  value: QueryAllSyncActionSignerRequestAmino;
}
export interface QueryAllSyncActionSignerRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSyncActionSignerResponse {
  syncActionSigner: SyncActionSigner[];
  pagination?: PageResponse;
}
export interface QueryAllSyncActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerResponse';
  value: Uint8Array;
}
export interface QueryAllSyncActionSignerResponseAmino {
  SyncActionSigner?: SyncActionSignerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSyncActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerResponse';
  value: QueryAllSyncActionSignerResponseAmino;
}
export interface QueryAllSyncActionSignerResponseSDKType {
  SyncActionSigner: SyncActionSignerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsRequest',
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsResponse',
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintRequestRequest(): QueryGetMintRequestRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetMintRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest',
  encode(message: QueryGetMintRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMintRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintRequestRequest>): QueryGetMintRequestRequest {
    const message = createBaseQueryGetMintRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetMintRequestRequestAmino): QueryGetMintRequestRequest {
    const message = createBaseQueryGetMintRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetMintRequestRequest): QueryGetMintRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintRequestRequestAminoMsg): QueryGetMintRequestRequest {
    return QueryGetMintRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintRequestRequestProtoMsg): QueryGetMintRequestRequest {
    return QueryGetMintRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetMintRequestRequest): Uint8Array {
    return QueryGetMintRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintRequestRequest): QueryGetMintRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest',
      value: QueryGetMintRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintRequestResponse(): QueryGetMintRequestResponse {
  return {
    mintRequest: MintRequest.fromPartial({})
  };
}
export const QueryGetMintRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse',
  encode(message: QueryGetMintRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintRequest !== undefined) {
      MintRequest.encode(message.mintRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMintRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintRequest = MintRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintRequestResponse>): QueryGetMintRequestResponse {
    const message = createBaseQueryGetMintRequestResponse();
    message.mintRequest = object.mintRequest !== undefined && object.mintRequest !== null ? MintRequest.fromPartial(object.mintRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintRequestResponseAmino): QueryGetMintRequestResponse {
    const message = createBaseQueryGetMintRequestResponse();
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      message.mintRequest = MintRequest.fromAmino(object.MintRequest);
    }
    return message;
  },
  toAmino(message: QueryGetMintRequestResponse): QueryGetMintRequestResponseAmino {
    const obj: any = {};
    obj.MintRequest = message.mintRequest ? MintRequest.toAmino(message.mintRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintRequestResponseAminoMsg): QueryGetMintRequestResponse {
    return QueryGetMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintRequestResponseProtoMsg): QueryGetMintRequestResponse {
    return QueryGetMintRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetMintRequestResponse): Uint8Array {
    return QueryGetMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintRequestResponse): QueryGetMintRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse',
      value: QueryGetMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintRequestRequest(): QueryAllMintRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMintRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest',
  encode(message: QueryAllMintRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMintRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMintRequestRequest>): QueryAllMintRequestRequest {
    const message = createBaseQueryAllMintRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintRequestRequestAmino): QueryAllMintRequestRequest {
    const message = createBaseQueryAllMintRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintRequestRequest): QueryAllMintRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintRequestRequestAminoMsg): QueryAllMintRequestRequest {
    return QueryAllMintRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintRequestRequestProtoMsg): QueryAllMintRequestRequest {
    return QueryAllMintRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllMintRequestRequest): Uint8Array {
    return QueryAllMintRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintRequestRequest): QueryAllMintRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest',
      value: QueryAllMintRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintRequestResponse(): QueryAllMintRequestResponse {
  return {
    mintRequest: [],
    pagination: undefined
  };
}
export const QueryAllMintRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse',
  encode(message: QueryAllMintRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mintRequest) {
      MintRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMintRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintRequest.push(MintRequest.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMintRequestResponse>): QueryAllMintRequestResponse {
    const message = createBaseQueryAllMintRequestResponse();
    message.mintRequest = object.mintRequest?.map(e => MintRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintRequestResponseAmino): QueryAllMintRequestResponse {
    const message = createBaseQueryAllMintRequestResponse();
    message.mintRequest = object.MintRequest?.map(e => MintRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintRequestResponse): QueryAllMintRequestResponseAmino {
    const obj: any = {};
    if (message.mintRequest) {
      obj.MintRequest = message.mintRequest.map(e => e ? MintRequest.toAmino(e) : undefined);
    } else {
      obj.MintRequest = message.mintRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintRequestResponseAminoMsg): QueryAllMintRequestResponse {
    return QueryAllMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintRequestResponseProtoMsg): QueryAllMintRequestResponse {
    return QueryAllMintRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllMintRequestResponse): Uint8Array {
    return QueryAllMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintRequestResponse): QueryAllMintRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse',
      value: QueryAllMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionRequestRequest(): QueryGetActionRequestRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetActionRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest',
  encode(message: QueryGetActionRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionRequestRequest>): QueryGetActionRequestRequest {
    const message = createBaseQueryGetActionRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetActionRequestRequestAmino): QueryGetActionRequestRequest {
    const message = createBaseQueryGetActionRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetActionRequestRequest): QueryGetActionRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionRequestRequestAminoMsg): QueryGetActionRequestRequest {
    return QueryGetActionRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionRequestRequestProtoMsg): QueryGetActionRequestRequest {
    return QueryGetActionRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetActionRequestRequest): Uint8Array {
    return QueryGetActionRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionRequestRequest): QueryGetActionRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest',
      value: QueryGetActionRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionRequestResponse(): QueryGetActionRequestResponse {
  return {
    actionOracleRequest: ActionOracleRequest.fromPartial({})
  };
}
export const QueryGetActionRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse',
  encode(message: QueryGetActionRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionOracleRequest !== undefined) {
      ActionOracleRequest.encode(message.actionOracleRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionOracleRequest = ActionOracleRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionRequestResponse>): QueryGetActionRequestResponse {
    const message = createBaseQueryGetActionRequestResponse();
    message.actionOracleRequest = object.actionOracleRequest !== undefined && object.actionOracleRequest !== null ? ActionOracleRequest.fromPartial(object.actionOracleRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionRequestResponseAmino): QueryGetActionRequestResponse {
    const message = createBaseQueryGetActionRequestResponse();
    if (object.ActionOracleRequest !== undefined && object.ActionOracleRequest !== null) {
      message.actionOracleRequest = ActionOracleRequest.fromAmino(object.ActionOracleRequest);
    }
    return message;
  },
  toAmino(message: QueryGetActionRequestResponse): QueryGetActionRequestResponseAmino {
    const obj: any = {};
    obj.ActionOracleRequest = message.actionOracleRequest ? ActionOracleRequest.toAmino(message.actionOracleRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionRequestResponseAminoMsg): QueryGetActionRequestResponse {
    return QueryGetActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionRequestResponseProtoMsg): QueryGetActionRequestResponse {
    return QueryGetActionRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetActionRequestResponse): Uint8Array {
    return QueryGetActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionRequestResponse): QueryGetActionRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse',
      value: QueryGetActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionRequestRequest(): QueryAllActionRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest',
  encode(message: QueryAllActionRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionRequestRequest>): QueryAllActionRequestRequest {
    const message = createBaseQueryAllActionRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionRequestRequestAmino): QueryAllActionRequestRequest {
    const message = createBaseQueryAllActionRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionRequestRequest): QueryAllActionRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionRequestRequestAminoMsg): QueryAllActionRequestRequest {
    return QueryAllActionRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionRequestRequestProtoMsg): QueryAllActionRequestRequest {
    return QueryAllActionRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllActionRequestRequest): Uint8Array {
    return QueryAllActionRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionRequestRequest): QueryAllActionRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest',
      value: QueryAllActionRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionRequestResponse(): QueryAllActionRequestResponse {
  return {
    actionOracleRequest: [],
    pagination: undefined
  };
}
export const QueryAllActionRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse',
  encode(message: QueryAllActionRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionOracleRequest) {
      ActionOracleRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionOracleRequest.push(ActionOracleRequest.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionRequestResponse>): QueryAllActionRequestResponse {
    const message = createBaseQueryAllActionRequestResponse();
    message.actionOracleRequest = object.actionOracleRequest?.map(e => ActionOracleRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionRequestResponseAmino): QueryAllActionRequestResponse {
    const message = createBaseQueryAllActionRequestResponse();
    message.actionOracleRequest = object.ActionOracleRequest?.map(e => ActionOracleRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionRequestResponse): QueryAllActionRequestResponseAmino {
    const obj: any = {};
    if (message.actionOracleRequest) {
      obj.ActionOracleRequest = message.actionOracleRequest.map(e => e ? ActionOracleRequest.toAmino(e) : undefined);
    } else {
      obj.ActionOracleRequest = message.actionOracleRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionRequestResponseAminoMsg): QueryAllActionRequestResponse {
    return QueryAllActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionRequestResponseProtoMsg): QueryAllActionRequestResponse {
    return QueryAllActionRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllActionRequestResponse): Uint8Array {
    return QueryAllActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionRequestResponse): QueryAllActionRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse',
      value: QueryAllActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCollectionOwnerRequestRequest(): QueryGetCollectionOwnerRequestRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetCollectionOwnerRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest',
  encode(message: QueryGetCollectionOwnerRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCollectionOwnerRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetCollectionOwnerRequestRequest>): QueryGetCollectionOwnerRequestRequest {
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetCollectionOwnerRequestRequestAmino): QueryGetCollectionOwnerRequestRequest {
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetCollectionOwnerRequestRequest): QueryGetCollectionOwnerRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCollectionOwnerRequestRequestAminoMsg): QueryGetCollectionOwnerRequestRequest {
    return QueryGetCollectionOwnerRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCollectionOwnerRequestRequestProtoMsg): QueryGetCollectionOwnerRequestRequest {
    return QueryGetCollectionOwnerRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetCollectionOwnerRequestRequest): Uint8Array {
    return QueryGetCollectionOwnerRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCollectionOwnerRequestRequest): QueryGetCollectionOwnerRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest',
      value: QueryGetCollectionOwnerRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCollectionOwnerRequestResponse(): QueryGetCollectionOwnerRequestResponse {
  return {
    collectionOwnerRequest: CollectionOwnerRequest.fromPartial({})
  };
}
export const QueryGetCollectionOwnerRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse',
  encode(message: QueryGetCollectionOwnerRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionOwnerRequest !== undefined) {
      CollectionOwnerRequest.encode(message.collectionOwnerRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCollectionOwnerRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.collectionOwnerRequest = CollectionOwnerRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetCollectionOwnerRequestResponse>): QueryGetCollectionOwnerRequestResponse {
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.collectionOwnerRequest !== undefined && object.collectionOwnerRequest !== null ? CollectionOwnerRequest.fromPartial(object.collectionOwnerRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetCollectionOwnerRequestResponseAmino): QueryGetCollectionOwnerRequestResponse {
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    if (object.CollectionOwnerRequest !== undefined && object.CollectionOwnerRequest !== null) {
      message.collectionOwnerRequest = CollectionOwnerRequest.fromAmino(object.CollectionOwnerRequest);
    }
    return message;
  },
  toAmino(message: QueryGetCollectionOwnerRequestResponse): QueryGetCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    obj.CollectionOwnerRequest = message.collectionOwnerRequest ? CollectionOwnerRequest.toAmino(message.collectionOwnerRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCollectionOwnerRequestResponseAminoMsg): QueryGetCollectionOwnerRequestResponse {
    return QueryGetCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCollectionOwnerRequestResponseProtoMsg): QueryGetCollectionOwnerRequestResponse {
    return QueryGetCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetCollectionOwnerRequestResponse): Uint8Array {
    return QueryGetCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCollectionOwnerRequestResponse): QueryGetCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse',
      value: QueryGetCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCollectionOwnerRequestRequest(): QueryAllCollectionOwnerRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllCollectionOwnerRequestRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest',
  encode(message: QueryAllCollectionOwnerRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCollectionOwnerRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllCollectionOwnerRequestRequest>): QueryAllCollectionOwnerRequestRequest {
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCollectionOwnerRequestRequestAmino): QueryAllCollectionOwnerRequestRequest {
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCollectionOwnerRequestRequest): QueryAllCollectionOwnerRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCollectionOwnerRequestRequestAminoMsg): QueryAllCollectionOwnerRequestRequest {
    return QueryAllCollectionOwnerRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCollectionOwnerRequestRequestProtoMsg): QueryAllCollectionOwnerRequestRequest {
    return QueryAllCollectionOwnerRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllCollectionOwnerRequestRequest): Uint8Array {
    return QueryAllCollectionOwnerRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCollectionOwnerRequestRequest): QueryAllCollectionOwnerRequestRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest',
      value: QueryAllCollectionOwnerRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCollectionOwnerRequestResponse(): QueryAllCollectionOwnerRequestResponse {
  return {
    collectionOwnerRequest: [],
    pagination: undefined
  };
}
export const QueryAllCollectionOwnerRequestResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse',
  encode(message: QueryAllCollectionOwnerRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collectionOwnerRequest) {
      CollectionOwnerRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCollectionOwnerRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.collectionOwnerRequest.push(CollectionOwnerRequest.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllCollectionOwnerRequestResponse>): QueryAllCollectionOwnerRequestResponse {
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.collectionOwnerRequest?.map(e => CollectionOwnerRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCollectionOwnerRequestResponseAmino): QueryAllCollectionOwnerRequestResponse {
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.CollectionOwnerRequest?.map(e => CollectionOwnerRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCollectionOwnerRequestResponse): QueryAllCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    if (message.collectionOwnerRequest) {
      obj.CollectionOwnerRequest = message.collectionOwnerRequest.map(e => e ? CollectionOwnerRequest.toAmino(e) : undefined);
    } else {
      obj.CollectionOwnerRequest = message.collectionOwnerRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCollectionOwnerRequestResponseAminoMsg): QueryAllCollectionOwnerRequestResponse {
    return QueryAllCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCollectionOwnerRequestResponseProtoMsg): QueryAllCollectionOwnerRequestResponse {
    return QueryAllCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllCollectionOwnerRequestResponse): Uint8Array {
    return QueryAllCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCollectionOwnerRequestResponse): QueryAllCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse',
      value: QueryAllCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOracleConfigRequest(): QueryGetOracleConfigRequest {
  return {};
}
export const QueryGetOracleConfigRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest',
  encode(_: QueryGetOracleConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOracleConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleConfigRequest();
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
  fromPartial(_: Partial<QueryGetOracleConfigRequest>): QueryGetOracleConfigRequest {
    const message = createBaseQueryGetOracleConfigRequest();
    return message;
  },
  fromAmino(_: QueryGetOracleConfigRequestAmino): QueryGetOracleConfigRequest {
    const message = createBaseQueryGetOracleConfigRequest();
    return message;
  },
  toAmino(_: QueryGetOracleConfigRequest): QueryGetOracleConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetOracleConfigRequestAminoMsg): QueryGetOracleConfigRequest {
    return QueryGetOracleConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOracleConfigRequestProtoMsg): QueryGetOracleConfigRequest {
    return QueryGetOracleConfigRequest.decode(message.value);
  },
  toProto(message: QueryGetOracleConfigRequest): Uint8Array {
    return QueryGetOracleConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOracleConfigRequest): QueryGetOracleConfigRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest',
      value: QueryGetOracleConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOracleConfigResponse(): QueryGetOracleConfigResponse {
  return {
    oracleConfig: OracleConfig.fromPartial({})
  };
}
export const QueryGetOracleConfigResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse',
  encode(message: QueryGetOracleConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleConfig !== undefined) {
      OracleConfig.encode(message.oracleConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOracleConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.oracleConfig = OracleConfig.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOracleConfigResponse>): QueryGetOracleConfigResponse {
    const message = createBaseQueryGetOracleConfigResponse();
    message.oracleConfig = object.oracleConfig !== undefined && object.oracleConfig !== null ? OracleConfig.fromPartial(object.oracleConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOracleConfigResponseAmino): QueryGetOracleConfigResponse {
    const message = createBaseQueryGetOracleConfigResponse();
    if (object.OracleConfig !== undefined && object.OracleConfig !== null) {
      message.oracleConfig = OracleConfig.fromAmino(object.OracleConfig);
    }
    return message;
  },
  toAmino(message: QueryGetOracleConfigResponse): QueryGetOracleConfigResponseAmino {
    const obj: any = {};
    obj.OracleConfig = message.oracleConfig ? OracleConfig.toAmino(message.oracleConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOracleConfigResponseAminoMsg): QueryGetOracleConfigResponse {
    return QueryGetOracleConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOracleConfigResponseProtoMsg): QueryGetOracleConfigResponse {
    return QueryGetOracleConfigResponse.decode(message.value);
  },
  toProto(message: QueryGetOracleConfigResponse): Uint8Array {
    return QueryGetOracleConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOracleConfigResponse): QueryGetOracleConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse',
      value: QueryGetOracleConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionSignerRequest(): QueryGetActionSignerRequest {
  return {
    actorAddress: '',
    ownerAddress: ''
  };
}
export const QueryGetActionSignerRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerRequest',
  encode(message: QueryGetActionSignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actorAddress !== '') {
      writer.uint32(10).string(message.actorAddress);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionSignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionSignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actorAddress = reader.string();
        break;
      case 2:
        message.ownerAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionSignerRequest>): QueryGetActionSignerRequest {
    const message = createBaseQueryGetActionSignerRequest();
    message.actorAddress = object.actorAddress ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    return message;
  },
  fromAmino(object: QueryGetActionSignerRequestAmino): QueryGetActionSignerRequest {
    const message = createBaseQueryGetActionSignerRequest();
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    return message;
  },
  toAmino(message: QueryGetActionSignerRequest): QueryGetActionSignerRequestAmino {
    const obj: any = {};
    obj.actorAddress = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionSignerRequestAminoMsg): QueryGetActionSignerRequest {
    return QueryGetActionSignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionSignerRequestProtoMsg): QueryGetActionSignerRequest {
    return QueryGetActionSignerRequest.decode(message.value);
  },
  toProto(message: QueryGetActionSignerRequest): Uint8Array {
    return QueryGetActionSignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionSignerRequest): QueryGetActionSignerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerRequest',
      value: QueryGetActionSignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionSignerResponse(): QueryGetActionSignerResponse {
  return {
    actionSigner: ActionSigner.fromPartial({})
  };
}
export const QueryGetActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerResponse',
  encode(message: QueryGetActionSignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionSigner !== undefined) {
      ActionSigner.encode(message.actionSigner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionSignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionSigner = ActionSigner.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionSignerResponse>): QueryGetActionSignerResponse {
    const message = createBaseQueryGetActionSignerResponse();
    message.actionSigner = object.actionSigner !== undefined && object.actionSigner !== null ? ActionSigner.fromPartial(object.actionSigner) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionSignerResponseAmino): QueryGetActionSignerResponse {
    const message = createBaseQueryGetActionSignerResponse();
    if (object.actionSigner !== undefined && object.actionSigner !== null) {
      message.actionSigner = ActionSigner.fromAmino(object.actionSigner);
    }
    return message;
  },
  toAmino(message: QueryGetActionSignerResponse): QueryGetActionSignerResponseAmino {
    const obj: any = {};
    obj.actionSigner = message.actionSigner ? ActionSigner.toAmino(message.actionSigner) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionSignerResponseAminoMsg): QueryGetActionSignerResponse {
    return QueryGetActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionSignerResponseProtoMsg): QueryGetActionSignerResponse {
    return QueryGetActionSignerResponse.decode(message.value);
  },
  toProto(message: QueryGetActionSignerResponse): Uint8Array {
    return QueryGetActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionSignerResponse): QueryGetActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerResponse',
      value: QueryGetActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionSignerRequest(): QueryAllActionSignerRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionSignerRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerRequest',
  encode(message: QueryAllActionSignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionSignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionSignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionSignerRequest>): QueryAllActionSignerRequest {
    const message = createBaseQueryAllActionSignerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionSignerRequestAmino): QueryAllActionSignerRequest {
    const message = createBaseQueryAllActionSignerRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionSignerRequest): QueryAllActionSignerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionSignerRequestAminoMsg): QueryAllActionSignerRequest {
    return QueryAllActionSignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionSignerRequestProtoMsg): QueryAllActionSignerRequest {
    return QueryAllActionSignerRequest.decode(message.value);
  },
  toProto(message: QueryAllActionSignerRequest): Uint8Array {
    return QueryAllActionSignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionSignerRequest): QueryAllActionSignerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerRequest',
      value: QueryAllActionSignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionSignerResponse(): QueryAllActionSignerResponse {
  return {
    actionSigner: [],
    pagination: undefined
  };
}
export const QueryAllActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerResponse',
  encode(message: QueryAllActionSignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionSigner) {
      ActionSigner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionSignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionSigner.push(ActionSigner.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionSignerResponse>): QueryAllActionSignerResponse {
    const message = createBaseQueryAllActionSignerResponse();
    message.actionSigner = object.actionSigner?.map(e => ActionSigner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionSignerResponseAmino): QueryAllActionSignerResponse {
    const message = createBaseQueryAllActionSignerResponse();
    message.actionSigner = object.actionSigner?.map(e => ActionSigner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionSignerResponse): QueryAllActionSignerResponseAmino {
    const obj: any = {};
    if (message.actionSigner) {
      obj.actionSigner = message.actionSigner.map(e => e ? ActionSigner.toAmino(e) : undefined);
    } else {
      obj.actionSigner = message.actionSigner;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionSignerResponseAminoMsg): QueryAllActionSignerResponse {
    return QueryAllActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionSignerResponseProtoMsg): QueryAllActionSignerResponse {
    return QueryAllActionSignerResponse.decode(message.value);
  },
  toProto(message: QueryAllActionSignerResponse): Uint8Array {
    return QueryAllActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionSignerResponse): QueryAllActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerResponse',
      value: QueryAllActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBindedSignerRequest(): QueryGetBindedSignerRequest {
  return {
    ownerAddress: ''
  };
}
export const QueryGetBindedSignerRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerRequest',
  encode(message: QueryGetBindedSignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBindedSignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBindedSignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetBindedSignerRequest>): QueryGetBindedSignerRequest {
    const message = createBaseQueryGetBindedSignerRequest();
    message.ownerAddress = object.ownerAddress ?? '';
    return message;
  },
  fromAmino(object: QueryGetBindedSignerRequestAmino): QueryGetBindedSignerRequest {
    const message = createBaseQueryGetBindedSignerRequest();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    return message;
  },
  toAmino(message: QueryGetBindedSignerRequest): QueryGetBindedSignerRequestAmino {
    const obj: any = {};
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetBindedSignerRequestAminoMsg): QueryGetBindedSignerRequest {
    return QueryGetBindedSignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBindedSignerRequestProtoMsg): QueryGetBindedSignerRequest {
    return QueryGetBindedSignerRequest.decode(message.value);
  },
  toProto(message: QueryGetBindedSignerRequest): Uint8Array {
    return QueryGetBindedSignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBindedSignerRequest): QueryGetBindedSignerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerRequest',
      value: QueryGetBindedSignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBindedSignerResponse(): QueryGetBindedSignerResponse {
  return {
    bindedSigner: BindedSigner.fromPartial({})
  };
}
export const QueryGetBindedSignerResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerResponse',
  encode(message: QueryGetBindedSignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bindedSigner !== undefined) {
      BindedSigner.encode(message.bindedSigner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBindedSignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBindedSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.bindedSigner = BindedSigner.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetBindedSignerResponse>): QueryGetBindedSignerResponse {
    const message = createBaseQueryGetBindedSignerResponse();
    message.bindedSigner = object.bindedSigner !== undefined && object.bindedSigner !== null ? BindedSigner.fromPartial(object.bindedSigner) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBindedSignerResponseAmino): QueryGetBindedSignerResponse {
    const message = createBaseQueryGetBindedSignerResponse();
    if (object.bindedSigner !== undefined && object.bindedSigner !== null) {
      message.bindedSigner = BindedSigner.fromAmino(object.bindedSigner);
    }
    return message;
  },
  toAmino(message: QueryGetBindedSignerResponse): QueryGetBindedSignerResponseAmino {
    const obj: any = {};
    obj.bindedSigner = message.bindedSigner ? BindedSigner.toAmino(message.bindedSigner) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBindedSignerResponseAminoMsg): QueryGetBindedSignerResponse {
    return QueryGetBindedSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBindedSignerResponseProtoMsg): QueryGetBindedSignerResponse {
    return QueryGetBindedSignerResponse.decode(message.value);
  },
  toProto(message: QueryGetBindedSignerResponse): Uint8Array {
    return QueryGetBindedSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBindedSignerResponse): QueryGetBindedSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetBindedSignerResponse',
      value: QueryGetBindedSignerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionSignerConfigRequest(): QueryGetActionSignerConfigRequest {
  return {
    chain: ''
  };
}
export const QueryGetActionSignerConfigRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigRequest',
  encode(message: QueryGetActionSignerConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionSignerConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionSignerConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionSignerConfigRequest>): QueryGetActionSignerConfigRequest {
    const message = createBaseQueryGetActionSignerConfigRequest();
    message.chain = object.chain ?? '';
    return message;
  },
  fromAmino(object: QueryGetActionSignerConfigRequestAmino): QueryGetActionSignerConfigRequest {
    const message = createBaseQueryGetActionSignerConfigRequest();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: QueryGetActionSignerConfigRequest): QueryGetActionSignerConfigRequestAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionSignerConfigRequestAminoMsg): QueryGetActionSignerConfigRequest {
    return QueryGetActionSignerConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionSignerConfigRequestProtoMsg): QueryGetActionSignerConfigRequest {
    return QueryGetActionSignerConfigRequest.decode(message.value);
  },
  toProto(message: QueryGetActionSignerConfigRequest): Uint8Array {
    return QueryGetActionSignerConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionSignerConfigRequest): QueryGetActionSignerConfigRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigRequest',
      value: QueryGetActionSignerConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionSignerConfigResponse(): QueryGetActionSignerConfigResponse {
  return {
    actionSignerConfig: ActionSignerConfig.fromPartial({})
  };
}
export const QueryGetActionSignerConfigResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigResponse',
  encode(message: QueryGetActionSignerConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionSignerConfig !== undefined) {
      ActionSignerConfig.encode(message.actionSignerConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetActionSignerConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionSignerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionSignerConfig = ActionSignerConfig.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionSignerConfigResponse>): QueryGetActionSignerConfigResponse {
    const message = createBaseQueryGetActionSignerConfigResponse();
    message.actionSignerConfig = object.actionSignerConfig !== undefined && object.actionSignerConfig !== null ? ActionSignerConfig.fromPartial(object.actionSignerConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionSignerConfigResponseAmino): QueryGetActionSignerConfigResponse {
    const message = createBaseQueryGetActionSignerConfigResponse();
    if (object.actionSignerConfig !== undefined && object.actionSignerConfig !== null) {
      message.actionSignerConfig = ActionSignerConfig.fromAmino(object.actionSignerConfig);
    }
    return message;
  },
  toAmino(message: QueryGetActionSignerConfigResponse): QueryGetActionSignerConfigResponseAmino {
    const obj: any = {};
    obj.actionSignerConfig = message.actionSignerConfig ? ActionSignerConfig.toAmino(message.actionSignerConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionSignerConfigResponseAminoMsg): QueryGetActionSignerConfigResponse {
    return QueryGetActionSignerConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionSignerConfigResponseProtoMsg): QueryGetActionSignerConfigResponse {
    return QueryGetActionSignerConfigResponse.decode(message.value);
  },
  toProto(message: QueryGetActionSignerConfigResponse): Uint8Array {
    return QueryGetActionSignerConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionSignerConfigResponse): QueryGetActionSignerConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetActionSignerConfigResponse',
      value: QueryGetActionSignerConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionSignerConfigRequest(): QueryAllActionSignerConfigRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionSignerConfigRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigRequest',
  encode(message: QueryAllActionSignerConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionSignerConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionSignerConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionSignerConfigRequest>): QueryAllActionSignerConfigRequest {
    const message = createBaseQueryAllActionSignerConfigRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionSignerConfigRequestAmino): QueryAllActionSignerConfigRequest {
    const message = createBaseQueryAllActionSignerConfigRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionSignerConfigRequest): QueryAllActionSignerConfigRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionSignerConfigRequestAminoMsg): QueryAllActionSignerConfigRequest {
    return QueryAllActionSignerConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionSignerConfigRequestProtoMsg): QueryAllActionSignerConfigRequest {
    return QueryAllActionSignerConfigRequest.decode(message.value);
  },
  toProto(message: QueryAllActionSignerConfigRequest): Uint8Array {
    return QueryAllActionSignerConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionSignerConfigRequest): QueryAllActionSignerConfigRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigRequest',
      value: QueryAllActionSignerConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionSignerConfigResponse(): QueryAllActionSignerConfigResponse {
  return {
    actionSignerConfig: [],
    pagination: undefined
  };
}
export const QueryAllActionSignerConfigResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigResponse',
  encode(message: QueryAllActionSignerConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionSignerConfig) {
      ActionSignerConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllActionSignerConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionSignerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionSignerConfig.push(ActionSignerConfig.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionSignerConfigResponse>): QueryAllActionSignerConfigResponse {
    const message = createBaseQueryAllActionSignerConfigResponse();
    message.actionSignerConfig = object.actionSignerConfig?.map(e => ActionSignerConfig.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionSignerConfigResponseAmino): QueryAllActionSignerConfigResponse {
    const message = createBaseQueryAllActionSignerConfigResponse();
    message.actionSignerConfig = object.actionSignerConfig?.map(e => ActionSignerConfig.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionSignerConfigResponse): QueryAllActionSignerConfigResponseAmino {
    const obj: any = {};
    if (message.actionSignerConfig) {
      obj.actionSignerConfig = message.actionSignerConfig.map(e => e ? ActionSignerConfig.toAmino(e) : undefined);
    } else {
      obj.actionSignerConfig = message.actionSignerConfig;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionSignerConfigResponseAminoMsg): QueryAllActionSignerConfigResponse {
    return QueryAllActionSignerConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionSignerConfigResponseProtoMsg): QueryAllActionSignerConfigResponse {
    return QueryAllActionSignerConfigResponse.decode(message.value);
  },
  toProto(message: QueryAllActionSignerConfigResponse): Uint8Array {
    return QueryAllActionSignerConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionSignerConfigResponse): QueryAllActionSignerConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllActionSignerConfigResponse',
      value: QueryAllActionSignerConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSyncActionSignerRequest(): QueryGetSyncActionSignerRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetSyncActionSignerRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerRequest',
  encode(message: QueryGetSyncActionSignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSyncActionSignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSyncActionSignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSyncActionSignerRequest>): QueryGetSyncActionSignerRequest {
    const message = createBaseQueryGetSyncActionSignerRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetSyncActionSignerRequestAmino): QueryGetSyncActionSignerRequest {
    const message = createBaseQueryGetSyncActionSignerRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetSyncActionSignerRequest): QueryGetSyncActionSignerRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSyncActionSignerRequestAminoMsg): QueryGetSyncActionSignerRequest {
    return QueryGetSyncActionSignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSyncActionSignerRequestProtoMsg): QueryGetSyncActionSignerRequest {
    return QueryGetSyncActionSignerRequest.decode(message.value);
  },
  toProto(message: QueryGetSyncActionSignerRequest): Uint8Array {
    return QueryGetSyncActionSignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSyncActionSignerRequest): QueryGetSyncActionSignerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerRequest',
      value: QueryGetSyncActionSignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSyncActionSignerResponse(): QueryGetSyncActionSignerResponse {
  return {
    syncActionSigner: SyncActionSigner.fromPartial({})
  };
}
export const QueryGetSyncActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerResponse',
  encode(message: QueryGetSyncActionSignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncActionSigner !== undefined) {
      SyncActionSigner.encode(message.syncActionSigner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSyncActionSignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSyncActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.syncActionSigner = SyncActionSigner.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSyncActionSignerResponse>): QueryGetSyncActionSignerResponse {
    const message = createBaseQueryGetSyncActionSignerResponse();
    message.syncActionSigner = object.syncActionSigner !== undefined && object.syncActionSigner !== null ? SyncActionSigner.fromPartial(object.syncActionSigner) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSyncActionSignerResponseAmino): QueryGetSyncActionSignerResponse {
    const message = createBaseQueryGetSyncActionSignerResponse();
    if (object.SyncActionSigner !== undefined && object.SyncActionSigner !== null) {
      message.syncActionSigner = SyncActionSigner.fromAmino(object.SyncActionSigner);
    }
    return message;
  },
  toAmino(message: QueryGetSyncActionSignerResponse): QueryGetSyncActionSignerResponseAmino {
    const obj: any = {};
    obj.SyncActionSigner = message.syncActionSigner ? SyncActionSigner.toAmino(message.syncActionSigner) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSyncActionSignerResponseAminoMsg): QueryGetSyncActionSignerResponse {
    return QueryGetSyncActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSyncActionSignerResponseProtoMsg): QueryGetSyncActionSignerResponse {
    return QueryGetSyncActionSignerResponse.decode(message.value);
  },
  toProto(message: QueryGetSyncActionSignerResponse): Uint8Array {
    return QueryGetSyncActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSyncActionSignerResponse): QueryGetSyncActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryGetSyncActionSignerResponse',
      value: QueryGetSyncActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSyncActionSignerRequest(): QueryAllSyncActionSignerRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSyncActionSignerRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerRequest',
  encode(message: QueryAllSyncActionSignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSyncActionSignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSyncActionSignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllSyncActionSignerRequest>): QueryAllSyncActionSignerRequest {
    const message = createBaseQueryAllSyncActionSignerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSyncActionSignerRequestAmino): QueryAllSyncActionSignerRequest {
    const message = createBaseQueryAllSyncActionSignerRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSyncActionSignerRequest): QueryAllSyncActionSignerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSyncActionSignerRequestAminoMsg): QueryAllSyncActionSignerRequest {
    return QueryAllSyncActionSignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSyncActionSignerRequestProtoMsg): QueryAllSyncActionSignerRequest {
    return QueryAllSyncActionSignerRequest.decode(message.value);
  },
  toProto(message: QueryAllSyncActionSignerRequest): Uint8Array {
    return QueryAllSyncActionSignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSyncActionSignerRequest): QueryAllSyncActionSignerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerRequest',
      value: QueryAllSyncActionSignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSyncActionSignerResponse(): QueryAllSyncActionSignerResponse {
  return {
    syncActionSigner: [],
    pagination: undefined
  };
}
export const QueryAllSyncActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerResponse',
  encode(message: QueryAllSyncActionSignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.syncActionSigner) {
      SyncActionSigner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSyncActionSignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSyncActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.syncActionSigner.push(SyncActionSigner.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllSyncActionSignerResponse>): QueryAllSyncActionSignerResponse {
    const message = createBaseQueryAllSyncActionSignerResponse();
    message.syncActionSigner = object.syncActionSigner?.map(e => SyncActionSigner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSyncActionSignerResponseAmino): QueryAllSyncActionSignerResponse {
    const message = createBaseQueryAllSyncActionSignerResponse();
    message.syncActionSigner = object.SyncActionSigner?.map(e => SyncActionSigner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSyncActionSignerResponse): QueryAllSyncActionSignerResponseAmino {
    const obj: any = {};
    if (message.syncActionSigner) {
      obj.SyncActionSigner = message.syncActionSigner.map(e => e ? SyncActionSigner.toAmino(e) : undefined);
    } else {
      obj.SyncActionSigner = message.syncActionSigner;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSyncActionSignerResponseAminoMsg): QueryAllSyncActionSignerResponse {
    return QueryAllSyncActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSyncActionSignerResponseProtoMsg): QueryAllSyncActionSignerResponse {
    return QueryAllSyncActionSignerResponse.decode(message.value);
  },
  toProto(message: QueryAllSyncActionSignerResponse): Uint8Array {
    return QueryAllSyncActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSyncActionSignerResponse): QueryAllSyncActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftoracle.QueryAllSyncActionSignerResponse',
      value: QueryAllSyncActionSignerResponse.encode(message).finish()
    };
  }
};