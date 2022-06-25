<template>
  <Component :is="baseComponent" v-bind="tagProps">
    <slot
      v-if="$slots.left || (icon === 'left' && !iconOnly)"
      name="left"
      v-bind="{ iconName, icon }"
    >
      <Suspense v-if="iconName">
        <Icon :name="iconName" />
      </Suspense>
    </slot>
    <slot
      v-if="$slots.icon || (icon && iconOnly)"
      name="icon"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon :name="iconName" />
      </Suspense>
    </slot>
    <slot v-if="!iconOnly" :label="label">
      {{ label }}
    </slot>
    <slot v-if="counter" name="counter" :counter="counter">
      <span>{{ counter }}</span>
    </slot>
    <slot
      v-if="$slots.right || (icon === 'right' && !iconOnly)"
      name="right"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon :name="iconName" />
      </Suspense>
    </slot>
  </Component>
</template>

<script lang="ts">
  import Icon from '~/components/atoms/icon/Icon.vue';

  const buttonColors = {
    base: 'button',
    rounded: 'button-rounded',
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
      xs: 'button-xs',
      sm: 'button-sm',
      base: 'button-base',
      lg: 'button-lg',
      xl: 'button-xl',
    },
    icon: {
      base: 'button-icon',
      iconOnly: 'button-icon--only',
      left: 'button-icon--left',
      right: 'button-icon--right',
    },
  };

  const colors = new Set([
    'success',
    'primary',
    'secondary',
    'danger',
    'warning',
    'info',
    'white',
    'transparent',
  ]);
  const sizes = new Set(['xs', 'sm', 'base', 'lg', 'xl']);
  export default {
    name: 'Button',
    components: { Icon },
    inheritAttrs: true,
    props: {
      size: {
        type: String,
        default: 'base',
        validate: (s) => sizes.has(s),
      },
      color: {
        type: String,
        default: 'base',
        validate: (s) => colors.has(s),
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
      },
      disabled: {
        type: Boolean,
      },
      icon: {
        type: [Boolean, String],
        default: false,
        validate: (s) =>
          typeof s === 'boolean' || ['left', 'right'].includes(s),
      },
      iconOnly: {
        type: Boolean,
      },
      iconName: {
        type: String,
      },
      tagProps: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      const buttonClass = computed(() => {
        let baseClass = `${buttonColors.base}`;
        if (props.size > 0) baseClass += ` ${buttonColors.size[props.size]}`;

        if (props.color) baseClass += ` ${buttonColors.color[props.color]}`;

        if (props.outline)
          baseClass += ` ${buttonColors.outline.base} ${
            buttonColors.outline[props.color]
          }`;

        if (props.shadow) baseClass += ` ${buttonColors.shadow.base}`;

        if (props.rounded) baseClass += ` ${buttonColors.rounded}`;

        if (props.disabled) baseClass += ` ${buttonColors.disabled}`;

        if (props.counter) baseClass += ` ${buttonColors.counter.base}`;

        if (props.icon) {
          baseClass += ` ${buttonColors.icon.base}`;

          if (props.iconOnly) baseClass += ` ${buttonColors.icon.iconOnly}`;

          if (props.icon === 'right')
            baseClass += ` ${buttonColors.icon.right}`;

          if (props.icon === 'left') baseClass += ` ${buttonColors.icon.left}`;
        }

        return baseClass;
      });

      const baseComponent = computed(() =>
        h(props.tag, {
          class: buttonClass.value,
          disabled: props.disabled,
        }),
      );
      return {
        baseComponent,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @use 'assets/scss/components/atoms/buttons';
</style>
