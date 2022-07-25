<template>
  <NuxtLink :to="link">
    <AtomsBrandsCommonContent v-bind="$props" :shaped="shaped" />
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
    shaped?: boolean;
  }>();
</script>
