
import { useEffect, useState } from 'react';
import { useOOXXNFTContract } from "./useContract";

export function useGameLen() {
  // const { account, provider } = useWalletContext();
  const ooxxnft = useOOXXNFTContract();
  const [gameLen, setGameLen] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      if (ooxxnft != null) {
        let lenBig = await ooxxnft?.gameLen()

        setGameLen(lenBig.toNumber());
      }


    };
    fetchData();
  }, [ooxxnft]);

  return gameLen;
};


export function usePremark(tokenId: number) {
  // const { account, provider } = useWalletContext();
  if (tokenId < 0) {
    return false;
  }
  const ooxxnft = useOOXXNFTContract();
  const [premark, setPremark] = useState<boolean>();
  useEffect(() => {
    const fetchData = async () => {
      if (ooxxnft != null) {
        let preMark = await ooxxnft?.getPreMark(tokenId);

        setPremark(preMark);
      }
    };
    fetchData();
  }, [ooxxnft]);

  return premark;
};


