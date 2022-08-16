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
        <i18n-t
          keypath="page.documentation.text"
          tag="p"
          scope="global"
          class="text-gray-500"
        >
          <template #link>
            <NuxtLink
              to="https://docs.vuestorefront.io/v2/general/enterprise.html"
              target="_blank"
            >
              {{ t('page.documentation.link') }}
            </NuxtLink>
          </template>
        </i18n-t>
        <div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <MoleculesCardDocs
            :description="t('page.documentation.content.vsf')"
            documentation="https://docs.vuestorefront.io/v2/"
            img="/brands/icons/vsf.svg"
            name="Vue Storefront"
          />
          <MoleculesCardDocs
            :description="t('page.documentation.content.sfui')"
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
            :label="t('global.filter.title')"
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

  const { t } = useI18n();

  definePageMeta({
    title: 'i18n:page.documentation.head.title',
  });

  const { appliedFilters } = useIntegrationsList();

  const mobileFiltersOpen = ref(false);
</script>
