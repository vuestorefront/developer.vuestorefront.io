export interface HeaderMenuItem {
  label: string;
  link: string;
  iconName?: string;
}

export interface HeaderMenu extends HeaderMenuItem {
  subMenu?: HeaderMenu[];
}

export const headerMenuItems: HeaderMenu[] = [
  {
    label: 'Home',
    link: '#',
  },
  {
    label: 'Guide',
    link: '#',
  },
  {
    label: 'Documentation',
    link: '#',
    subMenu: [
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
    ],
  },
  {
    label: 'Community',
    link: '#',
    subMenu: [
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
      {
        label: 'Home',
        link: '#',
        iconName: 'carbon:home',
      },
    ],
  },
  {
    label: 'Videos',
    link: '#',
  },
];
