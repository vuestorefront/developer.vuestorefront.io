import ColorProps from '~/constants/props/color';
import CounterProps from '~/constants/props/counter';
import DisabledProps from '~/constants/props/disabled';
import IconProps from '~/constants/props/icon';
import LabelProps from '~/constants/props/label';
import OutlineProps from '~/constants/props/outline';
import RoundedProps from '~/constants/props/rounded';
import ShadowProps from '~/constants/props/shadow';
import SizeProps from '~/constants/props/size';
import SquareProps from '~/constants/props/square';
import { NuxtLinkProps } from '~/constants/props/nuxtLink';

export const buttonProps = {
  ...ColorProps,
  ...CounterProps,
  ...DisabledProps,
  ...IconProps,
  ...LabelProps,
  ...OutlineProps,
  ...RoundedProps,
  ...ShadowProps,
  ...SizeProps,
  ...SquareProps,
  ...NuxtLinkProps,
  tag: {
    type: String,
    default: 'button',
  },
  tagProps: {
    type: Object,
    default: () => ({}),
  },
};
