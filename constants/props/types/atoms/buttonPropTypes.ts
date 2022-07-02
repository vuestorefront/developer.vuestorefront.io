import type {
  BaseCounterProps,
  LabelBaseProps,
  BaseIconProps,
  BaseSizeProps,
  BaseTagProps,
  BaseVisualProps,
  BaseFormProps,
} from '~/constants/props/types/basePropTypes';

export interface ButtonProps extends ButtonContentProps, BaseTagProps {}

export interface ButtonContentProps
  extends LabelBaseProps,
    BaseSizeProps,
    BaseCounterProps,
    BaseVisualProps,
    BaseIconProps,
    BaseFormProps {}
