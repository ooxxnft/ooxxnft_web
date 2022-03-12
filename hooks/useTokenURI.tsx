
import { useEffect, useState } from 'react';
import { BigNumber } from '@ethersproject/bignumber'

import { useOOXXNFTContract } from "./useContract";
import { useRegisterGameUpdate } from "./useGameUpdateContext";

export const fetchTokenURI = async (contract: any, tokenId: number): Promise<string> => {
  let tokenIdBig = BigNumber.from(tokenId);
  let uri = await contract?.tokenURI(tokenIdBig)

  if (uri == undefined) {
    return "";
  }
  try {
    const _svg = atob(
      JSON.parse(
        atob(uri.replace('data:application/json;base64,', ''))
      ).image.replace('data:image/svg+xml;base64,', '')
    );
    return _svg;
  } catch (err) {
    console.log(err);
    return "";
  }
}


const useTokenURI = (tokenId: number) => {
  const ooxxnft = useOOXXNFTContract();
  const [svg, setSVG] = useState<string>();
  const registerGameUpdate = useRegisterGameUpdate();


  useEffect(() => {
    const fetchData = async () => {
      // console.log("Fetch tokenURI() tokenId: " + tokenId);
      let _svg = await fetchTokenURI(ooxxnft, tokenId);
      setSVG(_svg);
    };

    const registerGameUpdateFunc = async () => {
      if (ooxxnft != undefined) {
        const isEnd = await ooxxnft?.getIsEnd(tokenId);
        if (!isEnd) {
          registerGameUpdate?.(tokenId, fetchData);
        }
      }

    };

    fetchData();
    registerGameUpdateFunc();
  }, [ooxxnft]);

  return svg;
};

export default useTokenURI;
