//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../binary';
import { Authorization, AuthorizationAmino, AuthorizationSDKType } from './authorization';
import { Params, ParamsAmino, ParamsSDKType } from './params';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftadmin.QueryParamsRequest';
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
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftadmin.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetAuthorizationRequest {}
export interface QueryGetAuthorizationRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationRequest';
  value: Uint8Array;
}
export interface QueryGetAuthorizationRequestAmino {}
export interface QueryGetAuthorizationRequestAminoMsg {
  type: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationRequest';
  value: QueryGetAuthorizationRequestAmino;
}
export interface QueryGetAuthorizationRequestSDKType {}
export interface QueryGetAuthorizationResponse {
  authorization: Authorization;
}
export interface QueryGetAuthorizationResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationResponse';
  value: Uint8Array;
}
export interface QueryGetAuthorizationResponseAmino {
  Authorization?: AuthorizationAmino;
}
export interface QueryGetAuthorizationResponseAminoMsg {
  type: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationResponse';
  value: QueryGetAuthorizationResponseAmino;
}
export interface QueryGetAuthorizationResponseSDKType {
  Authorization: AuthorizationSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsRequest',
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
      typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsRequest',
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
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsResponse',
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
      typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAuthorizationRequest(): QueryGetAuthorizationRequest {
  return {};
}
export const QueryGetAuthorizationRequest = {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationRequest',
  encode(_: QueryGetAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAuthorizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuthorizationRequest();
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
  fromPartial(_: Partial<QueryGetAuthorizationRequest>): QueryGetAuthorizationRequest {
    const message = createBaseQueryGetAuthorizationRequest();
    return message;
  },
  fromAmino(_: QueryGetAuthorizationRequestAmino): QueryGetAuthorizationRequest {
    const message = createBaseQueryGetAuthorizationRequest();
    return message;
  },
  toAmino(_: QueryGetAuthorizationRequest): QueryGetAuthorizationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetAuthorizationRequestAminoMsg): QueryGetAuthorizationRequest {
    return QueryGetAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAuthorizationRequestProtoMsg): QueryGetAuthorizationRequest {
    return QueryGetAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryGetAuthorizationRequest): Uint8Array {
    return QueryGetAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAuthorizationRequest): QueryGetAuthorizationRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationRequest',
      value: QueryGetAuthorizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAuthorizationResponse(): QueryGetAuthorizationResponse {
  return {
    authorization: Authorization.fromPartial({})
  };
}
export const QueryGetAuthorizationResponse = {
  typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationResponse',
  encode(message: QueryGetAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorization !== undefined) {
      Authorization.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.authorization = Authorization.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAuthorizationResponse>): QueryGetAuthorizationResponse {
    const message = createBaseQueryGetAuthorizationResponse();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? Authorization.fromPartial(object.authorization) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAuthorizationResponseAmino): QueryGetAuthorizationResponse {
    const message = createBaseQueryGetAuthorizationResponse();
    if (object.Authorization !== undefined && object.Authorization !== null) {
      message.authorization = Authorization.fromAmino(object.Authorization);
    }
    return message;
  },
  toAmino(message: QueryGetAuthorizationResponse): QueryGetAuthorizationResponseAmino {
    const obj: any = {};
    obj.Authorization = message.authorization ? Authorization.toAmino(message.authorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAuthorizationResponseAminoMsg): QueryGetAuthorizationResponse {
    return QueryGetAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAuthorizationResponseProtoMsg): QueryGetAuthorizationResponse {
    return QueryGetAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryGetAuthorizationResponse): Uint8Array {
    return QueryGetAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAuthorizationResponse): QueryGetAuthorizationResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixnft.nftadmin.QueryGetAuthorizationResponse',
      value: QueryGetAuthorizationResponse.encode(message).finish()
    };
  }
};