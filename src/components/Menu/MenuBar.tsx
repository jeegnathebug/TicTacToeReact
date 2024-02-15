import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuItemData } from 'components/Menu/MenuItemData';
import './menu.css';

interface MenuBarProps {
    items: MenuItemData[];
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenuItems = (items: MenuItemData[]) => {
        return items.map((item, index) => (
            <div key={index}>
                <Button
                    id={`basic-button-${index}`}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup={item.subItems.length > 0}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        item.onClick && item.onClick();
                        handleClick(event);
                    }}
                >
                    {item.label}
                </Button>
                {item.subItems && (
                    <Menu
                        id={`basic-menu-${index}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': `basic-button-${index}`,
                        }}
                    >
                        {item.subItems.map((subItem, subIndex) => (
                            <MenuItem
                                key={`${index}-${subIndex}`}
                                onClick={() => {
                                    subItem.onClick();
                                    handleClose();
                                }}
                            >
                                {subItem.label}
                            </MenuItem>
                        ))}
                    </Menu>
                )}
            </div>
        ));
    };

    return <div className='menu-bar'>{renderMenuItems(items)}</div>;
};

export default MenuBar;
