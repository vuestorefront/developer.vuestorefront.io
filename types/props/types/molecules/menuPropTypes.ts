import { RouteLocationRaw } from 'vue-router';

export interface HeaderMenu {
  label: string;
  link?: RouteLocationRaw | string;
  iconName?: string;
  subMenu?: HeaderMenu[];
}
