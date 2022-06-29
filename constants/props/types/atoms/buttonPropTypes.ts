import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseSizeProps,
  BaseTagProps,
  BaseVisualProps,
} from '~/constants/props/types/basePropTypes';

export type ButtonProps = BaseCustomItemProps &
  BaseTagProps &
  BaseSizeProps &
  BaseCounterProps &
  BaseVisualProps &
  BaseIconProps;

export type ButtonContentProps = BaseCustomItemProps &
  BaseSizeProps &
  BaseCounterProps &
  BaseVisualProps &
  BaseIconProps;
