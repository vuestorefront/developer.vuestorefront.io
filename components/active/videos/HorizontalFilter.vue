<template>
  <div class="filter-horizontal">
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 sm:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="focus:ring-primary-500 -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <Suspense>
                    <AtomsIcon name="carbon:close" class="text-3xl" />
                  </Suspense>
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  v-for="section in filters"
                  :key="section.name"
                  v-slot="{ open }"
                  as="div"
                  class="border-t border-gray-200 px-4 py-6"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    >
                      <span class="font-medium text-gray-900">
                        {{ section.name }}
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
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-horizontal-menumobile-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          class="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300"
                        />
                        <label
                          :for="`filter-horizontal-menumobile-${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-500"
                        >
                          {{ option.label }}
                        </label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="filter-horizontal-wrapper">
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" class="sr-only">
          {{ $t('global.filter.title', filters.length) }}
        </h2>
        <div class="filter-horizontal-content">
          <AtomsFilterHorizontalMenuWrapper
            v-if="sortOptions && sortOptions.length > 0"
            v-slot="{ open }"
          >
            <AtomsFilterHorizontalMenuButton :open="open">
              {{ $t('global.filter.sort.title') }}
            </AtomsFilterHorizontalMenuButton>
            <AtomsFilterHorizontalMenuList>
              <AtomsFilterHorizontalMenuItemLink
                v-for="option in sortOptions"
                :key="option.name"
                :icon="option.icon"
                :to="option.to"
              >
                {{ option.label }}
              </AtomsFilterHorizontalMenuItemLink>
            </AtomsFilterHorizontalMenuList>
          </AtomsFilterHorizontalMenuWrapper>

          <AtomsButton
            :shadow="false"
            color="transparent"
            class="sm:hidden"
            @click="open = true"
          >
            {{ $t('global.filter.title', filters.length) }}
          </AtomsButton>

          <AtomsFilterHorizontalPopOverWrapper>
            <AtomsFilterHorizontalPopOverContent
              v-for="(filter, index) in filters"
              :id="`desktop-menu-${filter.id}`"
              :key="filter.id"
              v-slot="{ open }"
            >
              <AtomsFilterHorizontalPopOverButton :open="open">
                {{ filter.name }}
              </AtomsFilterHorizontalPopOverButton>
              <AtomsFilterHorizontalPopOverList>
                <AtomsFilterHorizontalPopOverItemCheckbox
                  v-for="item in filter.options"
                  :key="item"
                  :model-value="item"
                  :checked="filters[index].selected.has(item)"
                  :value="item"
                  :section-id="filter.id"
                  @change="changeFilter(index, item)"
                >
                  {{ item }}
                </AtomsFilterHorizontalPopOverItemCheckbox>
              </AtomsFilterHorizontalPopOverList>
            </AtomsFilterHorizontalPopOverContent>
          </AtomsFilterHorizontalPopOverWrapper>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import { useSortOptions } from '~/composables/filter/base';
  import { useVideosList } from '~/store/videos/videoList';
  import { storeToRefs } from 'pinia';
  import { useI18n } from 'vue-i18n';
  import { debounce } from 'ts-debounce';

  const { sortOptions } = useSortOptions();
  const route = useRoute();
  const router = useRouter();
  const store = useVideosList();
  const i18n = useI18n();

  const { data: videos, filters, selectedFilters } = storeToRefs(store);

  const open = ref(false);

  const fetchData = async () =>
    Promise.all([store.getBaseData(i18n), store.fetch()]);

  const routeDebounce = debounce(router.push, 1500);

  const changeFilter = async (index: number, item: string) => {
    if (store.filters[index].selected.has(item)) {
      store.filters[index].selected.delete(item);
    } else {
      store.filters[index].selected.add(item);
    }

    const { author, category, playlist, ...query } = route.query;

    await routeDebounce({
      name: route.name,
      query: {
        ...query,
        ...selectedFilters.value,
      },
    });
  };

  onBeforeMount(fetchData);

  watch([computed(() => route.query)], fetchData, {
    deep: true,
  });
</script>
