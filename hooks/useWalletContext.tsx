// refer:
//  1. https://github.com/Web3Modal/web3modal/blob/master/example/src/helpers/chains.ts
//  2. https://github.com/ChangoMan/web3modal-example/blob/main/pages/index.tsx
import React, { createContext, useContext, useEffect, useState, useReducer, useCallback } from "react";
import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { shortenAddress } from "@utils/formatters";
import { IChainData } from "types/interface";
import { JSONRPC } from "types/constants";
import { supportedChains } from './chains'

const ChainId = 1;

function getChainData(chainId: number): IChainData {
  const chainData = supportedChains.filter(
    (chain: any) => chain.chain_id === chainId
  )[0];

  if (!chainData) {
    throw new Error("ChainId missing or not supported");
  }

  const API_KEY = process.env.REACT_APP_INFURA_ID;

  if (
    chainData.rpc_url.includes("infura.io") &&
    chainData.rpc_url.includes("%API_KEY%") &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl
    };
  }

  return chainData;
}

const getNetwork = () => getChainData(ChainId).network;

const isServer = typeof window === "undefined";


let web3Modal: Web3Modal;
if (!isServer) {
  web3Modal = new Web3Modal({
    network: getNetwork(),
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          pollingInterval: 20000000,
          rpc: {
            137: "https://rpc-mainnet.maticvigil.com/",
          },
          network: "matic",
        }
      }
    } // Add other providers here
  })
}



interface StateType {
  isConnected: boolean;
  signer: ethers.providers.JsonRpcSigner | undefined;
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined;
  connectWallet: () => void;
  disconnectWallet: () => void;
  connect: () => void;
  account: string;
  displayName: string;
  chainId: number;
}

const initialState: StateType = {
  isConnected: false,
  signer: undefined,
  provider: undefined,
  connectWallet: () => { },
  disconnectWallet: () => { },
  connect: () => { },
  account: "",
  displayName: "",
  chainId: ChainId,
}


const WalletContext = createContext<StateType>(initialState);

interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider = (props: WalletProviderProps) => {
  const wallet = useWallet();
  return (
    <WalletContext.Provider value={wallet}>
      {props.children}
    </WalletContext.Provider>
  );
};


type ActionType =
  | {
    type: 'SET_WEB3_PROVIDER'
    isConnected: true,
    signer: StateType['signer'],
    provider: StateType['provider'],
    account: StateType['account'],
    displayName: StateType['displayName'],
    chainId: StateType['chainId'],
  }
  | {
    type: 'SET_ADDRESS'
    account: StateType['account'],
  }
  | {
    type: 'SET_CHAIN_ID'
    chainId: StateType['chainId']
  }
  | {
    type: 'RESET_WEB3_PROVIDER'
  }



function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        isConnected: true,
        signer: action.signer,
        provider: action.provider,
        account: action.account,
        displayName: action.displayName,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        account: action.account,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}


function useWallet() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { isConnected, signer, provider, account, displayName, chainId } = state

  const connect = useCallback(async function () {
    const provider = new ethers.providers.JsonRpcProvider(JSONRPC);
    const network = await provider.getNetwork()
    dispatch({
      type: 'SET_WEB3_PROVIDER',
      isConnected: true,
      signer: undefined,
      provider,
      account: "",
      displayName: "",
      chainId: network.chainId,
    })
  }, [])

  const connectWallet = useCallback(async function () {
    // const connectWallet = async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    try {
      const rawProvider = await web3Modal.connect();
      const provider = new providers.Web3Provider(rawProvider)

      const signer = provider.getSigner()
      const account = await signer.getAddress()

      const network = await provider.getNetwork()
      const displayName = shortenAddress(account);
      console.log("using chainId: " + chainId);
      dispatch({
        type: 'SET_WEB3_PROVIDER',
        isConnected: true,
        signer,
        provider,
        account,
        displayName,
        chainId: network.chainId,
      })
    } catch (error) {
      console.log("connect wallet fail, err:", error);
      connect();
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }

  }, [])


  const disconnectWallet = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      // console.log("typeof provider.disconnect=" + (typeof provider?.disconnect));
      // if (provider?.disconnect && typeof provider.disconnect === 'function') {
      //   await provider.disconnect();
      //   // using connect()
      // }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    }, [provider])


  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      console.log("using connectWallet");
      connectWallet()
    } else {
      console.log("using connect");
      connect()
    }
  }, [connectWallet, connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          account: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnectWallet()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnectWallet])

  // const chainData = getChainData(ChainId)

  return {
    isConnected,
    signer,
    provider,
    connectWallet,
    disconnectWallet,
    connect,
    account,
    displayName,
    chainId
  };
}

export function useWalletContext() {
  return useContext(WalletContext);
}
