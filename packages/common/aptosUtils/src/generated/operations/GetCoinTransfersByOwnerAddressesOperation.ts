import { AptosAddress, AptosAddressInput, AptosAddressJSON } from '../../dataTypes';
import { AptosGetCoinTransfersByOwnerAddressesResponse, AptosGetCoinTransfersByOwnerAddressesResponseJSON } from '../types/AptosGetCoinTransfersByOwnerAddressesResponse';

// request parameters:
// - limit ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/0/schema)
// - offset ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/1/schema)
// - cursor ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/2/schema)
// - owner_addresses ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/3/schema)
// - from_date ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/4/schema)
// - to_date ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/5/schema)
// - coin_type_blacklist ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/6/schema)
// - coin_type_whitelist ($ref: #/paths/~1coins~1transfers~1wallets/get/parameters/7/schema)

export interface GetCoinTransfersByOwnerAddressesOperationRequest {
  readonly limit: number;
  readonly offset?: number;
  readonly cursor?: string;
  readonly ownerAddresses: AptosAddressInput[] | AptosAddress[];
  readonly fromDate?: string;
  readonly toDate?: string;
  readonly coinTypeBlacklist?: string[];
  readonly coinTypeWhitelist?: string[];
}

export interface GetCoinTransfersByOwnerAddressesOperationRequestJSON {
  readonly limit: number;
  readonly offset?: number;
  readonly cursor?: string;
  readonly owner_addresses: AptosAddressJSON[];
  readonly from_date?: string;
  readonly to_date?: string;
  readonly coin_type_blacklist?: string[];
  readonly coin_type_whitelist?: string[];
}

export const GetCoinTransfersByOwnerAddressesOperation = {
  operationId: "getCoinTransfersByOwnerAddresses",
  groupName: "coins",
  httpMethod: "get",
  routePattern: "/coins/transfers/wallets",
  parameterNames: ["limit","offset","cursor","owner_addresses","from_date","to_date","coin_type_blacklist","coin_type_whitelist"],
  hasResponse: true,
  hasBody: false,

  parseResponse(json: AptosGetCoinTransfersByOwnerAddressesResponseJSON): AptosGetCoinTransfersByOwnerAddressesResponse {
    return AptosGetCoinTransfersByOwnerAddressesResponse.fromJSON(json);
  },

  serializeRequest(request: GetCoinTransfersByOwnerAddressesOperationRequest): GetCoinTransfersByOwnerAddressesOperationRequestJSON {
    const limit = request.limit;
    const offset = request.offset;
    const cursor = request.cursor;
    const ownerAddresses = request.ownerAddresses.map((item) => AptosAddress.create(item));
    const fromDate = request.fromDate;
    const toDate = request.toDate;
    const coinTypeBlacklist = request.coinTypeBlacklist;
    const coinTypeWhitelist = request.coinTypeWhitelist;
    return {
      limit: limit,
      offset: offset,
      cursor: cursor,
      owner_addresses: ownerAddresses.map((item) => item.toJSON()),
      from_date: fromDate,
      to_date: toDate,
      coin_type_blacklist: coinTypeBlacklist,
      coin_type_whitelist: coinTypeWhitelist,
    };
  },

}
