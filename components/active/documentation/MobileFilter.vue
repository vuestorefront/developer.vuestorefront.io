<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="$emit('close')">
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
            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-2xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">
                {{ t('global.interface.filters') }}
              </h2>
              <button
                type="button"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                @click="$emit('close')"
              >
                <span class="sr-only">{{ t('global.interface.close') }}</span>
                <Suspense>
                  <AtomsIcon name="carbon:close" class="text-3xl" />
                </Suspense>
              </button>
            </div>
            <form class="mt-4">
              <ActiveDocumentationFilterList />
            </form>
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
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import { useI18n } from 'vue-i18n';

  withDefaults(defineProps<{ open?: boolean }>(), { open: false });

  defineEmits(['close']);

  const { t } = useI18n();
</script>
