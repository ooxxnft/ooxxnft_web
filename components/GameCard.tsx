import useTokenURI from 'hooks/useTokenURI';

type CardProps = {
  tokenId: number;
  selected?: boolean;
  cardClick?: (svg: string) => void;
};

export function GameCard(props: CardProps) {
  const { tokenId, cardClick } = props;

  const cardSVG = useTokenURI(tokenId);
  return (
    <div >
      {cardSVG == undefined || cardSVG == "" ? null : cardSVG ? (
        <div id={"gameCard" + tokenId} className="flex flex-col transform hover:-translate-y-2 hover:border-gray-600  duration-150" >
          <h2 className="text-center">#{tokenId}</h2>
          <div onClick={() => cardClick?.(cardSVG)}
            className="game-card px-20 "
            dangerouslySetInnerHTML={{ __html: cardSVG }}
          />
        </div>
      ) : null
      } </div>
  );
}
