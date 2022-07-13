<template>
  <Multiple v-if="Array.isArray(docs)" v-bind="$props" />
  <Single v-else v-bind="$props" />
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import Single from './Single.vue';
  import Multiple from './Multiple.vue';

  const props = defineProps<{
    img: string;
    status?: IntegrationStatus;
    license?: IntegrationLicense;
    documentation?:
      | {
          link: string;
          disabled?: boolean;
          name: string;
          icon?: string;
        }
      | {
          link: string;
          disabled?: boolean;
          name: string;
          icon?: string;
        }[]
      | string;
    description?: string;
    name: string;
  }>();
</script>
