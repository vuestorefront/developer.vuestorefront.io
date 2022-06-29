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

export type DropdownItemCssClasses = Partial<
  CssBaseClasses &
    CssSizeClasses &
    CssCounterClasses &
    CssIconClasses &
    CssSlotsClasses
>;
