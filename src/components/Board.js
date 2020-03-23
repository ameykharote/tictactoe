import React, { useState } from 'react';
import Square from './Square';
import Status from './Status';

export default function Board() {
    
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(boardSquares);

    let status;
    
    const handleClick = index => {
        const squares = [...boardSquares];

        if (winner || squares[index]) return;
 
        squares[index] = xIsNext ? "X" : "0";

        setBoardSquares(squares);

        setXIsNext(!xIsNext);
    
    };

    const renderSquare = (index) => {
        return (
        <Square value={boardSquares[index]} onClick={() => handleClick(index)}></Square>
        );
    }

    return (
        <div className="container">
            <h2 className="status"><Status winner={winner} status={status} xIsNext={xIsNext}/></h2>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div> 
        </div>
    );
}

function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
        const [a,b,c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    
    let boolean = squares.every(el => el !== null);
    if (boolean === true) {
        return boolean;
    }
    return null;
}