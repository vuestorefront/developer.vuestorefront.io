import { DropdownItemCssClasses } from '~/types/css/types/cssDataTypes';

export const dropdownItemCssClasses: DropdownItemCssClasses = {
  base: 'dropdown-item',
  size: {
    xs: 'dropdown-item-size--xs',
    sm: 'dropdown-item-size--sm',
    base: 'dropdown-item-size--base',
    lg: 'dropdown-item-size--lg',
    xl: 'dropdown-item-size--xl',
  },
  counter: {
    base: 'button-counter',
  },
  icon: {
    base: 'button-icon',
    iconOnly: 'button-icon--only',
  },
  slots: {
    left: 'button-icon--left',
    right: 'button-icon--right',
  },
};
