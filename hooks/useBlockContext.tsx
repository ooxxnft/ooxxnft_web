import React, { useState, useEffect, createContext, useContext } from 'react';
import { useWalletContext } from 'hooks/useWalletContext';

interface BlockProviderProps {
    children: React.ReactNode;
}

const BlockContext = createContext<{
    block: number;
}>({ block: 0 });


const BlockProvider = (props: BlockProviderProps) => {
    const block = useBlock();
    return (
        <BlockContext.Provider value={block} >
            {props.children}
        </BlockContext.Provider>
    );
};


const useBlock = () => {
    const { provider } = useWalletContext();
    const [block, setBlock] = useState(0);


    useEffect(() => {
        // listen for changes on an Ethereum address
        console.log(`listening for blocks...`);
        provider?.on('block', (block) => {
            console.log('onblock -> ' + block);

            setBlock(block);
        })
        // remove listener when the component is unmounted
        return () => {
            provider?.removeAllListeners('block')
        }
        // trigger the effect only on component mount
    }, [provider]);


    return {
        block
    }
};

const useBlockNumber = () => {
    const { block } = useContext(BlockContext);
    return block;
};



export { BlockContext, BlockProvider, useBlockNumber };

