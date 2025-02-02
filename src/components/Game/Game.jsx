import React, {useState} from 'react';
import Board from "../Board.jsx";

const Game = () => {
    const initialMap = [...new Array(8)]
        .map(() => [...new Array(8)].map(() => (0)))

    // initialMap.forEach(row => console.log(row));


    const [map, setMap] = useState(initialMap)

    const I = {
        bloco: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    };

    const O = {
        bloco: [
            [1, 1],
            [1, 1]
        ]
    };

    const T = {
        bloco: [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ]
    };

    const J = {
        bloco: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ]
    };

    const L = {
        bloco: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ]
    };

    const S = {
        bloco: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ]
    };

    const Z = {
        bloco: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ]
    };

    const renderShape = (shape, startX, startY) => {
        let inMap = map.slice()
        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape[i].length; j++) {
                if (startX + i < inMap.length && startY + j < inMap[0].length) {
                    inMap[startX + i][startY + j] = shape[i][j];
                }
            }
        }
        setMap(inMap);
        console.log('Changed shape: ', map)
    }


    return (
        <>
            <Board map={map} renderShape={renderShape} />
            <button onClick={() => renderShape(Z.bloco, 1, 1)}>Shape</button>
        </>
    );
};

export default Game;