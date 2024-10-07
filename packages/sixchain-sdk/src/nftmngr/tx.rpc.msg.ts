//@ts-nocheck
import { BinaryReader } from '../binary';
import { Rpc } from '../helpers';
import { MsgAddAction, MsgAddActionResponse, MsgAddAttribute, MsgAddAttributeResponse, MsgChangeOrgOwner, MsgChangeOrgOwnerResponse, MsgChangeSchemaOwner, MsgChangeSchemaOwnerResponse, MsgCreateActionExecutor, MsgCreateActionExecutorResponse, MsgCreateMetadata, MsgCreateMetadataResponse, MsgCreateNFTSchema, MsgCreateNFTSchemaResponse, MsgDeleteActionExecutor, MsgDeleteActionExecutorResponse, MsgPerformActionByAdmin, MsgPerformActionByAdminResponse, MsgResyncAttributes, MsgResyncAttributesResponse, MsgSetAttributeOveriding, MsgSetAttributeOveridingResponse, MsgSetBaseUri, MsgSetBaseUriResponse, MsgSetFeeConfig, MsgSetFeeConfigResponse, MsgSetMetadataFormat, MsgSetMetadataFormatResponse, MsgSetMintauth, MsgSetMintauthResponse, MsgSetOriginChain, MsgSetOriginChainResponse, MsgSetOriginContract, MsgSetOriginContractResponse, MsgSetUriRetrievalMethod, MsgSetUriRetrievalMethodResponse, MsgShowAttributes, MsgShowAttributesResponse, MsgToggleAction, MsgToggleActionResponse, MsgUpdateAction, MsgUpdateActionResponse,MsgUpdateSchemaAttribute, MsgUpdateSchemaAttributeResponse } from './tx';
/** Msg defines the Msg service. */
export interface Msg {
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse>;
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse>;
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse>;
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse>;
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse>;
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse>;
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse>;
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse>;
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse>;
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse>;
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse>;
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse>;
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse>;
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse>;
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse>;
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse>;
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse>;
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse>;
  createActionExecutor(request: MsgCreateActionExecutor): Promise<MsgCreateActionExecutorResponse>;
  /**
   * rpc UpdateActionExecutor(MsgUpdateActionExecutor) returns
   * (MsgUpdateActionExecutorResponse);
   */
  deleteActionExecutor(request: MsgDeleteActionExecutor): Promise<MsgDeleteActionExecutorResponse>;
  updateSchemaAttribute(request: MsgUpdateSchemaAttribute): Promise<MsgUpdateSchemaAttributeResponse>;
  /**
   * rpc DeleteSchemaAttribute(MsgDeleteSchemaAttribute) returns
   * (MsgDeleteSchemaAttributeResponse);
   */
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createNFTSchema = this.createNFTSchema.bind(this);
    this.createMetadata = this.createMetadata.bind(this);
    this.performActionByAdmin = this.performActionByAdmin.bind(this);
    this.addAttribute = this.addAttribute.bind(this);
    this.addAction = this.addAction.bind(this);
    this.setBaseUri = this.setBaseUri.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.changeSchemaOwner = this.changeSchemaOwner.bind(this);
    this.resyncAttributes = this.resyncAttributes.bind(this);
    this.showAttributes = this.showAttributes.bind(this);
    this.setFeeConfig = this.setFeeConfig.bind(this);
    this.setMintauth = this.setMintauth.bind(this);
    this.changeOrgOwner = this.changeOrgOwner.bind(this);
    this.setUriRetrievalMethod = this.setUriRetrievalMethod.bind(this);
    this.setOriginChain = this.setOriginChain.bind(this);
    this.setOriginContract = this.setOriginContract.bind(this);
    this.setAttributeOveriding = this.setAttributeOveriding.bind(this);
    this.setMetadataFormat = this.setMetadataFormat.bind(this);
    this.createActionExecutor = this.createActionExecutor.bind(this);
    this.deleteActionExecutor = this.deleteActionExecutor.bind(this);
    this.updateSchemaAttribute = this.updateSchemaAttribute.bind(this);
    this.updateAction = this.updateAction.bind(this);
  }
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse> {
    const data = MsgCreateNFTSchema.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'CreateNFTSchema', data);
    return promise.then(data => MsgCreateNFTSchemaResponse.decode(new BinaryReader(data)));
  }
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse> {
    const data = MsgCreateMetadata.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'CreateMetadata', data);
    return promise.then(data => MsgCreateMetadataResponse.decode(new BinaryReader(data)));
  }
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse> {
    const data = MsgPerformActionByAdmin.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'PerformActionByAdmin', data);
    return promise.then(data => MsgPerformActionByAdminResponse.decode(new BinaryReader(data)));
  }
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse> {
    const data = MsgAddAttribute.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'AddAttribute', data);
    return promise.then(data => MsgAddAttributeResponse.decode(new BinaryReader(data)));
  }
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse> {
    const data = MsgAddAction.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'AddAction', data);
    return promise.then(data => MsgAddActionResponse.decode(new BinaryReader(data)));
  }
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse> {
    const data = MsgSetBaseUri.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetBaseUri', data);
    return promise.then(data => MsgSetBaseUriResponse.decode(new BinaryReader(data)));
  }
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse> {
    const data = MsgToggleAction.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'ToggleAction', data);
    return promise.then(data => MsgToggleActionResponse.decode(new BinaryReader(data)));
  }
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse> {
    const data = MsgChangeSchemaOwner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'ChangeSchemaOwner', data);
    return promise.then(data => MsgChangeSchemaOwnerResponse.decode(new BinaryReader(data)));
  }
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse> {
    const data = MsgResyncAttributes.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'ResyncAttributes', data);
    return promise.then(data => MsgResyncAttributesResponse.decode(new BinaryReader(data)));
  }
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse> {
    const data = MsgShowAttributes.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'ShowAttributes', data);
    return promise.then(data => MsgShowAttributesResponse.decode(new BinaryReader(data)));
  }
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse> {
    const data = MsgSetFeeConfig.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetFeeConfig', data);
    return promise.then(data => MsgSetFeeConfigResponse.decode(new BinaryReader(data)));
  }
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse> {
    const data = MsgSetMintauth.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetMintauth', data);
    return promise.then(data => MsgSetMintauthResponse.decode(new BinaryReader(data)));
  }
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse> {
    const data = MsgChangeOrgOwner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'ChangeOrgOwner', data);
    return promise.then(data => MsgChangeOrgOwnerResponse.decode(new BinaryReader(data)));
  }
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse> {
    const data = MsgSetUriRetrievalMethod.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetUriRetrievalMethod', data);
    return promise.then(data => MsgSetUriRetrievalMethodResponse.decode(new BinaryReader(data)));
  }
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse> {
    const data = MsgSetOriginChain.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetOriginChain', data);
    return promise.then(data => MsgSetOriginChainResponse.decode(new BinaryReader(data)));
  }
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse> {
    const data = MsgSetOriginContract.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetOriginContract', data);
    return promise.then(data => MsgSetOriginContractResponse.decode(new BinaryReader(data)));
  }
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse> {
    const data = MsgSetAttributeOveriding.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetAttributeOveriding', data);
    return promise.then(data => MsgSetAttributeOveridingResponse.decode(new BinaryReader(data)));
  }
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse> {
    const data = MsgSetMetadataFormat.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'SetMetadataFormat', data);
    return promise.then(data => MsgSetMetadataFormatResponse.decode(new BinaryReader(data)));
  }
  createActionExecutor(request: MsgCreateActionExecutor): Promise<MsgCreateActionExecutorResponse> {
    const data = MsgCreateActionExecutor.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'CreateActionExecutor', data);
    return promise.then(data => MsgCreateActionExecutorResponse.decode(new BinaryReader(data)));
  }
  deleteActionExecutor(request: MsgDeleteActionExecutor): Promise<MsgDeleteActionExecutorResponse> {
    const data = MsgDeleteActionExecutor.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'DeleteActionExecutor', data);
    return promise.then(data => MsgDeleteActionExecutorResponse.decode(new BinaryReader(data)));
  }
  updateSchemaAttribute(request: MsgUpdateSchemaAttribute): Promise<MsgUpdateSchemaAttributeResponse> {
    const data = MsgUpdateSchemaAttribute.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'UpdateSchemaAttribute', data);
    return promise.then(data => MsgUpdateSchemaAttributeResponse.decode(new BinaryReader(data)));
  }
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse> {
    const data = MsgUpdateAction.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixnft.nftmngr.Msg', 'UpdateAction', data);
    return promise.then(data => MsgUpdateActionResponse.decode(new BinaryReader(data)));
  }
}