import React from 'react';
import { PlayerMarker } from 'types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

interface SquareProps {
    value: PlayerMarker | null;
    disabled: boolean;
    onSquareClick: () => void;
    size: number;
}

const Square: React.FC<SquareProps> = ({ value, disabled, onSquareClick, size }) => {
    const onClick = () => {
        if (value !== null || disabled) {
            // button has been clicked or game is over
            return;
        }
        onSquareClick();
    };

    let icon = (
        <CloseIcon fontSize='large' style={{ visibility: 'hidden' }} />
    );
    if (value === 'X') {
        icon = <CloseIcon fontSize='large' />;
    } else if (value === 'O') {
        icon = <CircleOutlinedIcon fontSize='large' />;
    }

    return (
        <Grid item xs={size}>
            <Paper
                sx={{
                    height: 100,
                }}
            >
                <Button
                    variant={'outlined'}
                    onClick={onClick}
                    disabled={disabled}
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    {icon}
                </Button>
            </Paper>
        </Grid>
    );
};

export default Square;
