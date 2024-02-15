import * as React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Box, Container } from '@mui/material';
import Game from 'components/Game';
import MenuBar from 'components/Menu/MenuBar';
import { MenuItemData } from 'components/Menu/MenuItemData';
import 'i18n/config';

const App: React.FC = () => {
    const { t } = useTranslation();

    const menuItems: MenuItemData[] = [
        {
            label: t('language'),
            subItems: [
                { label: 'English', onClick: () => i18n.changeLanguage('en') },
                { label: 'हिंदी', onClick: () => i18n.changeLanguage('hi') },
            ],
        },
    ];
    return (
        <Container maxWidth='lg'>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                minHeight='100vh'
                sx={{ bgcolor: '#cfe8fc' }}
            >
                <MenuBar items={menuItems} />
                <Game />
            </Box>
        </Container>
    );
};

export default App;
