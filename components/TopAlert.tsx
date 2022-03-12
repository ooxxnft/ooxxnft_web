
import { atom, useAtom } from 'jotai'
import { useUpdateAtom, useAtomValue } from 'jotai/utils'
import { useCallback, useEffect } from 'react'

const HidenAfeterMs = 10 * 1000;
const SHOWCSS = '';
const HIDECSS = 'hidden';
const topAlertShow = atom(HIDECSS);
const topAlertMsg = atom('');
const topAlertColor = atom('red');

export function useTopAlert() {
    const setShow = useUpdateAtom(topAlertShow);
    const setMsg = useUpdateAtom(topAlertMsg);
    const setColor = useUpdateAtom(topAlertColor);
    const showTopAlert = useCallback(function () {
        setShow(SHOWCSS);
    }, [])

    const setTopAlertMsg = useCallback(function (msg: string, color: string) {
        setMsg(msg);
        setColor(color);
    }, [])

    const setAndShowTopAlert = useCallback(function (msg: string, color: string) {
        if (msg == "") {
            setShow(HIDECSS);
        } else {
            setMsg(msg);
            setColor(color);
            setShow(SHOWCSS);
        }

    }, [])



    return { showTopAlert, setTopAlertMsg, setAndShowTopAlert }
}


export function TopAlert() {
    const [show, setShow] = useAtom(topAlertShow)
    const msg = useAtomValue(topAlertMsg)
    const color = useAtomValue(topAlertColor)


    useEffect(() => {
        let timer1 = setTimeout(() => setShow(HIDECSS), HidenAfeterMs);
        return () => {
            clearTimeout(timer1);
        };
    }, [show]);
    const bgColor = `bg-${color}-100 z-50 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative`
    return (
        // refer: https://v1.tailwindcss.com/components/alerts
        <div id="topAlert" className={show}>
            <div className={bgColor} role="alert">
                {/* <strong className="font-bold">Holy smokes!</strong> */}
                <span className="block sm:inline">{msg}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setShow(HIDECSS) }}>
                    <svg className={`fill-current h-6 w-6 text-${color}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
        </div>
    )
}