import { AptosGetNFTTransfersByCollectionResponse, AptosGetNFTTransfersByCollectionResponseJSON } from '../types/AptosGetNFTTransfersByCollectionResponse';

// request parameters:
// - collection_data_id_hash ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/0/schema)
// - limit ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/1/schema)
// - offset ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/2/schema)
// - cursor ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/3/schema)
// - wallet_whitelist ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/4/schema)
// - wallet_blacklist ($ref: #/paths/~1nfts~1transfers~1collections~1{collection_data_id_hash}/get/parameters/5/schema)

export interface GetNFTTransfersByCollectionOperationRequest {
  readonly collectionDataIdHash: string;
  readonly limit: number;
  readonly offset?: number;
  readonly cursor?: string;
  readonly walletWhitelist?: string[];
  readonly walletBlacklist?: string[];
}

export interface GetNFTTransfersByCollectionOperationRequestJSON {
  readonly collection_data_id_hash: string;
  readonly limit: number;
  readonly offset?: number;
  readonly cursor?: string;
  readonly wallet_whitelist?: string[];
  readonly wallet_blacklist?: string[];
}

export const GetNFTTransfersByCollectionOperation = {
  operationId: "getNFTTransfersByCollection",
  groupName: "nfts",
  httpMethod: "get",
  routePattern: "/nfts/transfers/collections/{collection_data_id_hash}",
  parameterNames: ["collection_data_id_hash","limit","offset","cursor","wallet_whitelist","wallet_blacklist"],
  hasResponse: true,
  hasBody: false,

  parseResponse(json: AptosGetNFTTransfersByCollectionResponseJSON): AptosGetNFTTransfersByCollectionResponse {
    return AptosGetNFTTransfersByCollectionResponse.fromJSON(json);
  },

  serializeRequest(request: GetNFTTransfersByCollectionOperationRequest): GetNFTTransfersByCollectionOperationRequestJSON {
    const collectionDataIdHash = request.collectionDataIdHash;
    const limit = request.limit;
    const offset = request.offset;
    const cursor = request.cursor;
    const walletWhitelist = request.walletWhitelist;
    const walletBlacklist = request.walletBlacklist;
    return {
      collection_data_id_hash: collectionDataIdHash,
      limit: limit,
      offset: offset,
      cursor: cursor,
      wallet_whitelist: walletWhitelist,
      wallet_blacklist: walletBlacklist,
    };
  },

}
