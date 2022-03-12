import React from 'react';
import ReactLoading from 'react-loading';
import { atom } from 'jotai'
import { useUpdateAtom, useAtomValue } from 'jotai/utils'
import { useCallback } from 'react'

const loadingbarShow = atom(false);

export function useLoadingBar() {
    const setShow = useUpdateAtom(loadingbarShow);
    const showLoadingBar = useCallback(function () {
        setShow(true);
    }, []);

    const hideLoadingBar = useCallback(function () {
        setShow(false);
    }, [])



    return { showLoadingBar, hideLoadingBar }
}

export function LoadingBar() {
    const isShow = useAtomValue(loadingbarShow)
    if (!isShow) return null;

    // const cavansDivClass = `${styles.overlay_photo} w-full grow   md:w-1/2 lg: w-1/3 `;

    return (
        // <div id="loading_overlay" className="absolute  flex z-10  top-0 left-0 right-0 bottom-0  bg-stone-200/50 cursor-wait ">
        <div id="loading_overlay" className="w-full h-full fixed z-40  top-0 -10 left-0 mb-10 bg-gray-800 opacity-90">
            <div className="w-full h-full flex flex-col  justify-center items-center">
                <h3 className="mb-12">Waiting transaction ...</h3>
                <ReactLoading type={"bars"} color={"#fff"} height={'20%'} width={'20%'} />

            </div>

        </div>

    );
};