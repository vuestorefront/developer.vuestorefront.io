import { storeToRefs } from 'pinia';
import { integrationsListStore } from '~/store/documentation/integrationsList';

export const useIntegrationsList = () => {
  const store = integrationsListStore();
  const { data, filters } = storeToRefs(store);
  const {
    toggleAllStatus,
    filterParams,
    integrations,
    appliedFilters,
    toggleAll,
    fetch,
  } = store;

  const { pending, refresh, error } = useAsyncData(
    'integrationsList',
    async () => fetch(),
  );

  return {
    toggleAllStatus: computed(() => toggleAllStatus),
    filterParams: computed(() => filterParams),
    integrations: computed(() => integrations),
    appliedFilters: computed(() => appliedFilters),
    data,
    filters,
    pending,
    refresh,
    error,
    toggleAll,
  };
};
