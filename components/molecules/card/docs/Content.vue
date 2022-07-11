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
          v-if="!buttonProps.docs?.disabled"
          color="white"
          icon="left"
          icon-name="carbon:document"
          square
          label="Docs"
          v-bind="buttonProps.docs"
        />
        <AtomsButtonLink
          v-if="!buttonProps.repository?.disabled"
          color="white"
          icon="left"
          icon-name="carbon:logo-github"
          square
          label="Repository"
          v-bind="buttonProps.repository"
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
    docs?:
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
    repository?:
      | {
          link?: string;
          disabled?: boolean;
        }
      | string;
    description?: string;
    name: string;
  }>();

  const buttonProps = computed(() => ({
    link: {
      to: typeof props.docs === 'object' ? props.docs.link : props.docs,
      target: '_blank',
      disabled: props.docs?.disabled || !props.docs,
    },
    repository: {
      to:
        typeof props.repository === 'object'
          ? props.repository.link
          : props.repository,
      target: '_blank',
      disabled: props.repository?.disabled || !props.repository,
    },
  }));
</script>
