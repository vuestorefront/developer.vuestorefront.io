import { TagProps } from '~/constants/types/base';

export type BaseCustomItemProps = {
  label?: string;
  disabled?: boolean;
};

export type BaseOptionsItemProps = {
  selected?: boolean;
};

export type BaseTagProps = {
  tag?: string | keyof HTMLElementTagNameMap;
  tagProps?: TagProps;
};

export type BaseSizeProps = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
};

export type BaseCounterProps = {
  counter?: number;
};

export type BaseVisualProps = {
  color?:
    | 'success'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'info'
    | 'white'
    | 'transparent';
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  square?: boolean;
};

export type BaseIconProps = {
  icon?: 'left' | 'right' | boolean;
  iconName?: string;
  iconLeftName?: string;
  iconRightName?: string;
  iconOnly?: boolean;
};
