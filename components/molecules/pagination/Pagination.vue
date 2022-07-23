<template>
  <nav v-if="total > numberOfElements" class="pagination">
    <div class="mt-px flex w-0 flex-1">
      <slot v-if="pagination.previousPage" name="previous">
        <NuxtLink
          class="pagination arrow-right item"
          :to="goToPage(pagination.previousPage.link)"
        >
          <Suspense>
            <AtomsIcon name="carbon:arrow-left" class="mr-2 text-lg" />
          </Suspense>
          {{ $t('components.molecules.pagination.previous') }}
        </NuxtLink>
      </slot>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <slot
        v-if="pagination.firstPage.ellipsis"
        name="firstPage"
        :first-page="pagination.firstPage"
      >
        <NuxtLink
          class="pagination item page"
          aria-current="step"
          :to="goToPage(pagination.firstPage.link)"
        >
          {{ $t('components.molecules.pagination.ellipsis') }}
        </NuxtLink>
      </slot>
      <slot name="page" :pagination="pagination">
        <NuxtLink
          v-for="(page, index) in pagination.pages"
          :key="index"
          class="pagination item page"
          :class="{ active: page.active }"
          :aria-current="page.active ? 'page' : 'step'"
          :to="goToPage(page.link)"
        >
          {{ page.page }}
        </NuxtLink>
      </slot>
      <slot v-if="pagination.lastPage.ellipsis" name="lastPage">
        <NuxtLink
          class="pagination item page"
          aria-current="step"
          :to="goToPage(pagination.lastPage.link)"
        >
          {{ $t('components.molecules.pagination.ellipsis') }}
        </NuxtLink>
      </slot>
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
      <slot v-if="pagination.nextPage" name="next">
        <NuxtLink
          class="pagination arrow-left item"
          :to="goToPage(pagination.nextPage.link)"
        >
          {{ $t('components.molecules.pagination.next') }}
          <Suspense>
            <AtomsIcon name="carbon:arrow-right" class="ml-2 text-lg" />
          </Suspense>
        </NuxtLink>
      </slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      total: number;
      numberOfElements?: number;
      pagesToDisplay?: number;
      currentPage?: number | string;
      pageLinkRule?: (pageNumber: number) => string;
    }>(),
    {
      numberOfElements: 12,
      currentPage: 1,
    },
  );

  const route = useRoute();

  const goToPage = (link: string) => ({
    path: route.path,
    query: { ...route.query, page: link },
  });

  const pagination = computed(() =>
    usePagination({
      total: props.total,
      numberOfElements: props.numberOfElements,
      pagesToDisplay: props.pagesToDisplay,
      currentPage: Number(props.currentPage),
      pageLinkRule: props?.pageLinkRule,
    }),
  );
</script>

<style lang="scss" scoped>
  @use 'assets/scss/components/molecules/pagination';
</style>
