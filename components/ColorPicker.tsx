// refer: 
//  1. https://codesandbox.io/s/bekry?file=/src/SwatchesPicker.js
//  2. https://codesandbox.io/s/react-colorful-demo-u5vwp

import React from "react";
import { HexColorPicker } from "react-colorful";
import styles from "@styles/components/ColorPicker.module.scss";
import { atom, useAtom } from 'jotai'


const DefaultColor = '#ffffff';
const colorPickerAtom = atom(DefaultColor);


export const ColorPicker = (props: any) => {
    const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#8d2808"];
    const [color, setColor] = useAtom(colorPickerAtom)
    const color0x = '0x' + color.substring(1);
    const colorInt = parseInt(color0x);
    props.onChange(colorInt);

    return (
        <div id="ColorPicker" >
            <div className={styles.picker}>
                <HexColorPicker color={color} onChange={setColor} />

                <div className={styles.picker__swatches}>
                    <button
                        key={DefaultColor}
                        className={styles.picker__swatch}
                        style={{ background: DefaultColor }}
                        onClick={() => setColor(DefaultColor)}
                    /> <h3 className="text-black-600"> default color</h3>
                    {presetColors.map((presetColor) => (
                        <button
                            key={presetColor}
                            className={styles.picker__swatch}
                            style={{ background: presetColor }}
                            onClick={() => setColor(presetColor)}
                        />
                    ))}
                </div>

            </div>
            <div className={styles.picker__value} style={{ borderLeftColor: color }}>
                {color} {color == "#ffffff" ? "(default color)" : ""}
            </div>
        </div >
    );
};
