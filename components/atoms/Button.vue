<template>
  <Component :is="baseComponent">
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
  import Icon from '~/components/icons/Icon.vue';

  export default {
    name: 'Button',
    components: { Icon },
    inheritAttrs: true,
    props: {
      size: {
        type: String,
        default: 'base',
        validate: (s) => ['xs', 'sm', 'base', 'lg', 'xl'].includes(s),
      },
      color: {
        type: String,
        default: 'base',
        validate: (s) =>
          [
            'success',
            'primary',
            'secondary',
            'danger',
            'warning',
            'info',
            'white',
            'transparent',
          ].includes(s),
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
    },
    setup(props) {
      const buttonClass = computed(() => {
        let baseClass = `button button-${props.size} button-state--${props.color}`;
        if (props.outline) baseClass += ` button-outline`;
        if (props.shadow) baseClass += ` shadow-base`;
        if (props.rounded) baseClass += ` button-rounded`;
        if (props.disabled) baseClass += ` button-disabled`;
        if (props.counter) baseClass += ` button-label`;
        if (props.icon) {
          baseClass += ` button-icon`;
          if (props.iconOnly) baseClass += `--only`;
          if (props.icon === 'right') baseClass += `--right`;
          if (props.icon === 'left') baseClass += `--left`;
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

<style lang="scss">
  @use 'assets/scss/components/button/buttons.scss';
  @use 'assets/scss/components/button/buttonColors.scss';
  @use 'assets/scss/components/button/buttonSizes.scss';
</style>
