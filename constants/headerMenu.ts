import { HeaderMenu } from '~/types/props/types/molecules/menuPropTypes';

export const headerMenuItems: HeaderMenu[] = [
  {
    label: 'Get Started',
    link: 'https://docs.vuestorefront.io/v2/getting-started/installation.html',
    iconName: 'akar-icons:link-out',
    target: '_blank',
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
    iconName: 'akar-icons:link-out',
    target: '_blank',
  },
  {
    label: 'Videos',
    link: {
      name: 'videos-all',
      params: {
        page: 1,
      },
    },
  },
];
