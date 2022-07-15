<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import { buttonCssClasses } from '~/constants/css/atoms/button';
  import { baseColors } from '~/constants/css/base/color';
  import { buttonProps } from './commons/buttonProps';

  const props = defineProps(buttonProps);
  const slots = useSlots();
  const attrs = useAttrs();

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
    bgClass,
    textClass,
  } = useCssClass({
    cssClasses: { ...buttonCssClasses, ...baseColors },
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
      bgClass.value,
    ),
  );

  const { counterRender, slotRender, iconRender, labelRender } =
    useFunctionalRender();

  const slotLeft = () =>
    slotRender({
      slotName: 'left',
      component: iconRender({
        cssClass: [textClass.value || 'button-text', 'button-icon--left'],
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
        cssClass: [textClass.value || 'button-text', 'button-icon--right'],
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
        cssClass: textClass.value || 'button-text',
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
        cssClass: textClass.value || 'button-text',
        content: props.label || '',
      });
    return [];
  };

  const ComponentRender = () => {
    const {
      tagProps,
      tag,
      to,
      href,
      target,
      rel,
      noRel,
      activeClass,
      exactActiveClass,
      replace,
      ariaCurrentValue,
      external,
      custom,
      ...bindProps
    } = props;
    return h(
      to || href ? defineNuxtLink({}) : tag,
      {
        ...(to || href
          ? {
              to,
              href,
              target,
              rel,
              noRel,
              activeClass,
              exactActiveClass,
              replace,
              ariaCurrentValue,
              external,
              custom,
            }
          : {}),
        ...tagProps,
        ...attrs,
        class: [cssClass.value, attrs?.class || ''],
      },
      {
        default: () => [
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
      },
    );
  };
</script>
