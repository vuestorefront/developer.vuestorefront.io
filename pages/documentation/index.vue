<template>
  <AtomsLayoutContainer>
    <AtomsLayoutContent class="layout-content--sidebar">
      <AtomsLayoutSideBar class="space-y-4 pr-3">
        <h3 class="mb-5 text-lg font-medium text-gray-500">
          {{ t('content.page.documentation.filter.title') }}
        </h3>
        <section v-for="key in Object.keys(filters)" :key="key">
          <h4
            class="mb-1 flex cursor-pointer justify-between text-lg font-medium text-gray-900"
            @click="isFilterVisible[key] = !isFilterVisible[key]"
          >
            {{ t(`content.page.documentation.filter.${key}`) }}
            <Suspense>
              <AtomsIcon
                name="ph:caret-down-bold"
                class="group-hover:text-primary transform transition-transform duration-200 ease-in-out"
                :class="isFilterVisible[key] ? 'rotate-180' : 'rotate-0'"
              />
            </Suspense>
          </h4>
          <div v-show="isFilterVisible[key]" class="space-y-3 pl-2">
            <span
              class="text-primary hover:text-primary-700 cursor-pointer text-sm hover:underline"
              @click="toggleAll(key)"
            >{{
              toggleAllStatus[key]
                ? t('content.page.documentation.filter.uncheckAll')
                : t('content.page.documentation.filter.checkAll')
            }}</span>
            <ul class="space-y-2">
              <li v-for="(name, i) in Object.keys(filters[key])" :key="i">
                <input
                  :id="`${key}-${name}`"
                  v-model="filters[key][name]"
                  type="checkbox"
                  class="mr-1"
                />
                <label :for="`${key}-${name}`">
                  <span v-if="key === 'status'">
                    {{ t(`global.integration.status.${name}`) }}
                  </span>
                  <span v-else-if="key === 'license'">
                    {{ t(`global.integration.license.${name}`) }}
                  </span>
                  <span v-else-if="key === 'categories'">
                    {{ t(`global.integration.category.${name}`) }}
                  </span>
                  <span v-else>
                    {{ name }}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </section>
      </AtomsLayoutSideBar>
      <section id="documentation">
        <h1>{{ t('content.page.documentation.title') }}</h1>
        <p class="text-gray-500">
          {{ t('content.page.documentation.text') }}
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
          <section
            v-if="
              Array.isArray(integrations.list) && integrations.list.length > 0
            "
            :id="integrations.type"
            :key="integrations.title"
          >
            <h2>{{ integrations.title }}</h2>
            <p class="text-gray-500">
              {{ integrations.description }}
            </p>
            <div
              class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
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
          </section>
        </template>
      </section>
    </AtomsLayoutContent>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import {
    CommerceIntegrationsName,
    IntegrationCategory,
    IntegrationLicense,
    IntegrationStatus,
  } from '~/enums/integrations';
  import { filterBy } from '~/utils/array';

  const { t } = useI18n();

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

  const isFilterVisible = ref(
    Object.fromEntries(Object.keys(filters.value).map((curr) => [curr, true])),
  );

  const isEverythingChecked = (obj: Record<any, unknown>, key: any) => {
    if (Object.values(obj[key]).filter(Boolean).length === 0) return '';

    return Object.keys(obj[key]).length ===
      Object.values(obj[key]).filter(Boolean).length
      ? 'all'
      : Object.keys(
          Object.fromEntries(Object.entries(obj[key]).filter((i) => i[1])),
        );
  };

  const filterParams = computed(() => {
    const baseData = Object.keys(filters.value).reduce((acc, curr) => {
      if (isEverythingChecked(filters.value, curr)) {
        return [...acc, [curr, isEverythingChecked(filters.value, curr)]];
      }
      return acc;
    }, []);

    return baseData.length > 0 ? Object.fromEntries(baseData) : {};
  });

  const toggleAllStatus = ref(
    Object.fromEntries(Object.keys(filters.value).map((c) => [c, true])),
  );

  const toggleAll = (key: string) => {
    Object.keys(filters.value[key]).forEach((k) => {
      filters.value[key][k] = !toggleAllStatus.value[key];
    });

    toggleAllStatus.value[key] = !toggleAllStatus.value[key];
  };

  const { data, refresh } = useAsyncData('integrations', () =>
    $fetch('/api/integrations', {
      params: filterParams.value,
    }),
  );

  const integrationsList = computed(() =>
    [
      {
        title: 'Commerce Integrations',
        type: IntegrationCategory.commerce,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.commerce],
        }),
      },
      {
        title: 'CMS Integrations',
        type: IntegrationCategory.cms,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.cms] }),
      },
      {
        title: 'Payments Integrations',
        type: IntegrationCategory.payment,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.payment],
        }),
      },
      {
        title: 'Reviews Integrations',
        type: IntegrationCategory.reviews,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.reviews],
        }),
      },
      {
        title: 'Analytics Integrations',
        type: IntegrationCategory.analytics,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.analytics],
        }),
      },
      {
        title: 'Auth Integrations',
        type: IntegrationCategory.auth,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.auth] }),
      },
      {
        title: 'Cache Integrations',
        type: IntegrationCategory.cache,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, { categories: [IntegrationCategory.cache] }),
      },
      {
        title: 'Search Integrations',
        type: IntegrationCategory.search,
        description:
          'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
        list: filterBy(data.value, {
          categories: [IntegrationCategory.search],
        }),
      },
    ].filter((i) => Array.isArray(i.list) && i.list.length > 0),
  );

  watch(
    filterParams,
    async () => {
      await refresh();
    },
    { deep: true },
  );
</script>
