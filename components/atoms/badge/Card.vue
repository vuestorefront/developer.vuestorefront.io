<template>
  <span class="card-badge" :class="cssClasses">
    <slot>
      {{ badgeLabel }}
    </slot>
  </span>
</template>

<script setup lang="ts">
  import {
    cssPositionClass,
    cssTypeClass,
    typeLabel,
  } from '~/constants/css/atoms/cardBadge';

  const props = withDefaults(
    defineProps<{
      label: string;
      type:
        | 'prod'
        | 'alpha'
        | 'beta'
        | 'wip'
        | 'os'
        | 'enterprise'
        | 'paid'
        | 'custom';
      position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    }>(),
    {
      type: 'wip',
      position: 'top-left',
      label: '',
    },
  );

  const badgeType = computed<string>(() => cssTypeClass[props.type] || '');
  const badgePosition = computed<string>(
    () => cssPositionClass[props.position],
  );

  const badgeLabel = computed<string>(
    () => props.label || typeLabel[props.type] || '',
  );
  const cssClasses = computed<string>(
    () => `${badgeType.value} ${badgePosition.value}`,
  );
</script>
