import React from 'react';

const UpcomingShapes = ({upcomingShapes, chooseShape}) => {
    upcomingShapes = upcomingShapes.filter(row => row.some(cell => cell !== 0));
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3>Next Shapes</h3>
                {upcomingShapes.map((shape, index) => (
                    <div key={index} onClick={(e) => chooseShape(e)} style={{ display: 'inline-grid', gridTemplateColumns: `repeat(${shape[0].length}, 20px)`}}>
                        {shape.flat().map((cell, i) => (
                            <div
                                key={i}
                                data-index={index}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: cell === 1 ? 'blue' : 'transparent',
                                    border: cell === 1 ? '1px solid black' : 'none',
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingShapes;