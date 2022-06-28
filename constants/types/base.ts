import { cssColors, cssSizes } from '../cssBaseData';
import { ArrElement } from './helpers';

export type BaseCustomItemProps = {
  label: string;
  disabled: boolean;
};

export type BaseOptionsItemProps = {
  selected: boolean;
};

export type BaseTagProps = {
  tag: string | keyof HTMLElementTagNameMap;
  // eslint-disable-next-line @typescript-eslint/ban-types
  tagProps: Record<string, string | number | boolean | Function>;
};

export type BaseSizeProps = {
  size: ArrElement<typeof cssSizes>;
};

export type BaseCounterProps = {
  counter: number;
};

export type BaseVisualProps = {
  color: ArrElement<typeof cssColors>;
  outline: boolean;
  shadow: boolean;
  rounded: boolean;
  square: boolean;
};

export type BaseIconProps = {
  icon: 'left' | 'right' | boolean;
  iconName: string;
  iconOnly: boolean;
};
