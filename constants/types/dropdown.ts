import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseOptionsItemProps,
  BaseSizeProps,
  BaseTagProps,
  TagProps,
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

export type DropdownProps = {
  options: DropdownOption[];
  modelValue: string | number | boolean;
  iconName?: string;
  buttonTag?: string;
  buttonTagProps?: Record<any, any>;
  itemTag?: string;
  itemTagProps?: Record<any, any> | ((item: DropdownOption) => TagProps);
};

export type DropdownListProps = {
  options: DropdownOption[];
  selected: string | number | boolean;
  iconName?: string;
  itemTag?: string;
  isOpen?: boolean;
  itemTagProps?: Record<any, any> | ((item: DropdownOption) => TagProps);
};
