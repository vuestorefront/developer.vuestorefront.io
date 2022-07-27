<template>
  <AtomsLayoutContainer>
    <AtomsLayoutContent class="layout-content--sidebar">
      <AtomsLayoutSideBar class="space-y-4 pr-6">
        <ActiveDocumentationDesktopFilter />
        <ActiveDocumentationMobileFilter
          :open="mobileFiltersOpen"
          @close="mobileFiltersOpen = false"
        />
      </AtomsLayoutSideBar>
      <section id="documentation">
        <h1>{{ t('page.documentation.title') }}</h1>
        <p class="text-gray-500">
          {{ t('page.documentation.text') }}
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
        <div class="flex w-full place-content-end lg:hidden">
          <AtomsButton
            type="button"
            color="white"
            outline
            :counter="appliedFilters"
            icon-left-name="ci:filter"
            :label="$t('global.filter.title')"
            class="w-full"
            @click="mobileFiltersOpen = true"
          />
        </div>
        <ActiveDocumentationIntegrationsList />
      </section>
    </AtomsLayoutContent>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useIntegrationsList } from '~/store/documentation/integrationsList';
  import { storeToRefs } from 'pinia';

  definePageMeta({
    documentDriven: false,
  });

  const { t } = useI18n();

  const { appliedFilters } = storeToRefs(useIntegrationsList());

  const mobileFiltersOpen = ref(false);
</script>
