import { useEffect, useRef } from "react";
import { atom, useAtom } from 'jotai'
import { useAtomValue, } from 'jotai/utils'
import { useOOXXNFTContract } from 'hooks/useContract';
import { useBlockNumber } from 'hooks/useBlockContext';
import { MaxBlocks, MaxFetch } from 'types/constants'
import contractAddress from "../contracts/contract-address.json";
import ReactTextTransition from "react-text-transition";

export const atomStartBlock = atom(Number.MAX_SAFE_INTEGER);
export const atomEndBlock = atom(0);
export const atomEndGameIdAry = atom<number[]>([0]);
export const atomOngoingGameIdAry = atom<number[]>([]);


const FetchPeriosMsSlow = 300;

export const BlockFromToInfo = () => {
    const startBlock = useAtomValue(atomStartBlock)
    const endBlock = useAtomValue(atomEndBlock)

    return (
        <div id="BlockFromToInfo">
            {endBlock == 0 ? <h3 className="text-center">Please Connect Polygon Wallet!</h3> : (
                <div className="flex justify-center content-center align-center">
                    block from&nbsp;
                    <ReactTextTransition
                        text={startBlock}
                        springConfig={{ tension: 300, friction: 10 }}
                    />&nbsp;to&nbsp;
                    <ReactTextTransition
                        text={endBlock}
                        springConfig={{ tension: 300, friction: 10 }}
                    />
                </div>
            )}
        </div>
    );
}

export const useGameIdAry = () => {
    const ooxxnft = useOOXXNFTContract();
    const block = useBlockNumber();
    const [endGameIdAry, setEndGameIdAry] = useAtom(atomEndGameIdAry);
    const [ongoingGameIdAry, setOngoingGameIdAry] = useAtom(atomOngoingGameIdAry);
    const [startBlock, setStartBlock] = useAtom(atomStartBlock)
    const [endBlock, setEndBlock] = useAtom(atomEndBlock)

    const fetchPeriosMs = useRef(0);

    async function fetchEndGame(sblock: number, eblock: number) {
        if (ooxxnft != null && block > 0 && sblock <= eblock) {
            console.log(`end_game check block from ${sblock} to ${eblock}`)

            try {
                const eventsFilter = ooxxnft.filters.GameUpdate();

                const events = await ooxxnft.queryFilter(eventsFilter, sblock, eblock);
                let tEndGameIdAry = [...endGameIdAry];
                let tOngoingIdAry = [...ongoingGameIdAry];

                events.map((event) => {
                    // console.log(`event:`, event);
                    // console.log(`event game(${event.args.gameID}) -> ${event.args.info}`);
                    const info = event.args.info;
                    const gameIdNum = event.args.gameID.toNumber();
                    if (info == "end") {
                        if (!tEndGameIdAry.includes(gameIdNum)) {
                            tEndGameIdAry.push(gameIdNum);
                        }
                    } else if (info == "create") {
                        if (!tEndGameIdAry.includes(gameIdNum) &&
                            !tOngoingIdAry.includes(gameIdNum)) {
                            tOngoingIdAry.push(gameIdNum);
                        }
                    }
                });

                if (tEndGameIdAry.length != endGameIdAry.length) {
                    console.log("set new endGameIdAry:", tEndGameIdAry);
                    setEndGameIdAry(tEndGameIdAry);
                }

                if (tOngoingIdAry.length != ongoingGameIdAry.length) {
                    console.log("set new tOngoingIdAry:", tOngoingIdAry);
                    setOngoingGameIdAry(tOngoingIdAry);
                }

            } catch (error) {
                console.log("fetch error:", error);
            }
        }
    }

    async function runUpdate() {
        if (block <= 0) return;

        let fetchStartBlock: number;
        let fetchEndBlock: number;

        if (endBlock == 0) {
            // fetch latest 1000 blocks
            fetchStartBlock = (block - MaxBlocks + 1) > (contractAddress.DeployBlock) ? (block - MaxBlocks + 1) : (contractAddress.DeployBlock);
            fetchEndBlock = block;
            fetchPeriosMs.current = FetchPeriosMsSlow;
        } else if (endGameIdAry.length < MaxFetch && startBlock > contractAddress.DeployBlock) {
            fetchEndBlock = startBlock - 1;
            fetchStartBlock = startBlock - 1000;
            fetchPeriosMs.current = FetchPeriosMsSlow;
        } else {
            fetchStartBlock = endBlock + 1;
            fetchEndBlock = block;
            fetchPeriosMs.current = 0;
        }

        await fetchEndGame(fetchStartBlock, fetchEndBlock);

        if (fetchStartBlock < startBlock) {
            setStartBlock(fetchStartBlock);
        }
        if (fetchEndBlock > endBlock) {
            setEndBlock(fetchEndBlock);
        }

    }

    useEffect(() => {
        async function asyncRunUpdate() {
            await runUpdate();
        }

        if (fetchPeriosMs.current == 0) {
            asyncRunUpdate();
        } else {
            let timer1 = setTimeout(() => {
                asyncRunUpdate();

            }, fetchPeriosMs.current);
            return () => {
                clearTimeout(timer1);
            };
        }


    }, [block, startBlock]);

    return { endGameIdAry, ongoingGameIdAry };
}
