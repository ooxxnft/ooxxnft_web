// Imports
import Layout from "@components/Layout"; // Layout wrapper
import GameCardPanel from "@components/GameCardPanel";
import { ReactElement, useState } from "react";
import { NewGameSVG } from '@utils/overlayPhoto'
import { OverlayPhoto } from "@components/OverlayPhoto";
import { useGameIdAry, GameIdFromToInfo, fromUINewGameIDAtom } from 'hooks/useGameIdAry';
import { useUpdateAtom } from 'jotai/utils'

export default function Ongoing(): ReactElement {

  const [newTokenId, setNewTokenId] = useState<number>(-1);
  const [showOverlayNewGame, setShowOverlayNewGame] = useState(false);
  const { ongoingGameIdAry } = useGameIdAry();

  const setFromUINewGameID = useUpdateAtom(fromUINewGameIDAtom);

  let useShowIdAry = (newTokenId > 0 && !ongoingGameIdAry.includes(newTokenId)) ?
    [newTokenId, ...ongoingGameIdAry] : ongoingGameIdAry;


  function onNewGameCreate(iNewTokenId: number) {
    setShowOverlayNewGame(false);
    setNewTokenId(iNewTokenId);
    setFromUINewGameID(iNewTokenId);
  }


  return (
    <Layout>

      <div id="ongoin_games" className="bg-black  sm:py-5 pb-40 ">

        <div className="container mx-auto">

          <h1 className="text-center capitalize">Ongoing Games</h1>

          <div className="flex justify-around mt-10">
            <button onClick={() => { setShowOverlayNewGame(true) }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              New Game
            </button>
          </div>
          <div className="mt-10">
            <GameIdFromToInfo />
          </div>

          <GameCardPanel tokenIdAry={useShowIdAry} canPlay={true} showTokenId={-1} />
          {showOverlayNewGame ? (
            <OverlayPhoto
              id="newGameOverlayPhoto"
              show={showOverlayNewGame}
              handleClose={() => setShowOverlayNewGame(false)}
              cardSVG={NewGameSVG}
              canPlay={true}
              isNewGame={true}
              handleNewGameCreate={onNewGameCreate} />
          ) : ''}
        </div>
      </div>

    </Layout>
  );
}
