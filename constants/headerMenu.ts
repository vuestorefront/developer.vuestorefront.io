import { HeaderMenu } from '~/constants/props/types/molecules/menuPropTypes';

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
    ],
  },
  {
    label: 'Videos',
  },
];
