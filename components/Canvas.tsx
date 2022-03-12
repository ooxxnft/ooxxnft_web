import React, { useRef, useEffect } from 'react';

export function Canvas(props: any) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const context = canvasRef.current.getContext('2d');
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mouseup', (e: MouseEvent) => {
            e.stopImmediatePropagation();
            var rect = canvas.getBoundingClientRect();
            // console.log(`canvas.width=${canvas.width}, canvas.width=${canvas.height}`);
            const xRatio = (e.clientX - rect.left) / rect.width;
            const yRatio = (e.clientY - rect.top) / rect.height;

            props.canvasClick(xRatio, yRatio);
        });

        props.draw(context);
        return () => {
            canvas.removeEventListener('mouseup', props.canvasClick);
        };
    }, [props.canvasClick]);


    return (
        <canvas className="w-4/5  xl:w-3/5" ref={canvasRef} height={props.height} width={props.width} />
    );
};
