export type CssSizeClasses = Partial<{
  size: Partial<{
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
  }>;
}>;

export type CssCounterClasses = Partial<{
  counter: Partial<{
    base: string;
  }>;
}>;

export type CssIconClasses = Partial<{
  icon: Partial<{
    base: string;
    iconOnly: string;
    left: string;
    right: string;
  }>;
}>;

export type CssSlotsClasses = Partial<{
  slots: Partial<{
    left: string;
    right: string;
  }>;
}>;

type ColorsObj = {
  DEFAULT: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Colors = {
  success: Partial<ColorsObj>;
  primary: Partial<ColorsObj>;
  secondary: Partial<ColorsObj>;
  danger: Partial<ColorsObj>;
  warning: Partial<ColorsObj>;
  info: Partial<ColorsObj>;
  white: Partial<ColorsObj>;
  black: Partial<ColorsObj>;
  gray: Partial<ColorsObj>;
}

export type CssColorClasses = Partial<{
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
  bgColor: Colors;
  textColor: Colors;
}>;

export type CssOutlineClasses = Partial<{
  outline: Partial<{
    base: string;
    color: Partial<{
      success: string;
      primary: string;
      secondary: string;
      danger: string;
      warning: string;
      info: string;
      white: string;
      transparent: string;
    }>;
  }>;
}>;

export type CssShadowClasses = Partial<{
  shadow: Partial<{
    base: string;
  }>;
}>;

export type CssBaseClasses = Partial<{
  base: string;
}>;

export type DropdownItemCssClasses = Partial<CssBaseClasses &
  CssSizeClasses &
  CssCounterClasses &
  CssIconClasses &
  CssSlotsClasses>;
