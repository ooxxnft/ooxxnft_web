// Imports
import { GameCard } from "@components/GameCard";
import { OverlayPhoto } from "@components/OverlayPhoto";

// Types
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

type GameCardPanelProps = {
  tokenIdAry: number[];
  canPlay: boolean;         // end game cannot play
  showTokenId: number
};

export default function GameCardPanel(props: GameCardPanelProps) {
  const [selectedTokenId, setSelectedTokenId] = useState(-1);
  const [showOverlayPhoto, setShowOverlayPhoto] = useState(false);
  const [showOverlayPhotoSVG, setShowOverlayPhotoSVG] = useState('');
  const [endGameId, setEndGameId] = useState(-1);

  const cardRef = useRef(null);

  useOnClickOutside(cardRef, () => {
    setSelectedTokenId(-1);
  });


  function onCardSelect(index: number, cardSVG: string, selectedTokenId: number) {
    setShowOverlayPhoto(true);
    setShowOverlayPhotoSVG(cardSVG);
    setSelectedTokenId(selectedTokenId);
  }

  useEffect(() => {
    if (props.showTokenId >= 0) {
      setSelectedTokenId(props.showTokenId);
      setShowOverlayPhoto(true);
    }

  }, [props.showTokenId >= 0]);

  return (
    <div id="game-card-panel">

      <div className="my-10 sm:my-20">
        <div className="flex flex-wrap justify-center">
          {
            props.tokenIdAry.map((tokenId, i) => {
              if (tokenId != endGameId) {
                return (
                  <GameCard
                    key={tokenId}
                    tokenId={tokenId}
                    selected={selectedTokenId === i}
                    cardClick={(cardSVG: string) => onCardSelect(i, cardSVG, tokenId)}
                  />);
              }
            })}
        </div>
      </div>

      <OverlayPhoto
        id="gameCardPanel-OverlayPhoto"
        show={showOverlayPhoto}
        handleClose={() => {
          setShowOverlayPhoto(false);
          setShowOverlayPhotoSVG('');
        }}
        handleEndGame={(iEndGameID: number) => {
          setEndGameId(iEndGameID);
        }}
        tokenId={selectedTokenId}
        cardSVG={showOverlayPhotoSVG}
        description=""
        canPlay={props.canPlay}
        isNewGame={false} />

    </div>
  );
}
