import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseSizeProps,
  BaseTagProps,
  BaseVisualProps,
} from './base';

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
