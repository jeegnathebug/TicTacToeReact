import React from 'react';
import { PlayerMarker } from 'types';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Square = ({
    value,
    disabled,
    onSquareClick,
}: {
    value: PlayerMarker | null;
    disabled: boolean;
    onSquareClick: () => void;
}) => {
    const onClick = () => {
        if (value !== null || disabled) {
            // button has been clicked or game is over
            return;
        }
        onSquareClick();
    };

    let icon = (
        <CloseIcon fontSize='inherit' style={{ visibility: 'hidden', minHeight: 'inherit', minWidth: 'inherit' }} />
    );
    if (value === 'X') {
        icon = <CloseIcon fontSize='inherit' style={{ minHeight: 'inherit', minWidth: 'inherit' }} />;
    } else if (value === 'O') {
        icon = <CircleOutlinedIcon fontSize='inherit' style={{ minHeight: 'inherit', minWidth: 'inherit' }} />;
    }

    return (
        <Button
            variant={'outlined'}
            onClick={onClick}
            disabled={disabled}
            style={{ minHeight: '100%', minWidth: '33%' }}
        >
            {icon}
        </Button>
    );
};

export default Square;
