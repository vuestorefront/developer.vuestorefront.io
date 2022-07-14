<template>
  <Multiple v-if="Array.isArray(documentation)" v-bind="$props" />
  <Single v-else v-bind="$props" />
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { NuxtLinkProps } from '#app';
  import Single from './Single.vue';
  import Multiple from './Multiple.vue';

  const props = defineProps<{
    img: string;
    status?: IntegrationStatus;
    license?: IntegrationLicense;
    documentation?:
      | {
          link: string | NuxtLinkProps;
          disabled?: boolean;
          name: string;
          icon?: string;
        }
      | {
          link: string | NuxtLinkProps;
          disabled?: boolean;
          name: string;
          icon?: string;
        }[]
      | string
      | NuxtLinkProps;
    maintainers?: { name: string; link: string };
    description?: string;
    name: string;
  }>();
</script>
