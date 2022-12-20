import { MockScenarios } from '@moralisweb3/test-utils';
import { createErrorResponse } from '../response/errorResponse';

export const mockGetNFTContractTransfers = MockScenarios.create(
  {
    method: 'get',
    name: 'mockGetNFTContractTransfers',
    url: `/nft/:address/transfers`,
    getParams: ({ req }) => ({
      address: req.params.address,
      from_block: req.url.searchParams.get('from_block'),
      to_block: req.url.searchParams.get('to_block'),
      from_date: req.url.searchParams.get('from_date'),
      to_date: req.url.searchParams.get('to_date'),
      limit: req.url.searchParams.get('limit'),
    }),
  },
  [
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387a',
      },
      response: {
        total: 2000,
        page: 2,
        page_size: 100,
        cursor: 'string',
        result: [
          {
            token_address: '0x057Ec652A4F150f7FF94f089A38008f49a0DF88e',
            token_id: '15',
            from_address: '0x057Ec652A4F150f7FF94f089A38008f49a0DF88e',
            to_address: '0x057Ec652A4F150f7FF94f089A38008f49a0DF88e',
            value: '1000000000000000',
            amount: '1',
            contract_type: 'ERC721',
            block_number: '88256',
            block_timestamp: '2021-06-04T16:00:15',
            block_hash: 'string',
            transaction_hash: '0x057Ec652A4F150f7FF94f089A38008f49a0DF88e',
            transaction_type: 'string',
            transaction_index: 0,
            log_index: 0,
            operator: '0x057Ec652A4F150f7FF94f089A38008f49a0DF88e',
          },
        ],
        block_exists: true,
        index_complete: true,
      },
    },
    {
      condition: {
        address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        from_block: '16220200',
        to_block: '16220260',
        limit: '5',
      },
      response: {
        total: 14,
        page: 0,
        page_size: 5,
        cursor:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0Ijo1LCJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIiwidG9fYmxvY2siOiIxNjIyMDI2MCIsImZyb21fYmxvY2siOiIxNjIyMDIwMCIsIndoZXJlIjp7fSwicGFnZSI6MSwia2V5IjoiMTYyMjAyMjkuNTkuMTg1LjAiLCJ0b3RhbCI6MTQsImlhdCI6MTY3MTUzNjQwNn0.n6aS2wvhqQGOr5852XhRw4UEZwugVCAc6PhhEWplIks',
        result: [
          {
            block_number: '16220243',
            block_timestamp: '2022-12-19T17:29:47.000Z',
            block_hash: '0xe402c4301815dd510f7f6aae9aeda6db38963e911b8b22d6bea748f08ab07e6a',
            transaction_hash: '0x46abe8f876740bdb5b7fab5ee4721440e079adfc7926fdc8431f81197001e76d',
            transaction_index: 102,
            log_index: 269,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '6955',
            from_address: '0xacdaeeb57ff6886fc8e203b9dd4c2b241df89b7a',
            to_address: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16220233',
            block_timestamp: '2022-12-19T17:27:47.000Z',
            block_hash: '0xb22a38e6b534a14bd9a7e5d0c57f6f7bbeb6ecd99bb981cef2e279aede8ac0aa',
            transaction_hash: '0x2d90388a2a2176dd35f9261c3e6f9b65082a69561626bec4cffd5f3985b5cad4',
            transaction_index: 97,
            log_index: 194,
            value: '66000000000000000000',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '6955',
            from_address: '0x8fe1d101e65066b9d2beaccfd96f2b6838079904',
            to_address: '0xacdaeeb57ff6886fc8e203b9dd4c2b241df89b7a',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16220229',
            block_timestamp: '2022-12-19T17:26:59.000Z',
            block_hash: '0x864303cf46d45c5a97cc144043783c4bf90a00411943bc749a9848f0f2066f80',
            transaction_hash: '0xb5bf14d3b7823bc4a2e200563c4e0c62e759406d6c2e29c09fa12179564135e3',
            transaction_index: 59,
            log_index: 190,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '4221',
            from_address: '0x5f6ac80cdb9e87f3cfa6a90e5140b9a16a361d5c',
            to_address: '0xdbfd76af2157dc15ee4e57f3f942bb45ba84af24',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16220229',
            block_timestamp: '2022-12-19T17:26:59.000Z',
            block_hash: '0x864303cf46d45c5a97cc144043783c4bf90a00411943bc749a9848f0f2066f80',
            transaction_hash: '0xb5bf14d3b7823bc4a2e200563c4e0c62e759406d6c2e29c09fa12179564135e3',
            transaction_index: 59,
            log_index: 187,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '4221',
            from_address: '0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762',
            to_address: '0x5f6ac80cdb9e87f3cfa6a90e5140b9a16a361d5c',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16220229',
            block_timestamp: '2022-12-19T17:26:59.000Z',
            block_hash: '0x864303cf46d45c5a97cc144043783c4bf90a00411943bc749a9848f0f2066f80',
            transaction_hash: '0xb5bf14d3b7823bc4a2e200563c4e0c62e759406d6c2e29c09fa12179564135e3',
            transaction_index: 59,
            log_index: 185,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '4221',
            from_address: '0x3b968d2d299b895a5fcf3bba7a64ad0f566e6f88',
            to_address: '0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762',
            amount: '1',
            verified: 1,
            operator: null,
          },
        ],
        block_exists: true,
      },
    },
    {
      condition: {
        address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        from_date: '2022-12-10T00:00:00.000Z',
        to_date: '2022-12-11T00:00:00.000Z',
        limit: '5',
      },
      response: {
        total: 534,
        page: 0,
        page_size: 5,
        cursor:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0Ijo1LCJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIiwidG9fYmxvY2siOiIxNjE1Nzc0NyIsImZyb21fYmxvY2siOiIxNjE1MDU4MiIsIndoZXJlIjp7fSwicGFnZSI6MSwia2V5IjoiMTYxNTc1NTYuNjkuMjA0LjAiLCJ0b3RhbCI6NTM0LCJpYXQiOjE2NzE1MzY0OTl9.zcmNI9Ob9N2_pxXjXeFU9Bg-nKO8rfFAAoQSqObNMhk',
        result: [
          {
            block_number: '16157738',
            block_timestamp: '2022-12-10T23:58:11.000Z',
            block_hash: '0xcfd8199a615f41075713d1e50959d43ebd3d93de69a89b9c91665ffeb26be299',
            transaction_hash: '0x78f80e01149dfb5184244dc5ced3cbc13bb3b83288edac51064a7778bc2855d5',
            transaction_index: 48,
            log_index: 97,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '2387',
            from_address: '0xdd06a764b975a844b6499895fec8eb1fdc514a93',
            to_address: '0x180dd1a1f2d43e0162b62a2f1d19a8e4543d75b2',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16157714',
            block_timestamp: '2022-12-10T23:53:23.000Z',
            block_hash: '0x840de8f6e2462245c184d234938167f37ad4b705d9d02b386e224f849578378e',
            transaction_hash: '0x1153fcd679cfa2e7119ded91fb1a58741917a53267f2498b500f3f4a9242333f',
            transaction_index: 53,
            log_index: 103,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '2387',
            from_address: '0x180dd1a1f2d43e0162b62a2f1d19a8e4543d75b2',
            to_address: '0xdd06a764b975a844b6499895fec8eb1fdc514a93',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16157606',
            block_timestamp: '2022-12-10T23:31:35.000Z',
            block_hash: '0x538ca064f1680481af4ea6230037f5209e91326cd4bcc6e65c87e4abd686efeb',
            transaction_hash: '0x3f009015574789e3265cc9f56770baff161d6bd8dca51475c759a829aebd84eb',
            transaction_index: 67,
            log_index: 105,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '7022',
            from_address: '0xa23fb30615eae4791595a66d36c6db7351e9ed2b',
            to_address: '0xd4c8ae4747926c3b09b3a9b83071d94fa6e2c740',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16157559',
            block_timestamp: '2022-12-10T23:22:11.000Z',
            block_hash: '0x93ba80b80fca8974b2b9e741cdd772cfc0a97d716b3bb0d136fbf61ab7dd1996',
            transaction_hash: '0xa11b3eb5f86ed525c987b6a78d41d1ccf8dab9d6c938837151061fd942095d0a',
            transaction_index: 107,
            log_index: 239,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '5655',
            from_address: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
            to_address: '0x6cfdad0772edc2ea15076a9706ec7c1f0a791ac1',
            amount: '1',
            verified: 1,
            operator: null,
          },
          {
            block_number: '16157556',
            block_timestamp: '2022-12-10T23:21:35.000Z',
            block_hash: '0x2d693dc60654f346c615cfed8521214f84fced96d224d27923a9fbcf3957f149',
            transaction_hash: '0x0aa724b993e1dc1ac1f0f2eb41c968a65d6d2af0a6cec2404c836a694d69d3e0',
            transaction_index: 69,
            log_index: 204,
            value: '0',
            contract_type: 'ERC721',
            transaction_type: 'Single',
            token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            token_id: '3704',
            from_address: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
            to_address: '0x5afcbb8b3eb9441a5a9a18a45b496cbd5dcd64d9',
            amount: '1',
            verified: 1,
            operator: null,
          },
        ],
        block_exists: true,
      },
    },
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387',
      },
      responseStatus: 400,
      response: createErrorResponse('[C0005] Invalid address provided'),
    },
  ],
);
