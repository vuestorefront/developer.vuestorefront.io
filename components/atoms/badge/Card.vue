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
    cardBadgeCssClasses,
    cardBadgeLabel,
  } from '~/constants/css/atoms/cardBadge';
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { BadgePosition } from '~/enums/badge';

  const props = withDefaults(
    defineProps<{
      label?: string;
      model: IntegrationStatus | IntegrationLicense;
      position: BadgePosition;
    }>(),
    {
      model: IntegrationStatus.wip,
      position: BadgePosition.topLeft,
      label: '',
    },
  );

  const baseClass = computed<string>(
    () => cardBadgeCssClasses[props.model] || '',
  );

  const badgePosition = computed<string>(
    () => cssPositionClass[props.position],
  );

  const badgeLabel = computed<string>(
    () => props.label || cardBadgeLabel[props.model] || '',
  );
  const cssClasses = computed<string>(
    () => `${baseClass.value} ${badgePosition.value}`,
  );
</script>
