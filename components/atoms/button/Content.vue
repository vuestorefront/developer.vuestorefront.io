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

  const slotLeft = () =>
    slotRender({
      slotName: 'left',
      component: iconRender({
        cssClass: 'button-text',
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
        cssClass: 'button-text',
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
        cssClass: 'button-text',
        iconName: props?.iconName || '',
        render:
          props.iconOnly || (typeof props.icon === 'boolean' && props.icon),
      }),
      slots,
      slotProps: props.iconName || props.iconRightName,
    });

  const slotDefault = () => {
    if (slots.default) return slots.default();
    if (props.label)
      return labelRender({
        cssClass: 'button-text',
        content: props.label || '',
      });
    return [];
  };

  const ComponentRender = () => {
    return h(
      'div',
      {
        class: cssClass.value,
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
