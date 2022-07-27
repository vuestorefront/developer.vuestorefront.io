<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40 sm:hidden" @close="$emit('close')">
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
              <h2 class="text-lg font-medium text-gray-900">
                {{ t('global.filter.title', filters.length) }}
              </h2>
              <button
                type="button"
                class="focus:ring-primary-500 -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2"
                @click="$emit('close')"
              >
                <span class="sr-only">{{ t('global.interface.close') }}</span>
                <Suspense>
                  <AtomsIcon name="carbon:close" class="text-3xl" />
                </Suspense>
              </button>
            </div>

            <Disclosure
              v-for="(filter, index) in filters"
              :key="filter.id"
              v-slot="{ open }"
              as="div"
              class="border-b border-gray-200 px-4 py-6"
            >
              <h3 class="-mx-2 -my-3 flow-root">
                <DisclosureButton
                  class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                >
                  <span class="font-medium text-gray-900">
                    {{ filter.name }}
                    <AtomsBadgeTag v-if="getCounter(filter.id)" type="gray">
                      {{ getCounter(filter.id) }}
                    </AtomsBadgeTag>
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
                <div class="space-y-2">
                  <div
                    v-for="item in filter.options"
                    :key="item"
                    class="flex items-center"
                  >
                    <AtomsFormCheckbox
                      :model-value="item"
                      :checked="filters[index].selected.has(item)"
                      :value="item"
                      :section-id="filter.id"
                      @change="changeFilter(index, item)"
                    >
                      {{ item }}
                    </AtomsFormCheckbox>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
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
  import { useVideosFilter } from '~/composables/filter/useVideosFilter';
  import { useI18n } from 'vue-i18n';

  withDefaults(defineProps<{ open: boolean }>(), { open: false });
  defineEmits(['close']);

  const { t } = useI18n();

  const { changeFilter, filters, getCounter } = useVideosFilter();
</script>
