import {
  CssBadgePositionClasses,
  CssBadgeTypeClasses,
} from '~/constants/css/types/atoms/badge';

export const cssTypeClass: CssBadgeTypeClasses = {
  alpha: 'card-badge-status--alpha',
  beta: 'card-badge-status--beta',
  wip: 'card-badge-status--wip',
  prod: 'card-badge-status--prod',
  enterprise: 'card-badge-license--enterprise',
  paid: 'card-badge-license--paid',
  os: 'card-badge-license--open-source',
};

export const typeLabel: CssBadgeTypeClasses = {
  alpha: 'Alpha',
  beta: 'Beta',
  wip: 'In development',
  prod: 'Production',
  enterprise: 'Enterprise',
  paid: 'Paid',
  os: 'Open-Source',
};

export const cssPositionClass: CssBadgePositionClasses = {
  'bottom-left': 'card-badge-position--bottom-left',
  'bottom-right': 'card-badge-position--bottom-right',
  'top-left': 'card-badge-position--top-left',
  'top-right': 'card-badge-position--top-right',
};
