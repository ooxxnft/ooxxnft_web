interface CardDetails {
  name: String;
  description: String;
  project: Array<Project>;
}

interface Project {
  name: String;
  heading?: String;
  description: String;
  whatToDo?: Array<Content>;
  roadMap?: Content;
  website?: Content;
  contract?: Content;
  twitter?: Content;
  discord?: Content;
  opensea?: Content;
  github?: Content;
  mintPrice?: Price;
  image?: String;
  neededProject?: Project;
  logo?: String;
}


interface Game {
  name: String;
  tokenId: String;
  image?: String;
}

interface Content {
  content?: String,
  url?: String
  component?: JSX.Element;
}

interface Price {
  mint?: Number
}

interface Links {
  name: String,
  path: String
}


interface Game {
  name: String,
  path: String
}


export type {
  CardDetails,
  Project,
  Game,
  Links
}

export interface IAssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}

export interface IChainData {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  chain_id: number;
  network_id: number;
  rpc_url: string;
  native_currency: IAssetData;
}