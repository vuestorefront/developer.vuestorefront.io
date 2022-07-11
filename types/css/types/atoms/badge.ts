import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
import { BadgePosition } from '~/enums/badge';

export type CssBadgeLicenseClasses = {
  [key in IntegrationLicense]: string;
};

export type CssBadgeStatusClasses = {
  [key in IntegrationStatus]: string;
};

export type CssBadgePositionClasses = {
  [key in BadgePosition]: string;
};
