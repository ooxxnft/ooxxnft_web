import { useEffect, useRef, useState } from "react";
import { atom, useAtom } from 'jotai'
import { useAtomValue, useUpdateAtom, } from 'jotai/utils'
import { useOOXXNFTContract } from 'hooks/useContract';
import { useBlockNumber } from 'hooks/useBlockContext';
import { MaxFetch } from 'types/constants'
import ReactTextTransition from "react-text-transition";

export const startEndAtom = atom({
    startId: Number.MAX_SAFE_INTEGER,
    endId: 0
})

let ongoingGameIdAryInit: number[] = [];
export const gameIdAtom = atom({
    endGameIdAry: [0],
    ongoingGameIdAry: ongoingGameIdAryInit
})


export const fromUINewGameIDAtom = atom(-1);
export const fromUIEndGameIDAtom = atom(-1);


const FetchPeriosMsSlow = 200;
const FetchPeriodId = 5;

export const GameIdFromToInfo = () => {
    const { startId, endId } = useAtomValue(startEndAtom)
    const ooxxnft = useOOXXNFTContract();

    const showInfo = (ooxxnft == null) ? "Please Connect Polygon Wallet!" :
        (endId == 0) ? "Fetching Data ..." : "";

    return (
        <div id="BlockFromToInfo">
            {showInfo != "" ? <h3 className="text-center">{showInfo}</h3> : (
                <div className="flex justify-center content-center align-center">
                    Game ID from&nbsp;
                    <ReactTextTransition
                        text={startId}
                        springConfig={{ tension: 300, friction: 10 }}
                    />&nbsp;to&nbsp;
                    <ReactTextTransition
                        text={endId}
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
    const [gameLen, setGameLen] = useState<number>(0);
    const { startId, endId } = useAtomValue(startEndAtom);
    const setStartEnd = useUpdateAtom(startEndAtom);

    const { endGameIdAry, ongoingGameIdAry } = useAtomValue(gameIdAtom);
    const setGameId = useUpdateAtom(gameIdAtom);

    const fromUIEndGameID = useAtomValue(fromUIEndGameIDAtom);
    const fromUINewGameID = useAtomValue(fromUINewGameIDAtom);

    const fetchPeriosMs = useRef(0);

    async function fetchGame(sid: number, eid: number) {
        if (ooxxnft != null && sid <= eid) {
            let tEndGameIdAry = [...endGameIdAry];
            let tOngoingIdAry = [...ongoingGameIdAry];

            let ongoingUpdate = false;

            if (fromUIEndGameID > 0 && !tEndGameIdAry.includes(fromUIEndGameID)) {
                tEndGameIdAry.push(fromUIEndGameID);
            }

            if (fromUINewGameID > 0 && !tOngoingIdAry.includes(fromUINewGameID)) {
                tOngoingIdAry.push(fromUINewGameID);
                ongoingUpdate = true;
            }

            try {
                for (let i = eid; i >= sid; i--) {
                    let isEnd = await ooxxnft?.getIsEnd(i);
                    if (isEnd) {
                        if (!tEndGameIdAry.includes(i)) {
                            tEndGameIdAry.push(i);
                        }
                        if (tOngoingIdAry.includes(i)) {
                            tOngoingIdAry = tOngoingIdAry.filter(x => x !== i);
                            ongoingUpdate = true;
                        }
                    } else {
                        if (!tOngoingIdAry.includes(i)) {
                            tOngoingIdAry.push(i);
                            ongoingUpdate = true;
                        }
                    }

                }
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

            } catch (error) {
                console.log("fetchGame error:", error);
            }
        }
    }

    async function runUpdate() {
        if (gameLen <= 0) return;

        let fetchStartId: number;
        let fetchEndId: number;

        if (endId == 0) {
            fetchEndId = gameLen - 1;
            fetchPeriosMs.current = FetchPeriosMsSlow;
        } else if (endGameIdAry.length < MaxFetch && startId > 0) {
            fetchEndId = startId - 1;
            fetchPeriosMs.current = FetchPeriosMsSlow;
        } else {
            fetchEndId = gameLen - 1;
            fetchPeriosMs.current = 0;
        }
        fetchStartId = (fetchEndId - FetchPeriodId) >= 0 ? (fetchEndId - FetchPeriodId) : 0;


        await fetchGame(fetchStartId, fetchEndId);

        setStartEnd({
            startId: (fetchStartId < startId) ? fetchStartId : startId,
            endId: (fetchEndId > endId) ? fetchEndId : endId
        })
    }

    useEffect(() => {
        const fetchGameLen = async () => {
            if (ooxxnft != null) {
                let lenBig = await ooxxnft?.gameLen()
                setGameLen(lenBig.toNumber());
            }
        };
        fetchGameLen();
    }, [ooxxnft, block]);


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
    }, [gameLen, startId]);

    return { endGameIdAry, ongoingGameIdAry };
}
