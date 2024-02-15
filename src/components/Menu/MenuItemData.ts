import { SubMenuItemData } from 'components/Menu/SubMenuItemData';

export interface MenuItemData {
    label: string;
    onClick?: () => void;
    subItems: SubMenuItemData[];
}
