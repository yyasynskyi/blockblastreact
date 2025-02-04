import React, {useState} from 'react';
import Board from "../Board/Board.jsx";

const Game = () => {
    const initialMap = [...new Array(8)]
        .map(() => [...new Array(8)].map(() => ({fill: 0, preview: 0})))

    const [map, setMap] = useState(initialMap)
    const [upcomingShapes, setUpcomingShapes] = useState([])
    const [chosenShape, setChosenShape] = useState(null)

    const shapes = {
        I: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        O: [
            [1, 1],
            [1, 1]
        ],
        T: [
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
        Z: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ]
    }

    const getRandomShape = () => {
        const keys = Object.keys(shapes);
        return shapes[keys[keys.length * Math.random() << 0]];
    }

    const generateUpcomingShapes = () => {
        if (upcomingShapes.length === 0) setUpcomingShapes(Array.from({length: 3}, () => getRandomShape()))
    }

    //Clears map from rendered preview shape
    const clearPreview = (board) => {
        board.map((row) => {
            row.map((cell) => cell.preview && (cell.preview = 0));
        })
        return board
    }

    // [
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0]
    // ]
    // [
    //     [0, 0, 0],
    //     [1, 1, 1],
    //     [0, 1, 0]
    // ]

    // Renders shape as well as preview
    const renderShape = (shape, startX, startY, preview = false) => {
        let inMap = map.slice()
        inMap = clearPreview(inMap);

        if (shape) {
            for (let y = 0; y < shape.length; y++) {
                if (!shape[y].some(cell => cell !== 0)) {
                    startY -= 1;
                    continue
                }

                for (let x = 0; x < shape.length; x++) {
                    if (startY + y < inMap.length && startX + x < inMap[0].length) {
                        preview ? inMap[startY + y][startX + x].preview = shape[y][x] : inMap[startY + y][startX + x].fill = shape[y][x]
                    }
                }
            }
            setMap(inMap);
        }
    }

    const getMouseElement = (e) => {
        console.log(chosenShape)
        const x = e.clientX, y = e.clientY,
            el = document.elementFromPoint(x, y);

        if (el.getAttribute('data-x')) {
            renderShape(upcomingShapes[chosenShape], parseInt(el.getAttribute('data-x')), parseInt(el.getAttribute('data-y')), true)
        }
    }

    const placePreviewedShape = () => {
        generateUpcomingShapes()
        setMap(prevMap =>
            prevMap.map(row =>
                row.map(cell => ({
                    fill: cell.preview ? cell.preview : cell.fill, // Convert preview to fill
                    preview: 0 // Clear preview
                }))
            )
        );
    };

    const chooseShape = (e) => {
        console.log(e.target.getAttribute('data-index'));
        let index = e.target.getAttribute('data-index')
        setChosenShape(index)
    }

    generateUpcomingShapes()

    return (
        <>
            <Board map={map} renderShape={renderShape}
                   getMouseElement={getMouseElement} placePreviewedShape={placePreviewedShape}
                   getRandomShape={getRandomShape} upcomingShapes={upcomingShapes} chooseShape={chooseShape} />
        </>
    );
};

export default Game;