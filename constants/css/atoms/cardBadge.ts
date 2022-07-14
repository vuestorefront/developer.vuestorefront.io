import {
  CssBadgeLicenseClasses,
  CssBadgePositionClasses,
  CssBadgeStatusClasses,
} from '~/types/css/types/atoms/badge';
import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
import { BadgePosition } from '~/enums/badge';

export const cssLicenseClass: CssBadgeLicenseClasses = {
  [IntegrationLicense.enterprise]: 'card-badge-license--enterprise',
  [IntegrationLicense.paid]: 'card-badge-license--paid',
  [IntegrationLicense.os]: 'card-badge-license--open-source',
};

export const cssStatusClass: CssBadgeStatusClasses = {
  [IntegrationStatus.alpha]: 'card-badge-status--alpha',
  [IntegrationStatus.beta]: 'card-badge-status--beta',
  [IntegrationStatus.wip]: 'card-badge-status--wip',
  [IntegrationStatus.prod]: 'card-badge-status--prod',
};

export const typeLabel: CssBadgeLicenseClasses = {
  [IntegrationLicense.enterprise]: 'Enterprise',
  [IntegrationLicense.paid]: 'Paid',
  [IntegrationLicense.os]: 'Open-Source',
};

export const statusLabel: CssBadgeStatusClasses = {
  [IntegrationStatus.alpha]: 'Alpha',
  [IntegrationStatus.beta]: 'Beta',
  [IntegrationStatus.wip]: 'In development',
  [IntegrationStatus.prod]: 'Production',
};

export const cssPositionClass: CssBadgePositionClasses = {
  [BadgePosition.bottomLeft]: 'card-badge-position--bottom-left',
  [BadgePosition.bottomRight]: 'card-badge-position--bottom-right',
  [BadgePosition.topLeft]: 'card-badge-position--top-left',
  [BadgePosition.topRight]: 'card-badge-position--top-right',
  [BadgePosition.top]: 'card-badge-position--top',
  [BadgePosition.bottom]: 'card-badge-position--bottom',
};

export const cssShapedClass: CssBadgePositionClasses = {
  [BadgePosition.bottomLeft]: 'card-badge-shaped--bottom-left',
  [BadgePosition.bottomRight]:
    'card-badge-shaped card-badge-shaped--bottom-right',
  [BadgePosition.topLeft]: 'card-badge-shaped card-badge-shaped--top-left',
  [BadgePosition.topRight]: 'card-badge-shaped card-badge-shaped--top-right',
  [BadgePosition.top]: 'card-badge-shaped card-badge-shaped--top',
  [BadgePosition.bottom]: 'card-badge-shaped card-badge-shaped--bottom',
};

export const cardBadgeLabel = {
  ...typeLabel,
  ...statusLabel,
};

export const cardBadgeCssClasses = {
  ...cssLicenseClass,
  ...cssStatusClass,
};
