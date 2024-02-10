import React from 'react';
import { PlayerMarker } from 'types';
import { Button } from '@mui/material';

const History = ({
    history,
    jumpTo,
}: {
    history: Array<Array<PlayerMarker | null>>;
    jumpTo: (move: number) => void;
}) => {
    const moves = history.map((_squares, move) => {
        let description;
        if (move === 0) {
            description = 'Go to game start';
        } else {
            description = 'Go to move #' + move;
        }
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{description}</Button>
            </li>
        );
    });

    return (
        <div className='game-info'>
            <ol>{moves}</ol>
        </div>
    );
};

export default History;
