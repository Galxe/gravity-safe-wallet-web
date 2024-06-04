import { useEffect } from 'react'
import {
  type ChainInfo,
  FEATURES,
  GAS_PRICE_TYPE,
  // getChainsConfig,
  RPC_AUTHENTICATION,
} from '@safe-global/safe-gateway-typescript-sdk'
import useAsync, { type AsyncResult } from '../useAsync'
import { Errors, logError } from '@/services/exceptions'

const getConfigs = async (): Promise<ChainInfo[]> => {
  // const data = await getChainsConfig()
  // return data.results || []
  return [
    {
      chainName: 'Gravity',
      nativeCurrency: {
        name: 'Gravity',
        symbol: 'G.',
        decimals: 18,
        logoUri: 'https://assets.gravity.xyz/token_logo.png',
      },
      features: [FEATURES.EIP1559],
      shortName: 'gravity',
      chainId: '1625',
      transactionService: 'https://safe-transaction-sepolia.staging.5afe.dev/',
      description: 'Gravity Alpha Mainnet',
      chainLogoUri: 'https://assets.gravity.xyz/chain_logo.png',
      l2: true,
      isTestnet: false,
      gasPrice: [
        {
          gasParameter: 'FastGasPrice',
          gweiFactor: '1000000000.000000000',
          type: GAS_PRICE_TYPE.ORACLE,
          uri: 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=JNFAU892RF9TJWBU3EV7DJCPIWZY8KEMY1',
        },
      ],
      disabledWallets: ['socialSigner'],
      publicRpcUri: {
        authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
        value: 'https://rpc.gravity.xyz',
      },
      rpcUri: {
        authentication: RPC_AUTHENTICATION.API_KEY_PATH,
        value: 'https://rpc.gravity.xyz',
      },
      safeAppsRpcUri: {
        authentication: RPC_AUTHENTICATION.API_KEY_PATH,
        value: 'https://rpc.gravity.xyz',
      },
      theme: {
        textColor: '#ffffff',
        backgroundColor: '#B8AAD5',
      },
      blockExplorerUriTemplate: {
        address: 'https://etherscan.io/address/{{address}}',
        api: 'https://api.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}',
        txHash: 'https://etherscan.io/tx/{{txHash}}',
      },
    },

    {
      chainName: 'Gravity Sepolia',
      chainLogoUri: 'https://assets.gravity.xyz/chain_logo.png',
      description: 'Gravity Testnet Sepolia',
      nativeCurrency: {
        name: 'Sepolia Gravity',
        symbol: 'G.',
        decimals: 18,
        logoUri: 'https://assets.gravity.xyz/token_logo.png',
      },
      transactionService: 'https://safe-transaction-sepolia.staging.5afe.dev/',
      features: [FEATURES.EIP1559],
      // infoURL: 'https://gravity.xyz',
      shortName: 'gravitysep',
      chainId: '13505',
      gasPrice: [
        {
          gasParameter: 'FastGasPrice',
          gweiFactor: '1000000000.000000000',
          type: GAS_PRICE_TYPE.ORACLE,
          uri: 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=JNFAU892RF9TJWBU3EV7DJCPIWZY8KEMY1',
        },
      ],
      disabledWallets: ['socialSigner'],
      // networkId: 13505,
      // icon: 'gravity',
      // explorers: [
      //   {
      //     name: 'Gravity Alpha Testnet Sepolia Explorer',
      //     url: 'https://explorer-sepolia.gravity.xyz',
      //     standard: 'EIP3091',
      //   },
      // ],
      // parent: {
      //   type: 'L2',
      //   chain: 'eip155-11155111',
      //   bridges: [],
      // },
      l2: true,
      isTestnet: true,
      publicRpcUri: {
        authentication: RPC_AUTHENTICATION.API_KEY_PATH,
        value: 'https://rpc-sepolia.gravity.xyz',
      },
      rpcUri: {
        authentication: RPC_AUTHENTICATION.API_KEY_PATH,
        value: 'https://rpc-sepolia.gravity.xyz',
      },
      safeAppsRpcUri: {
        authentication: RPC_AUTHENTICATION.API_KEY_PATH,
        value: 'https://rpc-sepolia.gravity.xyz',
      },
      theme: {
        textColor: '#ffffff',
        backgroundColor: '#B8AAD5',
      },
      blockExplorerUriTemplate: {
        address: 'https://etherscan.io/address/{{address}}',
        api: 'https://api.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}',
        txHash: 'https://etherscan.io/tx/{{txHash}}',
      },
    },
  ]
}

export const useLoadChains = (): AsyncResult<ChainInfo[]> => {
  const [data, error, loading] = useAsync<ChainInfo[]>(getConfigs, [])

  // Log errors
  useEffect(() => {
    if (error) {
      logError(Errors._620, error.message)
    }
  }, [error])

  return [data, error, loading]
}

export default useLoadChains
