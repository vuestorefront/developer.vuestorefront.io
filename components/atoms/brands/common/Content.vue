<template>
  <div
    class="relative flex h-32 w-full items-center justify-center rounded-3xl border border-gray-100 transition delay-150 duration-200 ease-in-out will-change-auto hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
    :style="{ backgroundColor: color || 'white' }">
    <slot name="top-badge">
      <AtomsBadgeCard :model="license" :position="BadgePosition.topLeft" :shaped="shaped" />
    </slot>
    <div class="px-2">
      <slot name="logo">
        <img :src="logo" :alt="name" class="h-24 w-full object-contain" />
      </slot>
    </div>
    <slot name="bottom-badge">
      <AtomsBadgeCard :model="status" :position="BadgePosition.bottomRight" :shaped="shaped" />
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
  shaped?: boolean;
}>();
</script>
