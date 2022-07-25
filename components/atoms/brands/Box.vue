<template>
  <AtomsBrandsCommonSimple v-if="typeof link === 'string'" v-bind="$props" />
  <AtomsBrandsCommonDocs v-else v-bind="$props" />
</template>

<script setup lang="ts">
  import { capitalize } from '~/utils/string';
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
