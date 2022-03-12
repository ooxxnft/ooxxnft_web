import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from "@styles/components/OverlayPhoto.module.css"; // Styles
import { Canvas } from "@components/Canvas"; // Layout wrapper
import { useWalletContext } from 'hooks/useWalletContext';
import { useOOXXNFTContract } from "../hooks/useContract";
import { BigNumber } from '@ethersproject/bignumber'
import { fetchTokenURI } from 'hooks/useTokenURI';
import { useTopAlert } from './TopAlert'
import { useLoadingBar } from './LoadingBar'
import {
    getSharpIdx, xmlDrawO, xmlDrawX,
    getSpaceOXChar, SVG_W, SVG_H
} from '@utils/overlayPhoto'
import { ColorPicker } from './ColorPicker';
import { ToggleSwitch } from './ToggleSwitch';
import { GasLimitOverrideOptions, OpenSeaUnitPage } from 'types/constants'
import Opensea from "../img/opensea.svg"
import { useUpdateAtom } from 'jotai/utils'
import { fromUIEndGameIDAtom } from 'hooks/useGameIdAry';


export function OverlayPhoto(props: any) {
    if (!props.show) return null;
    const ooxxnft = useOOXXNFTContract(true);
    const { account } = useWalletContext();
    const [svg, setSVG] = useState<string>();
    const premark = useRef<boolean>(false);
    const [newGameOX, setNewGameOX] = useState(!premark.current);
    const game = useRef<any | null>(null);
    const colorRef = useRef<number>(0xffffff);
    const svgRef = useRef<string>('');
    const previewClickSpace = useRef<number>(-1);
    const { setAndShowTopAlert } = useTopAlert();
    const { showLoadingBar, hideLoadingBar } = useLoadingBar();
    const [preview, setPreview] = useState(window.innerWidth > 640);
    const [owner, setOwner] = useState('');
    const setFromUIEndGameID = useUpdateAtom(fromUIEndGameIDAtom);
    const canPlay = useRef<boolean>(props.canPlay);

    const previewRef = useRef<boolean>(window.innerWidth > 640);
    const nowDrawContext = useRef<any>(null);

    useEffect(() => {
        if (props.tokenId >= 0) {
            const fetchGame = async () => {
                if (ooxxnft != null) {
                    let g = await ooxxnft?.getGame(props.tokenId);
                    // console.log(`tokenId(${props.tokenId}), setPremark(${pm})`);
                    game.current = g;
                    premark.current = g[3];
                }
            };
            fetchGame();
        }


    }, [ooxxnft, props.tokenId, svg]);

    useEffect(() => {
        const fetchTokenURIAsync = async () => {
            const _svg = await fetchTokenURI(ooxxnft, props.tokenId);
            setSVG(_svg);
        };
        if (props.cardSVG != '') {
            setSVG(props.cardSVG);

        } else {
            fetchTokenURIAsync();
        }

    }, [props.cardSVG]);


    useEffect(() => {
        if (!canPlay.current) {
            const fetchOwner = async () => {
                if (ooxxnft != null) {
                    const ownerAdr = await ooxxnft?.ownerOf(props.tokenId);
                    // console.log(`tokenId(${props.tokenId}), setPremark(${pm})`);
                    setOwner(ownerAdr);
                }
            };
            fetchOwner();
        }

    }, [canPlay.current]);

    useEffect(() => {
        let mSVG = svg ? svg : props.cardSVG;
        svgRef.current = mSVG;

    }, [props.cardSVG, svg]);


    const newDraw = (drawSvg: string) => {
        let img = new Image();
        // console.log("in newDraw, drawSvg:" + drawSvg);

        img.onload = function () {
            const ctx = nowDrawContext.current;
            ctx.drawImage(img, 0, 0, SVG_W, SVG_H);
        }
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(drawSvg);

    }

    const draw = (context: any) => {
        nowDrawContext.current = context;

        let useSVG = svg ? svg : props.cardSVG;
        if (useSVG == '') {
            return null;
        }
        // console.log('ususeSVG: ', useSVG);
        newDraw(useSVG);
    };



    const playWithAsync = useCallback(async (sharpIdx: number) => {

        if (ooxxnft != null && sharpIdx >= 0) {
            const tokenIdBig = BigNumber.from(props.tokenId);
            const spaceBig = BigNumber.from(sharpIdx);
            // console.log(`request play! tokenId(${props.tokenId}) space[${sharpIdx}], premark(${premark}, mark(${!premark})`);
            showLoadingBar();
            try {
                let playTrans = await ooxxnft?.play(tokenIdBig, spaceBig, !premark.current, colorRef.current, GasLimitOverrideOptions);
                let playResult = await playTrans.wait();
                if (playResult.status == 1) {
                    if (playResult.events != undefined) {
                        // const gameId = playResult.events[0].args?.gameID.toNumber();
                        playResult.events.map((event) => {
                            const info = event.args?.info;
                            const gameId = event.args?.gameID?.toNumber();
                            if (gameId == props.tokenId && info == "end") {
                                setFromUIEndGameID(gameId);
                                props.handleEndGame(gameId);
                                canPlay.current = false;
                            }
                        });
                    };
                    let _svg = await fetchTokenURI(ooxxnft, props.tokenId);
                    premark.current = !premark.current;
                    previewClickSpace.current = -1;
                    setSVG(_svg);
                    newDraw(_svg);
                }

            } catch (error: any) {
                setAndShowTopAlert(`Transaction with blockchain fail: ${error?.message}`, 'red');
                console.error(`Transaction with blockchain fail: ${error?.message}`);
            }
            hideLoadingBar();
        }
    }, []);


    const newWithAsync = useCallback(async (sharpIdx: number) => {
        if (ooxxnft != null) {
            const spaceBig = BigNumber.from(sharpIdx);
            try {
                showLoadingBar();
                const playTrans = await ooxxnft?.newGame(spaceBig, !premark.current, colorRef.current, GasLimitOverrideOptions);
                const playResult = await playTrans.wait();
                if (playResult !== undefined && playResult.status == 1) {
                    if (playResult.events != undefined) {
                        const newGameId = playResult.events[0].args?.gameID.toNumber();
                        props.handleNewGameCreate(newGameId);
                        setAndShowTopAlert(`Game '#${newGameId}' Created!`, 'green');
                    };

                }
            } catch (error: any) {
                setAndShowTopAlert(`Transaction with blockchain fail: ${error.message}`, 'red');
                console.error(`Transaction with blockchain fail: ${error.message}`);

            }
            hideLoadingBar();
        }
    }, []);

    const previewDraw = useCallback((space: number) => {
        if (!previewRef.current) {
            return;
        }
        const parser = new DOMParser();
        let xmlDoc = parser.parseFromString(svgRef.current, "image/svg+xml");

        if (premark.current) {
            xmlDrawX(xmlDoc, space, colorRef.current);
        } else {
            xmlDrawO(xmlDoc, space, colorRef.current);
        }
        previewClickSpace.current = space;
        // console.log("update previewClickSpace.current with ", space);
        const previewSVG = new XMLSerializer().serializeToString(xmlDoc.documentElement);

        newDraw(previewSVG);

    }, []);

    // const canvasClick = (x: number, y: number) => {
    const canvasClick = useCallback((x: number, y: number) => {
        if (!canPlay.current) return;
        // console.log(`in drawClick, x = ${x}, y = ${y}, account = ${account}, premark.current = ${premark.current} `);
        if (account === undefined || account == null || account == '') {
            setAndShowTopAlert('Please Connect Polygon Wallet!', 'red');
            return;
        }
        if (premark.current === undefined || premark.current === null) {
            console.log(`premark not ready`);
            return;
        }
        let sharpIdx = getSharpIdx(x, y);
        if (sharpIdx < 0) {
            return;
        }

        if (!props.isNewGame) {
            if (game.current === undefined || game.current == null) {
                console.log(`game not ready`);
                return;
            }
            const spaceChar = getSpaceOXChar(game.current[1], game.current[2], sharpIdx);
            if (spaceChar != null) {
                console.log(`space(${sharpIdx}) had taken with ${spaceChar} `);
                return;
            }
        }


        if (previewRef.current) {
            previewDraw(sharpIdx);
            return;
        }


        if (props.isNewGame) {
            newWithAsync(sharpIdx);
        } else {
            playWithAsync(sharpIdx);
        }

    }, []);

    const setColor = (colorInt: number) => {
        colorRef.current = colorInt;
        if (previewClickSpace.current >= 0 && previewRef.current) {
            previewDraw(previewClickSpace.current);
        }
    }


    const onPreviewChange = (checked: boolean) => {
        console.log("preview checked: " + checked);
        setPreview(checked);
        previewRef.current = checked;
        newDraw(svgRef.current);
    }

    const onOXChange = (checked: boolean) => {
        console.log("onOXChange checked: " + checked);
        // newDraw(svgRef.current);
        premark.current = !checked;
        setNewGameOX(checked);
    }

    const cavansDivClass = `${styles.overlay_photo} w-full grow   md:w-1/2 lg: w-1/3 `;

    const title = props.isNewGame ? 'New Game' : `#${props.tokenId} `;
    return (

        <div className="w-full h-full fixed z-20  top-0 -10 left-0 mb-10 bg-gray-800 opacity-95">
            <div className="flex  items-stretch mt-2">
                <h2 className="text-center w-full ">&nbsp;&nbsp;{title}</h2>
                <h2 className="text-right cursor-pointer mr-5" onClick={props.handleClose}>&times;</h2>
            </div>
            {owner != '' ?
                <div className="text-center text-zinc-400 text-sm md:text-2xl lg:text-3l">
                    Owner: {owner}
                </div>
                : ''}

            {/* <div className={styles.overlay_photo} dangerouslySetInnerHTML={{ __html: props.cardSVG }} /> */}
            {/* <canvas ref={canvas} height={svgH} width={svgW} /> */}
            <div className="flex items-start">
                <div className="hidden lg:block w-1/3 " />
                <div className={cavansDivClass}>
                    <Canvas draw={draw} height={SVG_H} width={SVG_W} canvasClick={canvasClick} premark={premark} />
                </div>
                {canPlay.current ? (
                    <div className="hidden md:block w-1/2 flex flex-col justify-center content-center align-center lg:w-1/3">
                        <ColorPicker onChange={setColor} />
                        {props.isNewGame ? (
                            <div className="my-5 justify-center content-center align-center" >
                                <ToggleSwitch id="toggle-ox" disabled={false} name="toggle-ox" small={false} optionLabels={["O", "X"]} checked={newGameOX} onChange={onOXChange} />
                            </div>
                        ) : ''}
                        <div className="my-5 justify-center content-center align-center" >
                            <ToggleSwitch id="toggle-preview" disabled={false} name="toggle-preview" small={false} optionLabels={["preview", "send"]} checked={preview} onChange={onPreviewChange} />
                        </div>
                        {preview ? (
                            <button onClick={() => {
                                if (props.isNewGame) {
                                    newWithAsync(previewClickSpace.current)
                                } else {
                                    playWithAsync(previewClickSpace.current)
                                }
                            }}
                                className="w-1/2 ml-7 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Send
                            </button>
                        ) : ''}
                    </div>
                ) :
                    // !canPlay.current <div className="hidden lg:block w-1/3" />
                    <div className="hidden lg:block w-1/3 flex flex-col py-8  align-middle h-screen" >
                        <a
                            href={OpenSeaUnitPage(props.tokenId)}
                            className=" bg-black border-gray-300 hover:bg-gray-600 rounded-xl p-6 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            target="_blank"
                        >
                            <Opensea className=" fill-current w-24 h-24" />
                        </a>
                    </div>}
            </div>
        </div>

    );
};

