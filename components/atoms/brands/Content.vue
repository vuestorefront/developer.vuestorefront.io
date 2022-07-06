<template>
  <div
    class="relative flex h-32 w-full items-center justify-center rounded-3xl border-none shadow-sm hover:shadow-lg"
    :style="{ backgroundColor: color || 'white' }"
  >
    <slot name="top-badge">
      <AtomsBadgeCard :model="license" :position="BadgePosition.topLeft" />
    </slot>
    <div class="px-2">
      <slot name="logo">
        <img :src="logo" :alt="name" class="w-full" />
      </slot>
    </div>
    <slot name="bottom-badge">
      <AtomsBadgeCard :model="status" :position="BadgePosition.bottomRight" />
    </slot>
    <slot name="docs-link" />
  </div>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { BadgePosition } from '~/enums/badge';

  defineProps<{
    name: string;
    logo?: string;
    license?: IntegrationLicense;
    status?: IntegrationStatus;
    color?: string;
    icon?: string;
  }>();
</script>
