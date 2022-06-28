<template>
  <Component :is="baseComponent" v-bind="tagProps">
    <slot
      v-if="$slots.left || (icon === 'left' && !iconOnly)"
      name="left"
      v-bind="{ iconName, icon }"
    >
      <Suspense v-if="iconName">
        <Icon class="button-text" :name="iconName" />
      </Suspense>
    </slot>
    <slot
      v-if="$slots.icon || (icon && iconOnly)"
      name="icon"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon class="button-text" :name="iconName" />
      </Suspense>
    </slot>
    <slot v-if="!iconOnly" :label="label">
      <span class="button-text">{{ label }}</span>
    </slot>
    <slot name="counter" :counter="counter">
      <span v-if="counter" class="counter-label">{{ counter }}</span>
    </slot>
    <slot
      v-if="$slots.right || (icon === 'right' && !iconOnly)"
      name="right"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon class="button-text" :name="iconName" />
      </Suspense>
    </slot>
  </Component>
</template>

<script lang="ts">
  import { cssColors, cssSizes } from '~/constants/cssBaseData';
  import { ButtonProps } from '~/constants/types';
  import { CssButtonClasses } from '~/constants/types/cssData';
  import Icon from '~/components/atoms/icon/Icon.vue';
  import { NuxtLink } from '#components';

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

  export default {
    name: 'Button',
    components: { Icon },
    inheritAttrs: true,
    props: {
      size: {
        type: String,
        default: 'base',
        validate: (s: string) => cssSizes.has(s),
      },
      color: {
        type: String,
        default: 'primary',
        validate: (s: string) => cssColors.has(s),
      },
      outline: {
        type: Boolean,
        default: false,
      },
      shadow: {
        type: Boolean,
        default: false,
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      square: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      tag: {
        type: String,
        default: 'button',
      },
      counter: {
        type: Number,
        default: 0,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: [Boolean, String],
        default: false,
        validate: (s: string | boolean) =>
          typeof s === 'boolean' || ['left', 'right'].includes(s),
      },
      iconOnly: {
        type: Boolean,
        default: false,
      },
      iconName: {
        type: String,
        default: '',
      },
      tagProps: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props: ButtonProps, { slots }) {
      const buttonClass = computed(() => {
        let baseClass = `${cssClasses.base}`;
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

      const baseComponent = computed(() => {
        if (props.tag === 'nuxt-link')
          return h(NuxtLink, {
            class: `${buttonClass.value} button-text`,
            disabled: props.disabled,
            ...props.tagProps,
          });
        return h(props.tag, {
          class: `${buttonClass.value} button-text`,
          disabled: props.disabled,
          ...props.tagProps,
        });
      });
      return {
        baseComponent,
      };
    },
  };
</script>
