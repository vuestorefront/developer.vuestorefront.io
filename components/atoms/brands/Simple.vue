<template>
  <NuxtLink :to="link">
    <AtomsBrandsContent v-bind="$props" />
  </NuxtLink>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';

  defineProps<{
    name: string;
    logo?: string;
    link: string;
    license?: IntegrationLicense;
    status?: IntegrationStatus;
    color?: string;
  }>();
</script>
