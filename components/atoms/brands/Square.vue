<template>
  <div
    class="relative flex h-32 w-full items-center justify-center rounded-3xl border-none shadow-sm hover:shadow-lg"
    :style="{ backgroundColor: color || 'white' }"
  >
    <AtomsBadgeCard :model="license" :position="BadgePosition.topLeft" />
    <NuxtLink :to="link" class="px-2">
      <img v-if="logo && !icon" :src="logo" :alt="name" class="w-full" />
      <Suspense>
        <AtomsIcon :name="icon" />
      </Suspense>
    </NuxtLink>
    <AtomsBadgeCard :model="status" :position="BadgePosition.bottomRight" />
  </div>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { BadgePosition } from '~/enums/badge';

  defineProps<{
    name: string;
    logo: string;
    link?: string;
    icon?: string;
    license?: IntegrationLicense;
    status?: IntegrationStatus;
    color?: string;
  }>();
</script>
