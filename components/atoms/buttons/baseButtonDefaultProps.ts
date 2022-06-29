import { cssColors, cssSizes } from '~/constants/cssBaseData';

export default {
  size: {
    type: String,
    default: 'base',
    validate: (s: string) => cssSizes.has(s),
  },
  color: {
    type: String,
    default: 'primary',
    validate: (s: string) => cssColors.has(s),
  },
  outline: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  counter: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [Boolean, String],
    default: false,
    validate: (s: string | boolean) =>
      typeof s === 'boolean' || ['left', 'right'].includes(s),
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: '',
  },
};
