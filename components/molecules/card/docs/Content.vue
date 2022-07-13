<template>
  <div class="docs-card">
    <slot name="badge">
      <div v-if="license || status" class="docs-card-badge">
        <AtomsBadgeCard v-if="license" :model="license" position="top-left" />
        <AtomsBadgeCard v-if="status" :model="status" position="top-right" />
      </div>
    </slot>
    <div class="docs-card-content">
      <slot name="image">
        <div class="docs-card-image">
          <img :src="img" />
        </div>
      </slot>
      <slot name="title">
        <h3 class="docs-card-title">{{ name }}</h3>
      </slot>
      <slot name="description">
        <p class="docs-card-description">{{ description }}</p>
      </slot>
    </div>
    <slot name="footer">
      <div class="docs-card-footer docs-card-footer--buttons">
        <AtomsButtonLink
          color="white"
          icon="left"
          icon-name="carbon:document"
          square
          label="Documentation"
          v-bind="buttonProps"
        />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';

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

  const buttonProps = computed(() => ({
    to:
      typeof props.documentation === 'object'
        ? props.documentation.link
        : props.documentation,
    target: '_blank',
    disabled: props.documentation?.disabled || !props.documentation,
  }));
</script>
