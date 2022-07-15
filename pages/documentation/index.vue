<template>
  <h1>Documentation</h1>
  <p class="text-gray-500">
    Netus sem nostra pulvinar rhoncus penatibus ex tortor conubia laoreet varius
    interdum adipiscing integer egestas condimentum, eu etiam cursus amet
    malesuada tellus lacinia fames dis sapien primis hendrerit cubilia. Id etiam
    placerat laoreet hac varius curabitur enim tempus elementum lobortis auctor
    eleifend, facilisi quam lorem justo sem class aptent fames ultrices a. Proin
    in maximus tristique taciti maecenas consequat euismod torquent facilisis
    nostra tempus, nisi semper nunc consectetur vestibulum mus tempor sagittis
    donec dictumst laoreet, sit sapien diam scelerisque ultricies potenti montes
    tellus dictum ullamcorper.
  </p>
  <div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
    <MoleculesCardDocs
      description="Vivamus ullamcorper integer egestas condimentum sociosqu id risus mi phasellus, habitasse pretium eget fringilla suscipit nunc nascetur."
      documentation="https://docs.vuestorefront.io/v2/"
      img="/brands/icons/vsf.svg"
      name="Vue Storefront"
    />
    <MoleculesCardDocs
      description="Vivamus ullamcorper integer egestas condimentum sociosqu id risus mi phasellus, habitasse pretium eget fringilla suscipit nunc nascetur."
      documentation="https://docs.storefrontui.io/?path=/story/welcome--page"
      img="/brands/icons/sfui.svg"
      name="Storefront UI"
    />
  </div>
  <template v-for="integrations in integrationsList">
    <div
      v-if="Array.isArray(integrations.list) && integrations.list.length > 0"
      :key="integrations.title"
    >
      <h2>{{ integrations.title }}</h2>
      <p class="text-gray-500">
        {{ integrations.description }}
      </p>
      <div class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MoleculesCardDocs
          v-for="(integration, index) in integrations.list"
          :key="integration.name + index"
          :documentation="integration.link"
          :img="integration.logo"
          :name="integration.name"
          :status="integration.status"
          :license="integration.license"
          :maintainers="integration.maintainedBy"
        />
      </div>
    </div>
  </template>
  <Teleport to="#layout-sidebar">
    <h3 class="mb-10 text-lg font-medium text-gray-500">Filter by:</h3>
    <div v-for="(key, index) in Object.keys(filters)" :key="index">
      <h4 class="mb-3 mt-2 text-lg text-gray-900">{{ key }}</h4>
      <ul>
        <li v-for="(name, i) in Object.keys(filters[key])" :key="i">
          <input v-model="filters[key][name]" type="checkbox" /> {{ name }}
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import {
    CommerceIntegrationsName,
    IntegrationCategory,
    IntegrationLicense,
    IntegrationStatus,
  } from '~/enums/integrations';
  import { filterBy } from '~/utils/array';

  definePageMeta({
    layout: 'internal-side-bar',
  });

  const filters = ref({
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
  });

  const isEverythingChecked = (obj: Record<any, unknown>, key: any) => {
    return Object.keys(obj[key]).length ===
      Object.values(obj[key]).filter(Boolean).length
      ? 'all'
      : Object.keys(
          Object.fromEntries(Object.entries(obj[key]).filter((i) => i[1])),
        );
  };

  const filterParams = computed(() =>
    Object.fromEntries(
      Object.keys(filters.value).map((curr) => [
        curr,
        isEverythingChecked(filters.value, curr),
      ]),
    ),
  );

  const { data, refresh } = useAsyncData('integrations', () =>
    $fetch('/api/integrations', {
      params: filterParams.value,
    }),
  );

  watch(
    filterParams,
    async () => {
      await refresh();
    },
    { deep: true },
  );

  const integrationsList = computed(() =>
    [
      {
        title: 'Commerce Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.commerce],
        }),
      },
      {
        title: 'CMS Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.cms] }),
      },
      {
        title: 'Payments Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.payment],
        }),
      },
      {
        title: 'Reviews Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.reviews],
        }),
      },
      {
        title: 'Analytics Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.analytics],
        }),
      },
      {
        title: 'Auth Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.auth] }),
      },
      {
        title: 'Cache Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.cache] }),
      },
      {
        title: 'Search Integrations',
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.search],
        }),
      },
    ].filter((i) => Array.isArray(i.list) && i.list.length > 0),
  );
</script>
