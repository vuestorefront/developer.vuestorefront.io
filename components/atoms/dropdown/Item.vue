<template>
  <ComponentRender
    @click="$emit('click', { ...$props })"
    @mouseover="$emit('mouseover', { ...$props })"
  />
</template>

<script setup lang="ts">
  import CounterProps from '~/constants/props/counter';
  import DisabledProps from '~/constants/props/disabled';
  import IconProps from '~/constants/props/icon';
  import LabelProps from '~/constants/props/label';
  import SizeProps from '~/constants/props/size';
  import SquareProps from '~/constants/props/square';
  import SelectedProps from '~/constants/props/selected';
  import TagProps from '~/constants/props/tag';
  import { dropdownItemCssClasses } from '~/constants/css/atoms/dropdownItem';

  const props = defineProps({
    ...CounterProps,
    ...DisabledProps,
    ...IconProps,
    ...LabelProps,
    ...SizeProps,
    ...SquareProps,
    ...SelectedProps,
    ...TagProps,
  });

  defineEmits(['click', 'mouseover']);

  const attrs = useAttrs();
  const slots = useSlots();
  const {
    baseClass,
    sizeClass,
    counterClass,
    iconClass,
    slotsClass,
    mergeClasses,
  } = useCssClass({
    props,
    slots,
    cssClasses: dropdownItemCssClasses,
  });

  const cssClass = computed(() =>
    mergeClasses(
      baseClass.value,
      sizeClass.value,
      counterClass.value,
      iconClass.value,
      slotsClass.value,
    ),
  );

  const { counterRender, slotRender, iconRender, labelRender } =
    useFunctionalRender();

  const ComponentRender = () => {
    const slotLeft = () =>
      slotRender({
        slotName: 'left',
        component: iconRender({
          iconName: props?.iconName || props?.iconLeftName || '',
          render: !!props.iconLeftName || props.icon === 'left' || !!slots.left,
        }),
        slots,
        slotProps: props.iconName || props.iconLeftName,
      });

    const slotRight = () =>
      slotRender({
        slotName: 'right',
        component: iconRender({
          iconName: props?.iconName || props?.iconRightName || '',
          render:
            !!props.iconRightName || props.icon === 'right' || !!slots.right,
        }),
        slots,
        slotProps: props.iconName || props.iconRightName,
      });

    const slotIconOnly = () =>
      slotRender({
        slotName: 'icon-only',
        component: iconRender({
          iconName: props?.iconName || '',
          render:
            props.iconOnly || (typeof props.icon === 'boolean' && props.icon),
        }),
        slots,
        slotProps: props.iconName || props.iconRightName,
      });

    const slotDefault = () =>
      (slots.default && slots.default()) ||
      labelRender({
        content: props.label || '',
      });

    return h(
      props.tag,
      {
        class: cssClass.value,
        ...props.tagProps,
      },
      [
        slotLeft(),
        slotIconOnly(),
        slotDefault(),
        counterRender({
          cssClass: 'counter-label',
          counter: Number(props.counter),
          render: !!props.counter,
        }),
        slotRight(),
      ],
    );
  };
</script>
