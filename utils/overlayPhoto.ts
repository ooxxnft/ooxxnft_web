
export const SVG_W = 440;
export const SVG_H = 660;
export const NewGameSVG = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 420 660"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><line x1="140" y1="0" x2="140" y2="420" stroke="white" stroke-width="3" /><line x1="280" y1="0" x2="280" y2="420" stroke="white" stroke-width="3" /><line x1="0" y1="140" x2="420" y2="140" stroke="white" stroke-width="3" /><line x1="0" y1="280" x2="420" y2="280" stroke="white" stroke-width="3" /></svg>`;

export function getSharpIdx(x: number, y: number) {
    // console.log(`getSharpIdx() x:${x}, y: ${y}`);
    let yInd = (y < (130 / 660)) ? 0 :
        (y > (150 / 660) && y < (270 / 660)) ? 1 :
            (y > (290 / 660) && y < (410 / 660)) ? 2 : -1;

    if (yInd < 0) {
        return -1;
    }
    let xInd = (x < (130 / 420)) ? 0 :
        (x > (150 / 420) && x < (270 / 420)) ? 1 :
            (x > (290 / 420) && x < (420 / 420)) ? 2 : -1;

    if (xInd < 0) {
        return -1;
    }
    return xInd + yInd * 3;

}


function decimalToHex(d: number) {
    var hex = Number(d).toString(16);
    hex = "000000".substr(0, 6 - hex.length) + hex;
    return hex;
}




export function xmlDrawO(xmlDoc: any, space: number, color: number) {
    // console.log("xmlDrawO:, space:", space);
    const x = (space % 3) * 140 + 70;
    const y = Math.floor(space / 3) * 140 + 70;

    let o = xmlDoc.createElementNS(xmlDoc.documentElement.namespaceURI, "circle");
    o.setAttribute('cx', x);
    o.setAttribute('cy', y);
    o.setAttribute('r', '50');
    o.setAttribute("stroke", "#" + decimalToHex(color));
    o.setAttribute("stroke-width", "3");
    o.setAttribute("fill", "none");

    xmlDoc.childNodes[0].insertBefore(o, xmlDoc.childNodes[0].childNodes[3]);
}

export function xmlDrawX(xmlDoc: any, space: number, color: number) {
    const x = (space % 3) * 140 + 20;
    const y = Math.floor(space / 3) * 140 + 20;

    // console.log("xmlDrawO:, space:", space);
    // console.log(`x=${x}, y=${y}`);
    // '\' of 'X' 
    let l1 = xmlDoc.createElementNS(xmlDoc.documentElement.namespaceURI, "line");
    l1.setAttribute('x1', x);
    l1.setAttribute('y1', y);
    l1.setAttribute('x2', x + 100);
    l1.setAttribute('y2', y + 100);
    l1.setAttribute("stroke", "#" + decimalToHex(color));
    l1.setAttribute("stroke-width", "3");

    // '/' of 'X'
    let l2 = xmlDoc.createElementNS(xmlDoc.documentElement.namespaceURI, "line");
    l2.setAttribute('x1', x + 100);
    l2.setAttribute('y1', y);
    l2.setAttribute('x2', x);
    l2.setAttribute('y2', y + 100);
    l2.setAttribute("stroke", "#" + decimalToHex(color));
    l2.setAttribute("stroke-width", "3");


    xmlDoc.childNodes[0].insertBefore(l1, xmlDoc.childNodes[0].childNodes[3]);
    xmlDoc.childNodes[0].insertBefore(l2, xmlDoc.childNodes[0].childNodes[3]);

}

function getBoolean(_packedBools: number, _boolNumber: number) {
    const flag = (_packedBools >> _boolNumber) & (1);
    return (flag == 1 ? true : false);
}

export function getSpaceOXChar(marksO: number, marksX: number, space: number) {
    const o = getBoolean(marksO, space);
    if (o) {
        return 'O';
    }
    const x = getBoolean(marksX, space);
    if (x) {
        return 'X';
    }

    return null;

}