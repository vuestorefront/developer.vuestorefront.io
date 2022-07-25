<template>
  <Disclosure
    v-for="key in Object.keys(filters)"
    :key="key"
    v-slot="{ open }"
    as="div"
    class="border-b border-gray-100 px-4 py-4 lg:border-none lg:px-0 lg:py-2"
  >
    <h3 class="-mx-2 -my-3 flow-root">
      <DisclosureButton
        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
      >
        <span class="font-medium text-gray-900">
          {{ t(`page.documentation.filter.${key}`) }}
        </span>
        <span class="ml-6 flex items-center">
          <Suspense>
            <AtomsIcon
              name="ph:caret-down-bold"
              class="group-hover:text-primary transform transition-transform duration-200 ease-in-out"
              :class="open ? 'rotate-180' : 'rotate-0'"
            />
          </Suspense>
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel class="pt-3">
      <button
        class="text-primary hover:text-primary-700 mb-4 text-sm hover:underline"
        @click="store.toggleAll(key)"
      >
        {{
          toggleAllStatus[key]
            ? t('page.documentation.filter.uncheckAll')
            : t('page.documentation.filter.checkAll')
        }}
      </button>
      <ul class="list-none space-y-2">
        <li v-for="(name, i) in Object.keys(filters[key])" :key="i">
          <div class="form-style-item">
            <input
              :id="`${key}-${name}`"
              v-model="filters[key][name]"
              :name="`${key}[]`"
              type="checkbox"
            />
            <label :id="`${key}-${name}`">
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
          </div>
        </li>
      </ul>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue';
  import { useI18n } from 'vue-i18n';
  import { useIntegrationsList } from '~/store/documentation/integrationsList';
  import { storeToRefs } from 'pinia';

  const { t } = useI18n();
  const store = useIntegrationsList();

  const { filters, toggleAllStatus } = storeToRefs(store);
</script>
