<template>
  <span class="card-badge" :class="cssClasses">
    <slot>
      {{ badgeLabel }}
    </slot>
  </span>
</template>

<script setup lang="ts">
  import {
    cardBadgeCssClasses,
    cardBadgeLabel,
    cssPositionClass,
    cssShapedClass,
  } from '~/components/atoms/badge/common/cssClasses';
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { BadgePosition } from '~/enums/badge';

  const props = withDefaults(
    defineProps<{
      label?: string;
      model?: IntegrationStatus | IntegrationLicense;
      position?: BadgePosition;
      shaped?: boolean;
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

  const badgePosition = computed<string>(() =>
    props.shaped
      ? cssShapedClass[props.position]
      : cssPositionClass[props.position],
  );

  const badgeLabel = computed<string>(
    () => props.label || cardBadgeLabel[props.model] || '',
  );

  console.log(props, 'props');
  const cssClasses = computed<string>(
    () => `${baseClass.value} ${badgePosition.value}`,
  );
</script>
