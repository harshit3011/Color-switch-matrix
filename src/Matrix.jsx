import React, { useState } from 'react'

const Matrix = () => {
    const [boxColors, setBoxColors] = useState(Array(9).fill('white'));

    const handleClick = (index) => {
        const newBoxColors = [...boxColors];
        newBoxColors[index] = 'green';
        setBoxColors(newBoxColors);

        if (newBoxColors.every(color => color === 'green')) {
            setBoxColors(Array(9).fill('orange'));
        }
    };

    return (
        <div className='container'>
            <h1 className='header'>Machine Problem-1</h1>
            <div className="matrix">
                {boxColors.map((color, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Matrix
