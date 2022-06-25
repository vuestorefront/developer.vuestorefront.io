<template>
  <nav class="pagination">
    <div class="-mt-px w-0 flex-1 flex">
      <slot v-if="currentPage > 1" name="previous">
        <a
          class="pagination arrow-right item"
          @click="goToPage(currentPage - 1, 'pagination:previous')"
        >
          <Suspense>
            <Icon name="carbon:arrow-left" class="mr-2 text-lg" />
          </Suspense>
          Previous
        </a>
      </slot>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <slot
        v-if="pagination.firstPage.ellipsis"
        name="firstPage"
        :first-page="pagination.firstPage"
      >
        <a
          class="pagination item page"
          aria-current="step"
          @click="goToPage(pagination.firstPage.link, 'pagination:switching')"
        >
          …
        </a>
      </slot>
      <slot name="page" :pagination="pagination">
        <a
          v-for="(page, index) in pagination.pages"
          :key="index"
          class="pagination item page"
          :class="{ active: page.active }"
          :aria-current="page.active ? 'page' : 'step'"
          @click="goToPage(page.link, 'pagination:switching')"
        >
          {{ page.page }}
        </a>
      </slot>
      <slot
        v-if="pagination.lastPage.ellipsis"
        name="lastPage"
        :last-page="pagination.lastPage"
      >
        <a
          class="pagination item page"
          aria-current="step"
          @click="goToPage(pagination.lastPage.link, 'pagination:switching')"
        >
          …
        </a>
      </slot>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <slot v-if="currentPage < total" name="next">
        <a
          class="pagination arrow-left item"
          @click="goToPage(currentPage + 1, 'pagination:next')"
        >
          Next
          <Suspense>
            <Icon name="carbon:arrow-right" class="ml-2 text-lg" />
          </Suspense>
        </a>
      </slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import Icon from '~/components/atoms/icon/Icon.vue';

  const props = withDefaults(
    defineProps<{
      total: number;
      numberOfElements?: number;
      pagesToDisplay?: number;
      currentPage?: number;
      pageLinkRule?: (pageNumber: number) => string;
    }>(),
    {
      numberOfElements: 12,
      pagesToDisplay: 6,
      currentPage: 1,
    },
  );

  const emit = defineEmits([
    'pagination:switching',
    'pagination:next',
    'pagination:previous',
  ]);

  const router = useRouter();

  const goToPage = async (link: string, emitType) => {
    emit(emitType, link);
    await router.push({ path: link });
  };

  const pagination = computed(() =>
    usePagination({
      total: props.total,
      numberOfElements: props.numberOfElements,
      pagesToDisplay: props.pagesToDisplay,
      currentPage: props.currentPage,
      pageLinkRule: props.pageLinkRule,
    }),
  );
</script>
