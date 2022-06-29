<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import { CssButtonClasses } from '~/constants/types/cssData';
  import Icon from '~/components/atoms/icon/Icon.vue';
  import BaseButtonDefaultProps from '~/components/atoms/buttons/baseButtonDefaultProps';
  import { Suspense } from 'vue';

  const props = defineProps(BaseButtonDefaultProps);
  const slots = useSlots();

  const cssClasses: CssButtonClasses = {
    base: 'button',
    rounded: 'button-rounded',
    square: 'button-square',
    disabled: 'button-disabled',
    color: {
      success: 'button-color--success',
      primary: 'button-color--primary',
      secondary: 'button-color--secondary',
      danger: 'button-color--danger',
      warning: 'button-color--warning',
      info: 'button-color--info',
      white: 'button-color--white',
      transparent: 'button-color--transparent',
    },
    shadow: {
      base: 'shadow-base',
    },
    counter: {
      base: 'button-counter',
    },
    outline: {
      base: 'button-outline',
      color: {
        success: 'button-outline--success',
        primary: 'button-outline--primary',
        secondary: 'button-outline--secondary',
        danger: 'button-outline--danger',
        warning: 'button-outline--warning',
        info: 'button-outline--info',
        white: 'button-outline--white',
        transparent: 'button-outline--transparent',
      },
    },
    size: {
      xs: 'button-size-xs',
      sm: 'button-size-sm',
      base: 'button-size-base',
      lg: 'button-size-lg',
      xl: 'button-size-xl',
    },
    icon: {
      base: 'button-icon',
      iconOnly: 'button-icon--only',
      left: 'button-icon--left',
      right: 'button-icon--right',
    },
  };

  const buttonClass = computed(() => {
    let baseClass = `${cssClasses.base} button-text`;
    if (props?.size) baseClass += ` ${cssClasses.size[props.size]}`;

    if (props.color) baseClass += ` ${cssClasses.color[props.color]}`;

    if (props.outline)
      baseClass += ` ${cssClasses.outline.base} ${
        cssClasses.outline.color[props.color || 'primary']
      }`;

    if (props.shadow) baseClass += ` ${cssClasses.shadow.base}`;

    if (props.rounded) baseClass += ` ${cssClasses.rounded}`;

    if (props.square) baseClass += ` ${cssClasses.square}`;

    if (props.disabled) baseClass += ` ${cssClasses.disabled}`;

    if (props.counter) baseClass += ` ${cssClasses.counter.base}`;

    if (props.icon || slots.right || slots.left) {
      baseClass += ` ${cssClasses.icon.base}`;

      if (props.iconOnly) baseClass += ` ${cssClasses.icon.iconOnly}`;

      if (props.icon === 'right' || slots.right)
        baseClass += ` ${cssClasses.icon.right}`;

      if (props.icon === 'left' || slots.left)
        baseClass += ` ${cssClasses.icon.left}`;
    }

    return baseClass;
  });

  const iconRender = (render = false) =>
    render
      ? h(
          Suspense,
          h(Icon, {
            class: 'button-text',
            name: props.iconName,
          }),
        )
      : [];

  const defaultRender = h(
    'span',
    {
      class: 'button-text',
    },
    props.label,
  );

  const counterRender = (render = false) =>
    render
      ? h(
          'span',
          {
            class: 'counter-label',
          },
          props.counter,
        )
      : [];

  const ComponentRender = () => {
    const slotLeft = (iconName?: string) =>
      (slots.left && slots.left(iconName)) ||
      iconRender(!props.iconOnly && !!props.iconName && props.icon === 'left');

    const slotRight = (iconName?: string) =>
      (slots.right && slots.right(iconName)) ||
      iconRender(!props.iconOnly && !!props.iconName && props.icon === 'right');

    const slotIconOnly = (iconName?: string) =>
      (slots.iconOnly && slots.iconOnly(iconName)) ||
      iconRender(props.iconOnly && !!props.iconName);

    const slotDefault = () =>
      (slots.default && slots.default()) || defaultRender;

    const slotCounter = () =>
      (slots.counter && slots.counter()) || counterRender(!!props.counter);

    return h(
      'div',
      {
        class: buttonClass.value,
      },
      [
        slotLeft(props.iconName),
        slotIconOnly(props.iconName),
        slotDefault(),
        slotCounter(),
        slotRight(props.iconName),
      ],
    );
  };
</script>
