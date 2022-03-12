import contractAddress from "contracts/contract-address.json";

const Network = process.env.NETWORK

const Local = "localhost"
const Polygon = "polygon"
const Mumbai = "mumbai"

let jsonrpc = (Network == Polygon) ? "https://polygon-rpc.com/" :
    (Network == Mumbai) ? "https://rpc-mumbai.maticvigil.com/" : `http://${Network}:8545`;

let apiAccountNFT = (Network == Polygon) ? "https://api.polygonscan.com/api?module=account&action=tokennfttx" :
    "https://api-testnet.polygonscan.com/api?module=account&action=tokennfttx";


export const JSONRPC = jsonrpc;
export const APIAccountNFT = apiAccountNFT;

export const MaxFetch = 20;
export const StartBlock = 1;
export const MaxBlocks = 1000;

// for new & play game
export const GasLimitOverrideOptions = {
    gasLimit: 198000,
};

// https://testnets.opensea.io/assets/mumbai/0x618a42513d98d847ed51bd5893753fc4e05c5274/0
// https://opensea.io/assets/matic/0x3f07f64d5431d3f26fa322b730b5f350ae79c159/13
export const OpenSeaUnitPage = (tokenId: number) => {
    return (Network == Polygon) ? `https://opensea.io/assets/matic/${contractAddress.OOXXNFT}/${tokenId}` :
        (Network == Mumbai) ? `https://testnets.opensea.io/assets/mumbai/${contractAddress.OOXXNFT}/${tokenId}` : `https://testnets.opensea.io/assets/mumbai/${contractAddress.OOXXNFT}/${tokenId}`;
};
