import type { TagProps } from '~/constants/types/base';

export interface DropdownOption {
  id?: string | number;
  label: string;
  selected?: boolean;
  value: string | number | boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  modelValue: string | number | boolean;
  iconName?: string;
  buttonTag?: string;
  buttonTagProps?: Record<any, any>;
  itemTag?: string;
  itemTagProps?: Record<any, any> | ((item: DropdownOption) => TagProps);
}

export interface DropdownListProps {
  options: DropdownOption[];
  selected: string | number | boolean;
  iconName?: string;
  itemTag?: string;
  isVisible?: boolean;
  itemTagProps?: Record<any, any> | ((item: DropdownOption) => TagProps);
}
