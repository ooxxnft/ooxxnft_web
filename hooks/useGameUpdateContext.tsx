import { useRef, useEffect, createContext, useContext, useCallback, useState } from 'react';
import { atom } from 'jotai'
import { useAtomValue, useUpdateAtom, } from 'jotai/utils'
import { useBlockNumber } from './useBlockContext';
import { useOOXXNFTContract } from 'hooks/useContract';
import { MaxBlocks, MaxFetch } from 'types/constants'
import { gameIdAtom, startEndAtom } from 'hooks/useGameIdAry'
import contractAddress from "../contracts/contract-address.json";

const FetchPeriosMsSlow = 300;

const GameUpdateContext = createContext<{
    registerGameUpdate: any;
}>({ registerGameUpdate: null });

const startEndBlockAtom = atom({
    startBlock: Number.MAX_SAFE_INTEGER,
    endBlock: 0
})

interface GameUpdateProviderProps {
    children: React.ReactNode;
}

export const GameUpdateProvider = (props: GameUpdateProviderProps) => {
    const onGameUpdate = useGameUpdate();
    return (
        <GameUpdateContext.Provider value={{
            registerGameUpdate: onGameUpdate,
        }} >
            {props.children}
        </GameUpdateContext.Provider>
    );
};



export const useGameUpdate = () => {
    const block = useBlockNumber();
    const ooxxnft = useOOXXNFTContract();
    const [listenPool, setListenPool] = useState<{ [tokenId: number]: any }>({});
    const { endGameIdAry, ongoingGameIdAry } = useAtomValue(gameIdAtom);
    const setGameId = useUpdateAtom(gameIdAtom);

    const { startBlock, endBlock } = useAtomValue(startEndBlockAtom);
    const setStartEndBlock = useUpdateAtom(startEndBlockAtom);
    const fetchPeriosMs = useRef(0);
    const { startId, endId } = useAtomValue(startEndAtom);


    const onGameUpdate = useCallback((tokenId: number, listener: () => void) => {
        // console.log(`register onGameUpdate(${tokenId})`)
        setListenPool(prevState => ({
            ...prevState,
            [tokenId]: listener
        }))
    }, []);

    const fetchGameUpdate = async function (sblock: number, eblock: number) {
        if (ooxxnft != null && sblock > 0 && sblock <= eblock) {
            // console.log(`fetchGameUpdate check from startBlock(${sblock}) to block(${eblock}): `);
            const eventsFilter = ooxxnft.filters.GameUpdate();
            const events = await ooxxnft.queryFilter(eventsFilter, sblock, eblock);


            let tEndGameIdAry = [...endGameIdAry];
            let tOngoingIdAry = [...ongoingGameIdAry];
            let ongoingUpdate = false;
            events.map((event) => {
                // console.log("event block:", event.blockNumber);
                // console.log(`event game(${event.args.gameID})-> ${event.args.info}`);
                let u = event.args;
                let gameIdNum = u.gameID.toNumber();

                if (gameIdNum in listenPool && u.info == "update") {
                    listenPool[gameIdNum]?.();
                } else if (u.info == "create") {

                    if (!tOngoingIdAry.includes(gameIdNum)) {
                        tOngoingIdAry.push(gameIdNum);
                        ongoingUpdate = true;
                    }
                } else if (u.info == "end") {
                    if (!tEndGameIdAry.includes(gameIdNum)) {
                        tEndGameIdAry.push(gameIdNum);
                    }
                    if (tOngoingIdAry.includes(gameIdNum)) {
                        tOngoingIdAry = tOngoingIdAry.filter(x => x !== gameIdNum);
                        ongoingUpdate = true;
                    }
                    listenPool[u.gameID.toNumber()] = undefined;

                }

            });

            if (tEndGameIdAry.length != endGameIdAry.length) {
                tEndGameIdAry = tEndGameIdAry.sort((a, b) => b - a);
            }

            if (ongoingUpdate) {
                tOngoingIdAry = tOngoingIdAry.sort((a, b) => b - a);
            }

            if (tEndGameIdAry.length != endGameIdAry.length ||
                ongoingUpdate) {
                setGameId({
                    endGameIdAry: tEndGameIdAry,
                    ongoingGameIdAry: tOngoingIdAry
                })
            }

        };
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
        } else if (endGameIdAry.length < MaxFetch &&
            startBlock > contractAddress.DeployBlock && endId <= 0) {
            fetchEndBlock = startBlock - 1;
            fetchStartBlock = startBlock - 1000;
            fetchPeriosMs.current = FetchPeriosMsSlow;
        } else {
            fetchStartBlock = endBlock + 1;
            fetchEndBlock = block;
            fetchPeriosMs.current = 0;
        }

        await fetchGameUpdate(fetchStartBlock, fetchEndBlock);

        if (fetchStartBlock < startBlock || fetchEndBlock > endBlock) {
            setStartEndBlock({
                startBlock: (fetchStartBlock < startBlock) ? fetchStartBlock : startBlock,
                endBlock: (fetchEndBlock > endBlock) ? fetchEndBlock : endBlock
            })
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


    return onGameUpdate;
};


export const useRegisterGameUpdate = () => {
    const { registerGameUpdate } = useContext(GameUpdateContext);

    return registerGameUpdate;
};
