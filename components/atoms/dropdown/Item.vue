<template>
  <ComponentRender
    @click="$emit('click', { ...$props })"
    @mouseover="$emit('mouseover', { ...$props })"
  />
</template>

<script lang="ts" setup>
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
      slotRender(
        'left',
        iconRender(
          'button-text',
          props?.iconName || props?.iconLeftName,
          !props.iconOnly &&
            !!(props.iconName || props.iconLeftName) &&
            props.icon === 'left',
        ),
        slots,
        props.iconName || props.iconLeftName,
      );

    const slotRight = () =>
      slotRender(
        'right',
        iconRender(
          'button-text',
          props?.iconName || props?.iconRightName,
          !props.iconOnly &&
            !!(props.iconName || props.iconRightName) &&
            props.icon === 'right',
        ),
        slots,
        props.iconName || props.iconRightName,
      );

    const slotIconOnly = () =>
      slotRender(
        'right',
        iconRender(
          'button-text',
          props?.iconName,
          (!props.iconOnly && !!props.iconName) ||
            (typeof props.icon === 'boolean' && props.icon),
        ),
        slots,
        props.iconName || props.iconRightName,
      );

    const slotDefault = () =>
      (slots.default && slots.default()) ||
      labelRender('button-text', props.label || '');

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
        counterRender('counter-label', Number(props.counter), !!props.counter),
        slotRight(),
      ],
    );
  };
</script>
