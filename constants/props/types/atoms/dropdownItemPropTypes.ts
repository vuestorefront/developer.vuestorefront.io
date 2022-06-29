import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseOptionsItemProps,
  BaseSizeProps,
  BaseTagProps,
} from '~/constants/props/types/basePropTypes';

export type DropdownItemProps = BaseCustomItemProps &
  BaseOptionsItemProps &
  BaseTagProps &
  BaseSizeProps &
  BaseCounterProps &
  BaseIconProps;
