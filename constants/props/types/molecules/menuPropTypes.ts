import { RouteLink } from '~/constants/types/base';

export interface HeaderMenu {
  label: string;
  link?: RouteLink;
  iconName?: string;
  subMenu?: HeaderMenu[];
}
