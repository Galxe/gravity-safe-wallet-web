import { useEffect } from 'react'
import { getChainsConfig, type ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import useAsync, { type AsyncResult } from '../useAsync'
import { logError, Errors } from '@/services/exceptions'

const getConfigs = async (): Promise<ChainInfo[]> => {
  const data = await getChainsConfig()
  // return data.results || []
  return [
    {
      name: 'Gravity Alpha Mainnet',
      chainName: 'Gravity',
      chain: 'Gravity',
      rpc: ['https://rpc.gravity.xyz'],
      faucets: [],
      nativeCurrency: {
        name: 'Gravity',
        symbol: 'G.',
        decimals: 18,
        logoUri: 'https://assets.gravity.xyz/token_logo.png',
      },
      features: [
        { name: 'EIP155' },
        { name: 'EIP1559' },
        { name: 'EIP1108' },
      ],
      infoURL: 'https://gravity.xyz',
      shortName: 'gravity',
      chainId: 1625,
      networkId: 1625,
      icon: 'gravity',
      explorers: [
        {
          name: 'Gravity Alpha Mainnet Explorer',
          url: 'https://explorer.gravity.xyz',
          standard: 'EIP3091',
        },
      ],
      parent: {
        type: 'L2',
        chain: 'eip155-1',
        bridges: [{ url: 'https://bridge.gravity.xyz' }],
      },
      description: 'Gravity Alpha Mainnet',
      chainLogoUri: 'https://assets.gravity.xyz/chain_logo.png',
      l2: true,
      isTestnet: false,
      publicRpcUri: {
        authentication: 'NO_AUTHENTICATION',
        value: 'https://rpc.sepolia.org',
      },
      rpcUri: {
        authentication: 'API_KEY_PATH',
        value: 'https://sepolia.infura.io/v3/',
      },
      safeAppsRpcUri: {
        authentication: 'API_KEY_PATH',
        value: 'https://goerli.infura.io/v3/',
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
      name: 'Gravity Alpha Testnet Sepolia',
      chainName: 'Gravity Sepolia',
      chainLogoUri: 'https://assets.gravity.xyz/chain_logo.png',
      description: 'Gravity Testnet Sepolia',
      chain: 'Gravity',
      rpc: ['https://rpc-sepolia.gravity.xyz'],
      faucets: [],
      nativeCurrency: {
        name: 'Sepolia Gravity',
        symbol: 'G.',
        decimals: 18,
        logoUri: 'https://assets.gravity.xyz/token_logo.png',
      },
      features: [{ name: 'EIP155' }, { name: 'EIP1559' }, { name: 'EIP1108' },],
      infoURL: 'https://gravity.xyz',
      shortName: 'gravitysep',
      chainId: '13505',
      networkId: 13505,
      icon: 'gravity',
      explorers: [
        {
          name: 'Gravity Alpha Testnet Sepolia Explorer',
          url: 'https://explorer-sepolia.gravity.xyz',
          standard: 'EIP3091',
        },
      ],
      parent: {
        type: 'L2',
        chain: 'eip155-11155111',
        bridges: [],
      },
      l2: true,
      isTestnet: true,
      publicRpcUri: {
        authentication: 'NO_AUTHENTICATION',
        value: 'https://rpc.sepolia.org',
      },
      rpcUri: {
        authentication: 'API_KEY_PATH',
        value: 'https://sepolia.infura.io/v3/',
      },
      safeAppsRpcUri: {
        authentication: 'API_KEY_PATH',
        value: 'https://goerli.infura.io/v3/',
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
  const [data, error, loading] = useAsync<ChainInfo[]>(
    getConfigs,
    [],
  )

  // Log errors
  useEffect(() => {
    if (error) {
      logError(Errors._620, error.message)
    }
  }, [error])

  return [data, error, loading]
}

export default useLoadChains
