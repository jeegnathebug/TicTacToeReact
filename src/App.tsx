import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Game from 'components/Game';
import MenuBar from 'components/Menu/MenuBar';
import 'i18n/config';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth='lg'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                minHeight='100vh'
                sx={{ bgcolor: '#cfe8fc' }}
            >
                <CssBaseline />
                <MenuBar title={t('title')}/>
                <Game />
            </Box>
        </Container>
    );
};

export default App;
