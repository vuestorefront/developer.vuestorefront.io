<template>
  <teleport to="body">
    <div
      v-show="open"
      class="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity"
    />
    <div v-show="open" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          ref="modal"
          class="absolute top-1/2 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform transform rounded-lg bg-white text-left shadow-xl transition-all"
        >
          <div class="absolute -top-8 -right-8 hidden sm:block">
            <button
              type="button"
              class="rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              @click="$emit('close', $event)"
            >
              <span class="sr-only">Close</span>
              <Suspense>
                <AtomsIcon name="carbon:close" class="text-3xl" />
              </Suspense>
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <slot name="right-icon">
              <div
                v-if="icon"
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10"
              >
                <Suspense>
                  <AtomsIcon :name="icon" class="text-3xl" />
                </Suspense>
              </div>
            </slot>
            <div class="text-center sm:text-left">
              <slot name="title">
                <h3
                  v-if="title"
                  id="modal-title"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ title }}
                </h3>
              </slot>
              <slot>
                <div v-if="message" class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ message }}
                  </p>
                </div>
              </slot>
            </div>
          </div>
          <slot name="buttons">
            <div
              v-if="buttons"
              class="mt-5 gap-8 sm:mt-4 sm:flex sm:flex-row-reverse"
            >
              <AtomsButtonDefault
                :color="cancelButton.color"
                :label="cancelButton.label"
                @click="onCancel"
              />
              <AtomsButtonDefault
                :color="okButton.color"
                :label="okButton.label"
                @click="onOk"
              />
            </div>
          </slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ColorsEnum } from '~/enums/colors';

  const props = withDefaults(
    defineProps<{
      open: boolean;
      title?: string;
      message?: string;
      icon?: string;
      buttons?: boolean;
      okButton?: Partial<{
        label: string;
        color: ColorsEnum;
        callback: Function;
      }>;
      cancelButton?: Partial<{
        label: string;
        color: ColorsEnum;
        callback: Function;
      }>;
    }>(),
    {
      open: false,
      buttons: false,
      okButton: () => ({
        label: 'Ok',
        color: ColorsEnum.primary,
        callback: () => ({}),
      }),
      cancelButton: () => ({
        label: 'Cancel',
        color: ColorsEnum.white,
        callback: () => ({}),
      }),
    },
  );

  const emit = defineEmits(['close']);
  const modal = ref(null);
  const closeModal = (e: Event) => {
    if (props.open) emit('close', e);
  };

  const onOk = (e: Event) => {
    props.okButton?.callback(e);
    closeModal(e);
  };

  const onCancel = (e: Event) => {
    props.okButton?.callback(e);
    closeModal(e);
  };

  onKeyStroke(
    'Escape',
    (e: Event) => {
      closeModal(e);
    },
    { eventName: 'keyup' },
  );

  onClickOutside(modal, (e: Event) => {
    closeModal(e);
  });
</script>
