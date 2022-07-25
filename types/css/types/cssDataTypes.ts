import { ColorTypeName } from '~/enums/colors';
import { SizeEnum } from '~/enums/size';

type SizeObj = Partial<{
  [key in SizeEnum]: Partial<ColorsObj>;
}>;

export type CssSizeClasses = Partial<{
  size: SizeObj;
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
  [key in ColorTypeName]: Partial<ColorsObj>;
};

export type CssColorClasses = Partial<{
  color: Partial<{
    [key in ColorTypeName]: string;
  }>;
  bgColor: Colors;
  textColor: Colors;
}>;

export type CssOutlineClasses = Partial<{
  outline: Partial<{
    base: string;
    color: Partial<{
      [key in ColorTypeName]: string;
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
