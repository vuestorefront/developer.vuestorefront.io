<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import { buttonCssClasses } from '~/constants/css/atoms/button';
  import ColorProps from '~/constants/props/color';
  import CounterProps from '~/constants/props/counter';
  import DisabledProps from '~/constants/props/disabled';
  import IconProps from '~/constants/props/icon';
  import LabelProps from '~/constants/props/label';
  import OutlineProps from '~/constants/props/outline';
  import RoundedProps from '~/constants/props/rounded';
  import ShadowProps from '~/constants/props/shadow';
  import SizeProps from '~/constants/props/size';
  import SquareProps from '~/constants/props/square';

  const props = defineProps({
    ...ColorProps,
    ...CounterProps,
    ...DisabledProps,
    ...IconProps,
    ...LabelProps,
    ...OutlineProps,
    ...RoundedProps,
    ...ShadowProps,
    ...SizeProps,
    ...SquareProps,
  });
  const slots = useSlots();

  const {
    baseClass,
    sizeClass,
    colorClass,
    outlineClass,
    shadowClass,
    roundedClass,
    squareClass,
    disabledClass,
    counterClass,
    iconClass,
    slotsClass,
    mergeClasses,
  } = useCssClass({
    cssClasses: buttonCssClasses,
    props,
    slots,
  });

  const cssClass = computed(() =>
    mergeClasses(
      baseClass.value,
      sizeClass.value,
      colorClass.value,
      outlineClass.value,
      shadowClass.value,
      roundedClass.value,
      squareClass.value,
      disabledClass.value,
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
      'div',
      {
        class: cssClass.value,
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
