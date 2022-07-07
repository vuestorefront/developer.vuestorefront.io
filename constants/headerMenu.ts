import { HeaderMenu } from '~/constants/props/types/molecules/menuPropTypes';

export const headerMenuItems: HeaderMenu[] = [
  {
    label: 'Get Started',
    link: 'https://docs.vuestorefront.io/v2/getting-started/installation.html',
  },
  {
    label: 'Documentation',
    link: {
      name: 'documentation',
    },
  },
  {
    label: 'Community',
    link: 'https://discord.gg/vuestorefront',
  },
  {
    label: 'Videos',
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
];
