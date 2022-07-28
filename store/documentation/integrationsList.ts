import { defineStore, storeToRefs } from 'pinia';
import {
  CommerceIntegrationsName,
  IntegrationCategory,
  IntegrationLicense,
  IntegrationStatus,
} from '~/enums/integrations';
import { filterBy } from '~/utils/array';
import { Integration, IntegrationList } from '~/types/integrations';

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
          title: 'Commerce Integrations',
          type: IntegrationCategory.commerce,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.commerce],
          }),
        },
        {
          title: 'CMS Integrations',
          type: IntegrationCategory.cms,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, { categories: [IntegrationCategory.cms] }),
        },
        {
          title: 'Payments Integrations',
          type: IntegrationCategory.payment,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.payment],
          }),
        },
        {
          title: 'Reviews Integrations',
          type: IntegrationCategory.reviews,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.reviews],
          }),
        },
        {
          title: 'Analytics Integrations',
          type: IntegrationCategory.analytics,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.analytics],
          }),
        },
        {
          title: 'Auth Integrations',
          type: IntegrationCategory.auth,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.auth],
          }),
        },
        {
          title: 'Cache Integrations',
          type: IntegrationCategory.cache,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
          list: filterBy(state.data, {
            categories: [IntegrationCategory.cache],
          }),
        },
        {
          title: 'Search Integrations',
          type: IntegrationCategory.search,
          description:
            'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
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
      this.data = await $fetch('/api/integrations', {
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

export const useIntegrationsList = () => {
  const store = integrationsListStore();
  const { data, filters } = storeToRefs(store);

  const { pending, refresh, error } = useAsyncData(
    'integrationsList',
    async () => store.fetch(),
  );

  return {
    toggleAllStatus: computed(() => store.toggleAllStatus),
    filterParams: computed(() => store.filterParams),
    integrations: computed(() => store.integrations),
    appliedFilters: computed(() => store.appliedFilters),
    data,
    filters,
    pending,
    refresh,
    error,
    toggleAll: store.toggleAll,
  };
};
