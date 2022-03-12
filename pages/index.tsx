// Imports
import Layout from "@components/Layout"; // Layout wrapper
import Opensea from "../img/opensea.svg"
import Twitter from "../img/twitter.svg";
import Discord from "../img/discord.svg";
import styles from "@styles/pages/Home.module.scss"; // Styles
import Router from 'next/router';

// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
      <div className="mx-auto px-2 sm:px-4 text-center py-6 sm:py-10 justify-around flex flex-wrap bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="sm:px-4">
            <h1>OOXX NFT</h1>

            <p className="my-4 text-xl sm:text-2xl text-gray-500 italic">This project is inspired and forked from <a href="https://www.lootproject.com/" target="_blank" >Lootproject</a>, thanks dom and community. </p>
            <p className="my-4 text-xl sm:text-2xl text-gray-300">OOXX NFT is a meme NFT game. Play tic-tac-toe to earn lots of NFTs as you want. Scarcity will be shown if you play more.</p>

            <div>
              <div className="flex py-8 w-full justify-center space-x-6">
                <a
                  href="https://opensea.io/collection/ooxxnft"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Opensea className=" hover:text-gray-200  w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://twitter.com/ooxxnft"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Twitter className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://discord.gg/XRUzMXqzaN"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Discord className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
              </div>
            </div>
            <div className="flex justify-around mb-10">
              <button type="button" onClick={() => Router.push('/ongoing')} className="text-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Play
              </button>
            </div>
            <div className={styles.home__ul}>
              <li>F**king whitelist, we don't have whitelist!</li>
              <li>All play is FREE! (only gas)</li>
              <li>I don't know the mokey's value, like you don't know this meme project value.</li>
              <li>Gas optimization</li>
              <li>Really decentralized app, all picture data saved on chain!</li>
              <li>Token? You like, I like.</li>
              <li>More... Join discord and leave comments!</li>
            </div>

          </div>
        </div>
      </div >


    </Layout >
  );
}
