<template>
  <span
    class="inline-flex items-center text-sm"
    :class="`bg-${colors.bg} border-${colors.border} text-${colors.text} ${
      iconOnly
        ? 'font-semibold items-center p-1.5 rounded-full'
        : 'px-2.5 py-0.5 rounded-xl font-medium '
    }`"
  >
    <slot
      v-if="enableIcon"
      name="icon"
      :icon="icon || colors.icon"
      :color="`text-${colors.border}`"
    >
      <Suspense>
        <AtomsIcon
          aria-hidden="true"
          :class="`text-${colors.border} ${iconOnly ? '' : 'mr-2'}`"
          :name="icon || colors.icon"
        />
      </Suspense>
    </slot>
    <span v-if="!iconOnly">2 minutes ago</span>
  </span>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      icon?: string;
      iconOnly?: boolean;
      textOnly?: boolean;
      type?: string;
    }>(),
    { type: 'default', iconOnly: false, textOnly: true },
  );

  const enableIcon = computed(
    () => !props.textOnly || props.icon || props.iconOnly,
  );
  const colors = computed(() => useGetTypeProperties(props.type));
</script>
