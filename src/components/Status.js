import React from 'react';

export default function Status(props) {
    
    const renderStatus = (winner, status, xIsNext) => {
        if (winner && winner !== true) {
            return status = `Winner is: ${winner}`
        }
        else if (winner && winner === true) {
            return status = `Match tied`;
        }
        else {
            return status = `Player: ${xIsNext ? "X" : "O"} Turn`;
        }
    }

    return (
    <p>{renderStatus(props.winner,props.status,props.xIsNext)}</p>
    );
}