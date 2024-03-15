import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { MenuItemWithoutSubItems } from 'components/Menu/MenuItemWithoutSubItems';
import { MenuItemWithSubItems } from 'components/Menu/MenuItemWithSubItems';
import { Divider } from '@mui/material';
import DrawerHeader from 'components/Menu/DrawerHeader';
import CloseIcon from '@mui/icons-material/Close';

interface MenuBarProps {
    title: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ title }) => {
    const { t } = useTranslation();

    // top bar
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // top bar items
    const [languageTopBarOpen, setLanguageTopBarOpen] = React.useState(false);

    // nav drawer
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    // nav menu items
    const [languageNavOpen, setLanguageNavOpen] = React.useState(false);

    const menuItems: Array<MenuItemWithoutSubItems | MenuItemWithSubItems> = [
        {
            title: t('language'),
            icon: <LanguageIcon />,
            onNavToggle: () => setLanguageNavOpen(!languageNavOpen),
            onTopBarToggle: () => setLanguageTopBarOpen(!languageTopBarOpen),
            isNavOpen: languageNavOpen,
            isTopBarOpen: languageTopBarOpen,
            subItems: [
                {
                    title: 'English',
                    onClick: () => i18n.changeLanguage('en'),
                },
                {
                    title: 'हिंदी',
                    onClick: () => i18n.changeLanguage('hi'),
                },
            ],
        },
    ];

    return (
        <Box sx={{ display: 'inherit' }}>
            <AppBar component='nav'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        {title}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {menuItems.map((menuItem, i) => {
                            const hasSubItems = 'subItems' in menuItem;
                            return (
                                <>
                                    <Button
                                        id={`topbar-button-${i}`}
                                        key={i}
                                        sx={{ color: '#fff' }}
                                        startIcon={!!menuItem.icon && menuItem.icon}
                                        aria-controls={hasSubItems && menuItem.isTopBarOpen ? `menu-${i}` : undefined}
                                        aria-expanded={hasSubItems && menuItem.isTopBarOpen ? 'true' : undefined}
                                        aria-haspopup={hasSubItems}
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                            setAnchorEl(event.currentTarget);
                                            hasSubItems ? menuItem.onTopBarToggle(event) : menuItem.onClick(event);
                                        }}
                                    >
                                        {menuItem.title}
                                    </Button>
                                    {hasSubItems && (
                                        <Menu
                                            id={`menu-${i}`}
                                            anchorEl={anchorEl}
                                            open={menuItem.isTopBarOpen}
                                            onClose={() => {
                                                setAnchorEl(null);
                                                menuItem.onTopBarToggle();
                                            }}
                                            MenuListProps={{
                                                'aria-labelledby': `topbar-button-${i}`,
                                            }}
                                        >
                                            {menuItem.subItems.map((subItem, j) => (
                                                <MenuItem key={`${i}-${j}`} onClick={() => subItem.onClick()}>
                                                    {subItem.title}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )}
                                </>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant='temporary'
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    <DrawerHeader>
                        <Typography variant='h6' >
                            {title}
                        </Typography>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component='nav'>
                        {menuItems.map((menuItem, i) => {
                            const hasSubItems = 'subItems' in menuItem;
                            return (
                                <>
                                    <ListItemButton
                                        key={i}
                                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                            event.stopPropagation();
                                            hasSubItems ? menuItem.onNavToggle(event) : menuItem.onClick(event);
                                        }}
                                    >
                                        {!!menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
                                        <ListItemText primary={menuItem.title} />
                                        {hasSubItems && (menuItem.isNavOpen ? <ExpandLess /> : <ExpandMore />)}
                                    </ListItemButton>
                                    {hasSubItems && (
                                        <Collapse in={menuItem.isNavOpen} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {menuItem.subItems.map((subItem, j) => (
                                                    <ListItemButton
                                                        key={`${i}-${j}`}
                                                        sx={{ pl: 4 }}
                                                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                                            event.stopPropagation();
                                                            subItem.onClick();
                                                        }}
                                                    >
                                                        <ListItemText primary={subItem.title} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </>
                            );
                        })}
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
};

export default MenuBar;
