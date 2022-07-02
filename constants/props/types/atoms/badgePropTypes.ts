export interface BadgeProps {
  icon?: string;
  iconOnly?: boolean;
  textOnly?: boolean;
  type?: string;
}

export interface CardBadgeProps {
  label: string;
  type:
    | 'prod'
    | 'alpha'
    | 'beta'
    | 'wip'
    | 'os'
    | 'enterprise'
    | 'paid'
    | 'custom';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
