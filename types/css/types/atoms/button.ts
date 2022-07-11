import {
  CssBaseClasses,
  CssColorClasses,
  CssCounterClasses,
  CssIconClasses,
  CssOutlineClasses,
  CssShadowClasses,
  CssSizeClasses,
  CssSlotsClasses,
} from '~/types/css/types/cssDataTypes';

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
