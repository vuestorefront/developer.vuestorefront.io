import { RouteLocationRaw } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TagProps = Record<string, string | number | boolean | Function>;

export type RouteLink = {
  custom?: boolean;
  activeClass?: string;
  exactActiveClass?: string;
  ariaCurrentValue?:
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | 'true'
    | 'false';
  to: RouteLocationRaw;
  replace?: boolean;
};
export declare type NuxtLinkProps = {
  to?: string | RouteLocationRaw;
  href?: string | RouteLocationRaw;
  external?: boolean;
  target?: string;
  rel?: string;
  noRel?: boolean;
  activeClass?: string;
  exactActiveClass?: string;
  replace?: boolean;
  ariaCurrentValue?: string;
};
