import { RouteLink } from '~/constants/types/base';

export interface HeaderMenuItem {
  label: string;
  link?: RouteLink;
  iconName?: string;
}

export interface HeaderMenu extends HeaderMenuItem {
  subMenu?: HeaderMenu[];
}

export const headerMenuItems: HeaderMenu[] = [
  {
    label: 'Home',
  },
  {
    label: 'Guide',
  },
  {
    label: 'Documentation',

    subMenu: [
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
    ],
  },
  {
    label: 'Community',

    subMenu: [
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
      {
        label: 'Home',

        iconName: 'carbon:home',
      },
    ],
  },
  {
    label: 'Videos',
  },
];
