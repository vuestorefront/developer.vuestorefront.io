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

  const dropdownClass = ref<Dropdown>();

  const baseOptions = {
    placement: 'bottom-start',
    onShow: () => {},
    onHide: () => {},
    ...options.options,
  };
  const initialized = ref<boolean>(false);

  onMounted(() => {
    dropdownClass.value = new Dropdown(baseOptions);
    if (targetEl.value && triggerEl.value) {
      dropdownClass.value.setTarget(targetEl.value);
      dropdownClass.value.setTrigger(triggerEl.value);
      dropdownClass.value.mount();

      initialized.value = true;
    }
  });

  onUnmounted(() => {
    if (initialized.value) {
      dropdownClass.value?.unMount();

      initialized.value = false;
    }
  });

  return {
    isVisible: computed(() => !!dropdownClass.value?.isVisible),
    show: () => dropdownClass.value?.show(),
    hide: () => dropdownClass.value?.hide(),
  };
};
