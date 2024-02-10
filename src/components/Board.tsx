import React from 'react';
import { PlayerMarker } from 'types';
import { Grid } from '@mui/material';
import Square from 'components/Square';

const Board = ({
    nextPlayerMarker,
    squares,
    isGameOver,
    onPlay,
}: {
    nextPlayerMarker: PlayerMarker;
    squares: Array<PlayerMarker | null>;
    isGameOver: boolean;
    onPlay: (squares: Array<PlayerMarker | null>) => void;
}) => {
    function handleClick(i: number) {
        const squaresCopy = squares.slice();
        squaresCopy[i] = nextPlayerMarker;
        onPlay(squaresCopy);
    }

    return (
        <Grid className='game-board' xs={12}>
            <Grid className='board-row' xs={12}>
                <Square disabled={isGameOver} value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square disabled={isGameOver} value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square disabled={isGameOver} value={squares[2]} onSquareClick={() => handleClick(2)} />
            </Grid>
            <Grid className='board-row' xs={12}>
                <Square disabled={isGameOver} value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square disabled={isGameOver} value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square disabled={isGameOver} value={squares[5]} onSquareClick={() => handleClick(5)} />
            </Grid>
            <Grid className='board-row' xs={12}>
                <Square disabled={isGameOver} value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square disabled={isGameOver} value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square disabled={isGameOver} value={squares[8]} onSquareClick={() => handleClick(8)} />
            </Grid>
        </Grid>
    );
};

export default Board;
