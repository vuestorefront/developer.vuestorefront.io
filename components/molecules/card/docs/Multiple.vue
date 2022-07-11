<template>
  <Content v-bind="$props">
    <template #footer>
      <div class="docs-card-footer">
        <small>Available for:</small>
        <div class="docs-card-footer--icons">
          <NuxtLink
            v-for="(doc, index) in docs"
            :key="index"
            :to="doc.link"
            class="doc-icon"
          >
            <img :src="doc.icon" :alt="doc.name" class="h-[34px]" />
          </NuxtLink>
        </div>
      </div>
    </template>
  </Content>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import Content from './Content.vue';

  const props = defineProps<{
    img: string;
    status?: IntegrationStatus;
    license?: IntegrationLicense;
    docs?: {
      link: string;
      disabled?: boolean;
      name: string;
      icon?: string;
    }[];
    repository?:
      | {
          link?: string;
          disabled?: boolean;
        }[]
      | string;
    description?: string;
    name: string;
  }>();
</script>
