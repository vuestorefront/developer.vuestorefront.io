export interface SocialIcon {
  icon: string;
  link: string;
  name: string;
}

export const socialList = [
  {
    icon: 'fa6-brands:twitter',
    link: 'https://twitter.com/VueStorefront',
    name: 'Twitter',
    alias: ['twitter', 'tweet', 'twt'],
  },
  {
    icon: 'fa6-brands:github',
    link: 'https://github.com/vuestorefront/vue-storefront',
    name: 'GitHub',
    alias: ['github', 'gh'],
  },
  {
    icon: 'fa6-brands:youtube',
    link: 'https://www.youtube.com/vuestorefront',
    name: 'YouTube',
    alias: ['youtube', 'yt'],
  },
  {
    icon: 'fa6-brands:dev',
    link: 'https://dev.to/vuestorefront',
    name: 'Dev.to',
    alias: ['devto', 'dev', 'dt'],
  },
  {
    icon: 'fa6-brands:facebook-square',
    link: 'https://www.facebook.com/vuestorefront/',
    name: 'Facebook',
    alias: ['facebook', 'fb'],
  },
  {
    icon: 'fa6-brands:linkedin-in',
    link: 'https://www.linkedin.com/company/vue-storefront/',
    name: 'LinkedIn',
    alias: ['linkedin', 'in'],
  },
];
