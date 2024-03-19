import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayerMarker } from 'types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Board from 'components/Board';
import History from 'components/History';

const Game: React.FC = () => {
    const { t } = useTranslation();

    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)] as Array<Array<PlayerMarker | null>>);

    const xIsNext = currentMove % 2 === 0;
    const nextPlayerMarker = xIsNext ? 'X' : 'O';
    const currentSquares = history[currentMove];
    const winner = calculateWinner(currentSquares);

    function handlePlay(newSquares: Array<PlayerMarker | null>) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
    }

    function jumpTo(move: number) {
        setCurrentMove(move);
    }

    let status = t('nextPlayer').replace('{{player}}', nextPlayerMarker);
    if (winner) {
        status = t('winner').replace('{{player}}', winner);
    } else if (currentMove === 9) {
        status = t('tieGame');
    }

    return (
        <Grid className='game' container spacing={1}>
            <Grid item xs={12}>
                <Card>
                    <Typography variant='h4' gutterBottom={true}>
                        {status}
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Board
                    nextPlayerMarker={nextPlayerMarker}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    isGameOver={winner !== null || currentMove === 9}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card>
                    <History history={history} jumpTo={jumpTo} />
                </Card>
            </Grid>
        </Grid>
    );
};

const calculateWinner = (squares: Array<PlayerMarker | null>) => {
    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default Game;
