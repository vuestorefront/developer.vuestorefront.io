<template>
  <span
    class="tag-badge"
    :class="`${cssColors} ${
      iconOnly ? 'tag-badge-icon--only' : 'tag-badge-icon--none'
    }`"
  >
    <slot v-if="enableIcon" name="icon">
      <Icon
        aria-hidden="true"
        class="text-sm"
        :class="`${iconColors} ${iconOnly ? '' : 'mr-2'}`"
        :name="icon || iconName"
      />
    </slot>
    <span v-if="!iconOnly">
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
  import { ColorTypeName } from '~/enums/colors';
  import {
    TagBadgeColorClass,
    TagBadgeIconColorClass,
  } from '~/components/atoms/badge/common/cssClasses';
  import { IconTypeName } from '~/enums/icons';

  const props = withDefaults(
    defineProps<{
      icon?: string;
      iconOnly?: boolean;
      type?: ColorTypeName;
    }>(),
    {
      type: ColorTypeName.default,
      iconOnly: false,
    },
  );

  const cssColors = computed(() => TagBadgeColorClass[props.type]);
  const iconColors = computed(() => TagBadgeIconColorClass[props.type]);
  const enableIcon = computed(
    () => props.icon || props.iconOnly || !!iconColors.value,
  );

  const iconName = computed(() => {
    switch (props.type) {
      case ColorTypeName.success: {
        return IconTypeName.success;
      }
      case ColorTypeName.info: {
        return IconTypeName.info;
      }
      case ColorTypeName.warning: {
        return IconTypeName.warning;
      }
      case ColorTypeName.danger: {
        return IconTypeName.danger;
      }
      case ColorTypeName.default: {
        return IconTypeName.default;
      }
      default: {
        return IconTypeName.default;
      }
    }
  });
</script>
