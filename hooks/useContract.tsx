import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react';
import { useWalletContext } from './useWalletContext';
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider, JsonRpcProvider } from '@ethersproject/providers'

import { OOXXNFT } from 'contracts';

import OOXXNFTArtifact from "../contracts-abi/OOXXNFT.json";
import contractAddress from "../contracts/contract-address.json";



// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}

// account is not optional
function getSigner(provider: Web3Provider | JsonRpcProvider, account: string): JsonRpcSigner {
    return provider.getSigner(account).connectUnchecked()
}

// account is optional
function getProviderOrSigner(provider: Web3Provider | JsonRpcProvider, account?: string): Web3Provider | JsonRpcProvider | JsonRpcSigner {
    return account ? getSigner(provider, account) : provider
}

function getContract(address: string, ABI: any, provider: Web3Provider | JsonRpcProvider, account?: string): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(provider, account) as any)
}

// address is contract address
function useContract<T extends Contract = Contract>(
    address: string,
    ABI: any,
    withSignerIfPossible = true
): T | null {
    const { account, provider } = useWalletContext();
    return useMemo(() => {
        if (!address || !ABI || !provider) return null
        try {
            return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined)

        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }


    }, [address, ABI, provider, withSignerIfPossible, account]) as T
}

export function useOOXXNFTContract(needSigner: boolean = false) {
    return useContract<OOXXNFT>(contractAddress.OOXXNFT, OOXXNFTArtifact.abi, needSigner)
}
