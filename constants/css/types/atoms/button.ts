import {
  CssBaseClasses,
  CssColorClasses,
  CssCounterClasses,
  CssIconClasses,
  CssOutlineClasses,
  CssShadowClasses,
  CssSizeClasses,
  CssSlotsClasses,
} from '~/constants/css/types/cssDataTypes';

export type CssButtonClasses = Partial<
  {
    disabled: string;
    rounded: string;
    square: string;
  } & CssBaseClasses &
    CssSizeClasses &
    CssCounterClasses &
    CssIconClasses &
    CssColorClasses &
    CssOutlineClasses &
    CssShadowClasses &
    CssSlotsClasses
>;
