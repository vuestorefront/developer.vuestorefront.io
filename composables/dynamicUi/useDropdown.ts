import {
  Dropdown,
  DropdownOptions,
} from '~/composables/dynamicUi/class/dropdown';

export const useDropdown = (options: {
  targetElement: string;
  triggerElement: string;
  options?: DropdownOptions;
}) => {
  const targetEl = computed<HTMLElement | null>(() =>
    document.querySelector(options.targetElement),
  );
  const triggerEl = computed<HTMLElement | null>(() =>
    document.querySelector(options.triggerElement),
  );

  const dropdownInstance = ref<Dropdown>();

  const baseOptions = {
    placement: 'bottom-start',
    onShow: () => {},
    onHide: () => {},
    ...options.options,
  };
  const initialized = ref<boolean>(false);

  onMounted(() => {
    dropdownInstance.value = new Dropdown(baseOptions);
    if (targetEl.value && triggerEl.value) {
      dropdownInstance.value.setTarget(targetEl.value);
      dropdownInstance.value.setTrigger(triggerEl.value);
      dropdownInstance.value.mount();

      initialized.value = true;
    }
  });

  onUnmounted(() => {
    if (initialized.value) {
      dropdownInstance.value?.unMount();

      initialized.value = false;
    }
  });

  return {
    dropdownInstance,
    isVisible: computed(() => !!dropdownInstance.value?.isVisible),
    show: () => dropdownInstance.value?.show(),
    hide: () => dropdownInstance.value?.hide(),
  };
};
