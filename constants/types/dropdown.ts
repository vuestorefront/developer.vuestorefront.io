import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseOptionsItemProps,
  BaseSizeProps,
  BaseTagProps,
} from './base';

export type DropdownItemProps = BaseCustomItemProps &
  BaseOptionsItemProps &
  BaseTagProps &
  BaseSizeProps &
  BaseCounterProps &
  BaseIconProps;

export type DropdownOption = {
  id?: string | number;
  label: string;
  selected?: boolean;
  value: string | number | boolean;
};
export type DropdownListProps = {
  options: DropdownOption[];
  modelValue: string | number | boolean;
};
