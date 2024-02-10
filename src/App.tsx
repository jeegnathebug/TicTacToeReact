import * as React from 'react';
import { Box, Container } from '@mui/material';
import Game from 'components/Game';

const App: React.FC = () => {
    return (
        <Container maxWidth='lg'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                minHeight='100vh'
                sx={{ bgcolor: '#cfe8fc' }}
            >
                <Game />
            </Box>
        </Container>
    );
};

export default App;
