// Imports
import Layout from "@components/Layout"; // Layout wrapper
import GameCardPanel from "@components/GameCardPanel";

import { ReactElement } from "react";
import { useGameIdAry, GameIdFromToInfo } from 'hooks/useGameIdAry';

export default function EndGames(): ReactElement {

  const { endGameIdAry } = useGameIdAry();

  return (
    <Layout>

      <div id="end_games" className="bg-black  sm:py-5 pb-40 ">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center ">
            <h1 className="text-center mt-4 capitalize">End Games</h1>
            <GameIdFromToInfo />
          </div>
          <GameCardPanel tokenIdAry={endGameIdAry} canPlay={false} showTokenId={-1} />
        </div>

      </div>

    </Layout>
  );
}
