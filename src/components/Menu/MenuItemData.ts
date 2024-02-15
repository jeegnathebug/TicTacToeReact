import React from 'react';
import { SubMenuItemData } from 'components/Menu/SubMenuItemData';

export interface MenuItemData {
    label: string;
    icon?: React.ReactElement;
    onClick?: () => void;
    subItems: SubMenuItemData[];
}
