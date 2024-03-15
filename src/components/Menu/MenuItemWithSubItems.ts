import React from 'react';
import { MenuItem } from 'components/Menu/MenuItem';

export type MenuItemWithSubItems = MenuItem & {
    onNavToggle: (event?: React.MouseEvent<HTMLDivElement>) => void;
    onTopBarToggle: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    isNavOpen: boolean;
    isTopBarOpen: boolean;
    subItems: Array<{
        title: string;
        onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
    }>;
};
