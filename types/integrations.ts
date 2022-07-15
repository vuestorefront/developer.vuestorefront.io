import {IntegrationCategory, IntegrationLicense, IntegrationStatus} from "~/enums/integrations";

export type Integration = {
  name: string;
  logo: string;
  link:
    | string
    | {
    name: string;
    link: string;
    icon: string;
  }[];
  repository?: string;
  license: IntegrationLicense;
  status: IntegrationStatus;
  color?: string;
  maintainedBy: { name: string; link: string }[];
  categories: IntegrationCategory[];
};

export type IntegrationList = Integration[]
