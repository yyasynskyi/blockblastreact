import React, {useState} from 'react';
import Board from "../Board.jsx";

const Game = () => {
    const initialMap = [...new Array(8)]
        .map(() => [...new Array(8)].map(() => (0)))

    // initialMap.forEach(row => console.log(row));


    const [map, setMap] = useState(initialMap)
    const shapes = {
        I: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        O:  [
            [1, 1],
            [1, 1]
        ],
        T:  [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        J: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        L: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        S: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        Z:  [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ]
    }

    const getRandomShape = () => {
        const keys = Object.keys(shapes);
        return shapes[keys[ keys.length * Math.random() << 0]];
    }

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
            <button onClick={() => renderShape(getRandomShape(), 1, 1)}>Shape</button>
        </>
    );
};

export default Game;