<template>
  <Component
    :is="baseComponent"
    @click="$emit('click', { ...$props })"
    @mouseover="$emit('mouseover', { ...$props })"
  >
    <slot
      v-if="$slots.left || (icon === 'left' && !iconOnly)"
      name="left"
      v-bind="{ iconName, icon }"
    >
      <Suspense v-if="iconName">
        <Icon class="dropdown-item--text" :name="iconName" />
      </Suspense>
    </slot>
    <slot
      v-if="$slots.icon || (icon && iconOnly)"
      name="icon"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon class="dropdown-item--text" :name="iconName" />
      </Suspense>
    </slot>
    <slot v-if="!iconOnly" :label="label">
      <span class="dropdown-item--text">{{ label }}</span>
    </slot>
    <slot v-if="counter" name="counter" :counter="counter">
      <span class="counter-label">{{ counter }}</span>
    </slot>
    <slot
      v-if="$slots.right || (icon === 'right' && !iconOnly)"
      name="right"
      v-bind="{ iconName, icon }"
    >
      <Suspense>
        <Icon class="dropdown-item--text" :name="iconName" />
      </Suspense>
    </slot>
  </Component>
</template>

<script lang="ts">
  import { cssSizes } from '~/constants/cssBaseData';
  import { DropdownItemProps } from '~/constants/types';
  import Icon from '~/components/atoms/icon/Icon.vue';

  const cssClasses: {
    base: string;
    size: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
    counter: {
      base: string;
    };
    icon: {
      base: string;
      iconOnly: string;
      left: string;
      right: string;
    };
  } = {
    base: 'dropdown-item',
    size: {
      xs: 'dropdown-item-size--xs',
      sm: 'dropdown-item-size--sm',
      base: 'dropdown-item-size--base',
      lg: 'dropdown-item-size--lg',
      xl: 'dropdown-item-size--xl',
    },
    counter: {
      base: 'button-counter',
    },
    icon: {
      base: 'button-icon',
      iconOnly: 'button-icon--only',
      left: 'button-icon--left',
      right: 'button-icon--right',
    },
  };

  export default {
    name: 'DropdownItem',
    components: { Icon },
    inheritAttrs: true,
    props: {
      size: {
        type: String,
        default: 'base',
        validate: (s: string) => cssSizes.has(s),
      },
      tag: {
        type: String,
        default: 'a',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      selected: {
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
      counter: {
        type: Number,
        default: 0,
      },
      tagProps: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['click', 'mouseover'],
    setup(props: DropdownItemProps, { slots }) {
      const buttonClass = computed(() => {
        let baseClass = `${cssClasses.base}`;
        if (props?.size) baseClass += ` ${cssClasses.size[props.size]}`;

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
        if (['nuxt-link', 'router-link'].includes(props.tag))
          return h('router-link', {
            class: `${buttonClass.value}`,
            disabled: props.disabled,
            ...props.tagProps,
          });
        return h(props.tag, {
          class: `${buttonClass.value}`,
          disabled: props.disabled,
          selected: props.selected,
          ...props.tagProps,
        });
      });

      return {
        baseComponent,
      };
    },
  };
</script>
