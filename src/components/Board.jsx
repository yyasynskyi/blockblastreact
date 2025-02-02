import React from 'react';
import './Board.scss';

const Board = ({map}) => {
    return (
        <>
            <div className={'board'}>
                {map.map((cell, i) =>
                    (<div className={"row"} key={i}>
                        {cell.map((bool, i) => {
                            console.log(bool, i)
                            return bool ? <div key={i} className={"cell smth"}></div> :
                                <div key={i} className={"cell"}></div>
                        })}
                    </div>)
                )}

            </div>
        </>
    );
};

export default Board;