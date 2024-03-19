import React from 'react';
import { PlayerMarker } from 'types';
import Grid from '@mui/material/Grid';
import Square from 'components/Square';

interface BoardProps {
    nextPlayerMarker: PlayerMarker;
    squares: Array<PlayerMarker | null>;
    isGameOver: boolean;
    onPlay: (squares: Array<PlayerMarker | null>) => void;
}

const Board: React.FC<BoardProps> = ({ nextPlayerMarker, squares, isGameOver, onPlay }) => {
    const handleClick = (i: number) => {
        const squaresCopy = squares.slice();
        squaresCopy[i] = nextPlayerMarker;
        onPlay(squaresCopy);
    }

    return (
        <Grid className='game-board' container>
            <Square disabled={isGameOver} value={squares[0]} onSquareClick={() => handleClick(0)} size={4} />
            <Square disabled={isGameOver} value={squares[1]} onSquareClick={() => handleClick(1)} size={4} />
            <Square disabled={isGameOver} value={squares[2]} onSquareClick={() => handleClick(2)} size={4} />
            <Square disabled={isGameOver} value={squares[3]} onSquareClick={() => handleClick(3)} size={4} />
            <Square disabled={isGameOver} value={squares[4]} onSquareClick={() => handleClick(4)} size={4} />
            <Square disabled={isGameOver} value={squares[5]} onSquareClick={() => handleClick(5)} size={4} />
            <Square disabled={isGameOver} value={squares[6]} onSquareClick={() => handleClick(6)} size={4} />
            <Square disabled={isGameOver} value={squares[7]} onSquareClick={() => handleClick(7)} size={4} />
            <Square disabled={isGameOver} value={squares[8]} onSquareClick={() => handleClick(8)} size={4} />
        </Grid>
    );
};

export default Board;
