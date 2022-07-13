<template>
  <Content v-bind="$props" />
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import Content from './Content.vue';

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
      | string;
    description?: string;
    name: string;
  }>();
</script>
