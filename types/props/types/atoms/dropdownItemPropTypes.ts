import type {
  BaseCounterProps,
  LabelBaseProps,
  BaseIconProps,
  BaseOptionsItemProps,
  BaseSizeProps,
  BaseTagProps,
  BaseFormProps,
} from '~/types/props/types/basePropTypes';
import type { DropdownOption } from '~/types/props/types/molecules/dropdownPropTypes';

export interface DropdownItemProps
  extends LabelBaseProps,
    BaseOptionsItemProps,
    BaseTagProps,
    BaseSizeProps,
    BaseCounterProps,
    BaseIconProps,
    BaseFormProps {}

export interface DropdownProps
  extends BaseCounterProps,
    BaseFormProps,
    BaseIconProps,
    BaseSizeProps,
    BaseTagProps {
  options: DropdownOption[];
  modelValue: string | number | boolean;
  buttonTag?: string;
  buttonTagProps?: Record<string, any>;
  itemTag?: string;
  itemTagProps?: Record<string, any>;
}
