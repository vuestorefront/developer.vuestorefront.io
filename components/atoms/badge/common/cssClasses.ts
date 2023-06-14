import { EnumRecord } from '~/types/helpers';
import { ColorTypeName } from '~/enums/colors';
import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
import { BadgePosition } from '~/enums/badge';

export const TagBadgeColorClass: EnumRecord<ColorTypeName, string> = {
  [ColorTypeName.success]: 'tag-badge-color--success',
  [ColorTypeName.primary]: 'tag-badge-color--primary',
  [ColorTypeName.secondary]: 'tag-badge-color--secondary',
  [ColorTypeName.danger]: 'tag-badge-color--danger',
  [ColorTypeName.warning]: 'tag-badge-color--warning',
  [ColorTypeName.info]: 'tag-badge-color--info',
  [ColorTypeName.white]: 'tag-badge-color--white',
  [ColorTypeName.transparent]: 'tag-badge-color--transparent',
  [ColorTypeName.black]: 'tag-badge-color--black',
  [ColorTypeName.gray]: 'tag-badge-color--gray',
  [ColorTypeName.default]: 'tag-badge-color--default',
};

export const TagBadgeIconColorClass: EnumRecord<ColorTypeName, string> = {
  [ColorTypeName.success]: 'tag-badge-icon-color--success',
  [ColorTypeName.primary]: 'tag-badge-icon-color--primary',
  [ColorTypeName.secondary]: 'tag-badge-icon-color--secondary',
  [ColorTypeName.danger]: 'tag-badge-icon-color--danger',
  [ColorTypeName.warning]: 'tag-badge-icon-color--warning',
  [ColorTypeName.info]: 'tag-badge-icon-color--info',
  [ColorTypeName.white]: 'tag-badge-icon-color--white',
  [ColorTypeName.transparent]: 'tag-badge-icon-color--transparent',
  [ColorTypeName.black]: 'tag-badge-icon-color--black',
  [ColorTypeName.gray]: 'tag-badge-icon-color--gray',
  [ColorTypeName.default]: 'tag-badge-icon-color--default',
};

export const cssLicenseClass: EnumRecord<IntegrationLicense, string> = {
  [IntegrationLicense.enterprise]: 'card-badge-license--enterprise',
  [IntegrationLicense.os]: 'card-badge-license--open-source',
};

export const cssStatusClass: EnumRecord<IntegrationStatus, string> = {
  [IntegrationStatus.alpha]: 'card-badge-status--alpha',
  [IntegrationStatus.beta]: 'card-badge-status--beta',
  [IntegrationStatus.wip]: 'card-badge-status--wip',
  [IntegrationStatus.prod]: 'card-badge-status--prod',
  [IntegrationStatus.pro]: 'card-badge-status--pro',
  [IntegrationStatus.beginner]: 'card-badge-status--beginner',
};

export const typeLabel: EnumRecord<IntegrationLicense, string> = {
  [IntegrationLicense.enterprise]: 'Enterprise',
  [IntegrationLicense.os]: 'Open-Source',
};

export const statusLabel: EnumRecord<IntegrationStatus, string> = {
  [IntegrationStatus.alpha]: 'Alpha',
  [IntegrationStatus.beta]: 'Beta',
  [IntegrationStatus.wip]: 'In development',
  [IntegrationStatus.prod]: 'Production',
  [IntegrationStatus.pro]: 'Pro',
  [IntegrationStatus.beginner]: 'Beginner',
};

export const cssPositionClass: EnumRecord<BadgePosition, string> = {
  [BadgePosition.bottomLeft]: 'card-badge-position--bottom-left',
  [BadgePosition.bottomRight]: 'card-badge-position--bottom-right',
  [BadgePosition.topLeft]: 'card-badge-position--top-left',
  [BadgePosition.topRight]: 'card-badge-position--top-right',
  [BadgePosition.top]: 'card-badge-position--top',
  [BadgePosition.bottom]: 'card-badge-position--bottom',
};

export const cssShapedClass: EnumRecord<BadgePosition, string> = {
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
