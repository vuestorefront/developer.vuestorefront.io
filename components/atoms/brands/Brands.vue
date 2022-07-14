<template>
  <AtomsBrandsSimple v-if="typeof link === 'string'" v-bind="$props" />
  <AtomsBrandsDocs v-else v-bind="$props" />
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';

  defineProps<{
    name: string;
    logo?: string;
    link:
      | string
      | Array<{
          name: string;
          link: string;
          icon: string;
        }>;
    license?: IntegrationLicense;
    status?: IntegrationStatus;
    color?: string;
    shaped?: boolean;
  }>();
</script>
