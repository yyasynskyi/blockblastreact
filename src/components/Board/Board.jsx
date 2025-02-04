import React from 'react';
import './Board.scss';
import UpcomingShapes from "../UpcomingShapes/UpcomingShapes.jsx";

const Board = ({map, placePreviewedShape, upcomingShapes, chooseShape, getMouseElement}) => {
    return (
        <>
            <div className={'board'} onClick={() => placePreviewedShape()} onMouseOver={(e) => getMouseElement(e)}>
                {map.map((row, i) =>
                    (<div className={"row"} key={i}>
                        {row.map((cell, j) => {
                            // console.log(bool, i)
                            if (cell.preview) {
                                return <div data-x={j} data-y={i} key={i+j} className={"cell preview"}></div>
                            }

                            return cell.fill ? <div key={j+i} data-x={j} data-y={i} className={"cell smth"}></div> :
                                <div key={j+i} data-x={j} data-y={i} className={"cell"}></div>
                        })}
                    </div>)
                )}
            </div>
            <UpcomingShapes upcomingShapes={upcomingShapes} chooseShape={chooseShape} />
        </>
    );
};

export default Board;