// Imports
import { default as HTMLHead } from "next/head"; // Meta
import React, { ReactElement } from 'react';

export function Head(): ReactElement {
    return (
        <HTMLHead>
            {/* Primary Meta Tags */}
            <title>OOXX NFT</title>
            <meta name="title" content="OOXX NFT" />
            <meta
                name="description"
                content="OOXXNFT is a meme NFT game and data stored on chain. Play tic-tac-toe to earn lots of NFT!"
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.ooxxnft.com/" />
            <meta property="og:title" content="OOXXNFT" />
            <meta
                property="og:description"
                content="OOXXNFT is a meme NFT game and data stored on chain."
            />
            <meta property="og:image" content="https://ooxxnft.com/meta.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.ooxxnft.com/" />
            <meta property="twitter:title" content="OOXXNFT" />
            <meta
                property="twitter:description"
                content="OOXXNFT is a meme NFT game and data stored on chain. Play tic-tac-toe to earn lots of NFT!"
            />
            <meta property="twitter:image" content="https://ooxxnft.com/meta.png" />


        </HTMLHead>
    );
}