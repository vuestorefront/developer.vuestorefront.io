import type { BaseColors, TagProps } from '~/types/base';
import { VNode } from 'vue';

export interface LabelBaseProps {
  label?: string;
}

export interface BaseFormProps {
  disabled?: boolean;
}

export interface BaseOptionsItemProps {
  selected?: boolean;
}

export interface BaseTagProps {
  tag?: string | keyof HTMLElementTagNameMap | VNode;
  tagProps?: TagProps;
}

export interface BaseSizeProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}

export interface BaseCounterProps {
  counter?: number;
}

export interface BaseVisualProps {
  color?: BaseColors;
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  square?: boolean;
  textColor?: BaseColors;
  bgColor?: BaseColors;
}

export interface BaseIconProps {
  icon?: 'left' | 'right' | boolean;
  iconName?: string;
  iconLeftName?: string;
  iconRightName?: string;
  iconOnly?: boolean;
}
