import { CssButtonClasses } from '~/types/css/types/atoms/button';
import { ColorTypeName } from '~/enums/colors';
import { SizeEnum } from '~/enums/size';

const cssSlots = {
  left: 'button-icon--left',
  right: 'button-icon--right',
};

export const buttonCssClasses: CssButtonClasses = {
  base: 'button button-text',
  rounded: 'button-rounded',
  square: 'button-square',
  disabled: 'button-disabled',
  color: {
    [ColorTypeName.success]: 'button-color--success',
    [ColorTypeName.primary]: 'button-color--primary',
    [ColorTypeName.secondary]: 'button-color--secondary',
    [ColorTypeName.danger]: 'button-color--danger',
    [ColorTypeName.warning]: 'button-color--warning',
    [ColorTypeName.info]: 'button-color--info',
    [ColorTypeName.white]: 'button-color--white',
    [ColorTypeName.transparent]: 'button-color--transparent',
  },
  shadow: {
    base: 'shadow-base',
  },
  counter: {
    base: 'button-counter',
  },
  outline: {
    base: 'button-outline',
    color: {
      [ColorTypeName.success]: 'button-outline--success',
      [ColorTypeName.primary]: 'button-outline--primary',
      [ColorTypeName.secondary]: 'button-outline--secondary',
      [ColorTypeName.danger]: 'button-outline--danger',
      [ColorTypeName.warning]: 'button-outline--warning',
      [ColorTypeName.info]: 'button-outline--info',
      [ColorTypeName.white]: 'button-outline--white',
      [ColorTypeName.transparent]: 'button-outline--transparent',
    },
  },
  size: {
    [SizeEnum.xs]: 'button-size-xs',
    [SizeEnum.sm]: 'button-size-sm',
    [SizeEnum.base]: 'button-size-base',
    [SizeEnum.lg]: 'button-size-lg',
    [SizeEnum.xl]: 'button-size-xl',
  },
  icon: {
    base: 'button-icon',
    iconOnly: 'button-icon--only',
    ...cssSlots,
  },
  slots: cssSlots,
};

export const socialButtonClasses: Record<
  string,
  {
    class: string;
    icon: string;
    label: string;
  }
> = {
  facebook: {
    class:
      'text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2',
    icon: 'fa6-brands:facebook-f',
    label: 'Sign in with Facebook',
  },
  twitter: {
    class:
      'text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2',
    icon: 'fa6-brands:twitter',
    label: ' Sign in with Twitter',
  },
  github: {
    class:
      'text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2',
    icon: 'fa6-brands:github',
    label: 'Sign in with Github',
  },
  google: {
    class:
      'text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2',
    icon: 'fa6-brands:google',
    label: 'Sign in with Google',
  },
  apple: {
    class:
      'text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2',
    icon: 'fa6-brands:apple',
    label: 'Sign in with Apple',
  },
};
