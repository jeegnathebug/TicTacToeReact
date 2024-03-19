import React from 'react';
import { PlayerMarker } from 'types';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

interface HistoryProps {
    history: Array<Array<PlayerMarker | null>>;
    jumpTo: (move: number) => void;
}

const History: React.FC<HistoryProps> = ({ history, jumpTo }) => {
    const { t } = useTranslation();
    const moveStrings: string[] = t('moveNumbers', { returnObjects: true });

    const moves = history.map((_squares, move) => {
        let description;
        if (move === 0) {
            description = t('historyGameStart');
        } else {
            description = moveStrings[move - 1];
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
