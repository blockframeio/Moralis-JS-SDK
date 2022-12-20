import { Core, Camelize, Operation, ResponseAdapter, dateInputToDate, toCamelCase } from '@moralisweb3/common-core';
import { EvmChain, EvmChainish, EvmAddress, EvmNft, EvmAddressish } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type GetElementType<Element extends unknown[]> = Element extends (infer Infered)[] ? Infered : never;

type OperationId = 'getMultipleNFTs';

type QueryParams = operations[OperationId]['parameters']['query'];
type BodyParams = operations[OperationId]['requestBody']['content']['application/json'];
type RequestParams = QueryParams & BodyParams;

// TODO: remove after swagger has been updated, or api handles null values differently
type SuccessElement = GetElementType<operations[OperationId]['responses']['200']['content']['application/json']>;
type SuccessResponse = (SuccessElement | null)[];

// Exports

export interface GetMultipleNFTsRequest extends Camelize<Omit<RequestParams, 'chain' | 'tokens'>> {
  chain?: EvmChainish;
  tokens: {
    tokenAddress: EvmAddressish;
    tokenId: string;
  }[];
}

export type GetMultipleNFTsJSONRequest = ReturnType<typeof serializeRequest>;

export type GetMultipleNFTsJSONResponse = SuccessResponse;

export type GetMultipleNFTsResponse = ReturnType<typeof deserializeResponse>;

export interface GetMultipleNFTsResponseAdapter
  extends ResponseAdapter<GetMultipleNFTsResponse, GetMultipleNFTsJSONResponse> {}

/**
 * Get NFTs for a given contract address, including metadata for all NFTs (where available).
 * * Results are limited to 100 per page by default
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.
 */
export const getMultipleNFTsOperation: Operation<
  GetMultipleNFTsRequest,
  GetMultipleNFTsJSONRequest,
  GetMultipleNFTsResponse,
  GetMultipleNFTsJSONResponse
> = {
  method: 'POST',
  name: 'getMultipleNFTs',
  id: 'getMultipleNFTs',
  groupName: 'nft',
  urlPathPattern: '/nft/getMultipleNFTs',
  urlPathParamNames: [],
  urlSearchParamNames: ['chain'],
  bodyType: 'properties',
  bodyParamNames: ['tokens', 'normalizeMetadata'],

  getRequestUrlParams,
  getRequestBody,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods
function getRequestUrlParams(request: GetMultipleNFTsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
  };
}

function getRequestBody(request: GetMultipleNFTsRequest, core: Core) {
  return {
    tokens: request.tokens.map((token) => ({
      token_address: EvmAddress.create(token.tokenAddress, core).lowercase,
      token_id: token.tokenId,
    })),
    normalizeMetadata: request.normalizeMetadata,
  };
}

function deserializeResponse(jsonResponse: GetMultipleNFTsJSONResponse, request: GetMultipleNFTsRequest, core: Core) {
  return (jsonResponse ?? []).map((nft) => {
    if (nft === null) {
      return null;
    }

    return EvmNft.create(
      {
        ...toCamelCase(nft),
        chain: EvmChainResolver.resolve(request.chain, core),
        amount: nft.amount ? parseInt(nft.amount, 10) : undefined,
        ownerOf: EvmAddress.create(nft.owner_of, core),
        lastMetadataSync: dateInputToDate(nft.last_metadata_sync),
        lastTokenUriSync: dateInputToDate(nft.last_token_uri_sync),
      },
      core,
    );
  });
}

function serializeRequest(request: GetMultipleNFTsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    normalizeMetadata: request.normalizeMetadata,
    tokens: request.tokens.map((token) => ({
      tokenAddress: EvmAddress.create(token.tokenAddress, core).lowercase,
      tokenId: token.tokenId,
    })),
  };
}

function deserializeRequest(jsonRequest: GetMultipleNFTsJSONRequest, core: Core): GetMultipleNFTsRequest {
  return {
    chain: EvmChain.create(jsonRequest.chain, core),
    normalizeMetadata: jsonRequest.normalizeMetadata,
    tokens: jsonRequest.tokens.map((token) => ({
      tokenAddress: EvmAddress.create(token.tokenAddress, core),
      tokenId: token.tokenId,
    })),
  };
}
