<template>
  <div class="filter-horizontal-pop-over-item">
    <input
      :id="`filter-horizontal-menu-${itemId}`"
      :name="`${sectionId}[]`"
      :value="value"
      :checked="checked"
      type="checkbox"
      @change="$emit('change', $event.target.value, $event)"
      @input="$emit('update:modelValue', $event.target.value, $event)"
    />
    <label :for="`filter-horizontal-menu-${itemId}`">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
  import { UUID } from '~/utils/uuid';

  withDefaults(
    defineProps<{
      sectionId: string;
      modelValue?: string | boolean | number | null;
      value: string | boolean | number;
      checked: boolean;
      label?: string;
    }>(),
    {
      checked: false,
    },
  );
  defineEmits(['update:modelValue', 'change']);

  const itemId = UUID();
</script>
