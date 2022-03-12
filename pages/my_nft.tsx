// Imports
import Layout from "@components/Layout"; // Layout wrapper
import GameCardPanel from "@components/GameCardPanel";
import { useBlockNumber } from 'hooks/useBlockContext';
import { ReactElement, useRef, useState, useEffect } from "react";
import { useWalletContext } from 'hooks/useWalletContext';
import { useTopAlert } from '@components/TopAlert'

import contractAddress from "../contracts/contract-address.json";
import { APIAccountNFT } from 'types/constants'
import { LangConnectWallet } from 'types/lang'


export default function EndGames(): ReactElement {
  const [tokenIdAry, setTokenIdAry] = useState<number[]>([]);
  const block = useBlockNumber();
  const { account } = useWalletContext();
  const { setAndShowTopAlert } = useTopAlert();
  // fetch isEnd
  useEffect(() => {
    async function fetchAccountNFT(account: any, page: number = 1, offset: number = 100) {
      if (account == "") {
        setAndShowTopAlert(LangConnectWallet, 'red');
        return;
      }
      setAndShowTopAlert("", 'red');
      const apiUrl = `${APIAccountNFT}&contractaddress=${contractAddress.OOXXNFT}&address=${account}&page=${page}&offset=${offset}&sort=asc`;
      const response = await fetch(apiUrl).then(res => {
        return res.json();
      });
      if (response.status != '1') {
        const showMsg = `${response.message}. ${response.result}`
        setAndShowTopAlert(showMsg, 'red');
        return;
      }
      let mtokenIdAry = [...tokenIdAry];
      response.result.map((item: any) => {
        const tokenID = parseInt(item.tokenID);
        if (!mtokenIdAry.includes(tokenID)) {
          mtokenIdAry.push(tokenID);
        }

      });

      mtokenIdAry = mtokenIdAry.sort((a, b) => b - a);
      // console.log("set new my_nft tokenIdAry:", mtokenIdAry);
      setTokenIdAry(mtokenIdAry);

    };

    fetchAccountNFT(account);
  }, [account, block]);


  return (
    <Layout>

      <div id="my_nft" className="bg-black  sm:py-5 pb-40 ">
        <div className="container mx-auto ">
          <div className="flex justify-around">
            <h1 className="text-center mt-4 capitalize">My NFT</h1>
          </div>
          <GameCardPanel tokenIdAry={tokenIdAry} canPlay={false} showTokenId={-1} />
        </div>
      </div>

    </Layout>
  );
}
