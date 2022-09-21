import { defineStore, storeToRefs } from 'pinia';
import {
  CommerceIntegrationsName,
  IntegrationCategory,
  IntegrationLicense,
  IntegrationStatus,
} from '~/enums/integrations';
import { filterBy } from '~/utils/array';
import { Integration, IntegrationList } from '~/types/integrations';
import { ApiUrl } from '~/enums/apiUrl';

const isEverythingChecked = (obj: Record<any, any>, key: any) => {
  if (Object.values(obj[key]).filter(Boolean).length === 0) return '';

  return Object.keys(obj[key]).length ===
    Object.values(obj[key]).filter(Boolean).length
    ? 'all'
    : Object.keys(
        Object.fromEntries(Object.entries(obj[key]).filter((i) => i[1])),
      );
};

export const integrationsListStore = defineStore('integrationsList', {
  state: () => {
    return {
      filters: {
        categories: {
          [IntegrationCategory.analytics]: true,
          [IntegrationCategory.auth]: true,
          [IntegrationCategory.cache]: true,
          [IntegrationCategory.cms]: true,
          [IntegrationCategory.commerce]: true,
          [IntegrationCategory.payment]: true,
          [IntegrationCategory.reviews]: true,
          [IntegrationCategory.search]: true,
        },
        compatibility: {
          [CommerceIntegrationsName.commercetools]: true,
          [CommerceIntegrationsName.magento]: true,
          [CommerceIntegrationsName.sfcc]: true,
          [CommerceIntegrationsName.sap]: true,
          [CommerceIntegrationsName.shopify]: true,
          [CommerceIntegrationsName.bigcommerce]: true,
          [CommerceIntegrationsName.scayle]: true,
          [CommerceIntegrationsName.sylius]: true,
          [CommerceIntegrationsName.woocommerce]: true,
          [CommerceIntegrationsName.opencart]: true,
          [CommerceIntegrationsName.vendure]: true,
          [CommerceIntegrationsName.odoo]: true,
          [CommerceIntegrationsName.prestashop]: true,
          [CommerceIntegrationsName.spree]: true,
          [CommerceIntegrationsName.elasticpath]: true,
          [CommerceIntegrationsName.swell]: true,
          [CommerceIntegrationsName.shopware]: true,
        },
        status: {
          [IntegrationStatus.alpha]: true,
          [IntegrationStatus.beta]: true,
          [IntegrationStatus.prod]: true,
          [IntegrationStatus.wip]: true,
        },
        license: {
          [IntegrationLicense.enterprise]: true,
          [IntegrationLicense.os]: true,
        },
      },
      data: [] as IntegrationList,
    };
  },
  getters: {
    toggleAllStatus(state) {
      return Object.fromEntries(
        Object.keys(state.filters).map((c) => [c, true]),
      );
    },
    filterParams(state) {
      const baseData = Object.keys(state.filters).reduce((acc, curr) => {
        return [...acc, [curr, isEverythingChecked(state.filters, curr)]];
      }, []);

      return baseData.length > 0 ? Object.fromEntries(baseData) : {};
    },
    integrations(state) {
      return [
        {
          type: IntegrationCategory.commerce,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.commerce],
          }),
        },
        {
          type: IntegrationCategory.cms,
          list: filterBy(state.data, { categories: [IntegrationCategory.cms] }),
        },
        {
          type: IntegrationCategory.payment,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.payment],
          }),
        },
        {
          type: IntegrationCategory.reviews,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.reviews],
          }),
        },
        {
          type: IntegrationCategory.analytics,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.analytics],
          }),
        },
        {
          type: IntegrationCategory.auth,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.auth],
          }),
        },
        {
          type: IntegrationCategory.cache,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.cache],
          }),
        },
        {
          type: IntegrationCategory.search,
          list: filterBy(state.data, {
            categories: [IntegrationCategory.search],
          }),
        },
      ]
        .filter((i) => Array.isArray(i.list) && i.list.length > 0)
        .map((l) => ({
          ...l,
          list: l.list.sort((a: Integration, b: Integration) => {
            if (a.status === IntegrationStatus.wip) return 1;
            return a.name < b.name ? -1 : 1;
          }),
        }));
    },
    appliedFilters() {
      return Object.values(this.filterParams).reduce(
        (acc, curr) => (Array.isArray(curr) ? acc + curr.length : acc),
        0,
      );
    },
  },
  actions: {
    async fetch() {
      this.data = await $fetch(ApiUrl.Integrations, {
        params: this.filterParams,
      });
    },
    toggleAll(key: string) {
      Object.keys(this.filters[key]).forEach((k) => {
        this.filters[key][k] = !this.toggleAllStatus[key];
      });

      this.toggleAllStatus[key] = !this.toggleAllStatus[key];
    },
  },
});
