import React from 'react';
import { MenuItem } from 'components/Menu/MenuItem';

export type MenuItemWithoutSubItems = MenuItem & {
    onClick: (event?: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
};
