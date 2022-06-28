export type CssSizeClasses = {
  size: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
  };
};

export type CssCounterClasses = {
  counter: {
    base: string;
  };
};

export type CssIconClasses = {
  icon: {
    base: string;
    iconOnly: string;
    left: string;
    right: string;
  };
};

export type CssColorClasses = {
  color: {
    success: string;
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    info: string;
    white: string;
    transparent: string;
  };
};

export type CssOutlineClasses = {
  outline: {
    base: string;
    color: {
      success: string;
      primary: string;
      secondary: string;
      danger: string;
      warning: string;
      info: string;
      white: string;
      transparent: string;
    };
  };
};

export type CssShadowClasses = {
  shadow: {
    base: string;
  };
};

export type CssButtonClasses = {
  base: string;
  disabled: string;
  rounded: string;
  square: string;
} & CssSizeClasses &
  CssCounterClasses &
  CssIconClasses &
  CssColorClasses &
  CssOutlineClasses &
  CssShadowClasses;
