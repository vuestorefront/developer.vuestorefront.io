<template>
  <div class="docs-card group">
    <div class="docs-card-content">
      <slot name="image">
        <div class="docs-card-image">
          <img :src="img" :alt="name" class="docs-card-image--img" />
        </div>
      </slot>
    </div>
    <slot name="badge">
      <div v-if="license || status" class="docs-card-badge">
        <AtomsBadgeCard v-if="license" :model="license" position="bottom" />
        <AtomsBadgeCard v-if="status" :model="status" position="bottom" />
      </div>
    </slot>
    <slot name="information">
      <div class="docs-card-information">
        <h3 class="docs-card-information--title">{{ name }}</h3>
        <p class="docs-card-information--description">{{ description }}</p>
        <p
          v-if="maintainers && maintainers.length > 0"
          class="docs-card-information--maintainer"
        >
          Maintained by:
          <span v-for="(maintainer, index) in maintainers" :key="index">
            <NuxtLink
              :to="maintainer.link"
              target="_blank"
              class="docs-card-information--maintainer-link"
            >
              {{ maintainer.name }}</NuxtLink>
          </span>
        </p>
      </div>
    </slot>
    <slot name="footer">
      <div class="docs-card-footer docs-card-footer--buttons">
        <AtomsButton
          color="white"
          icon="left"
          icon-name="carbon:document"
          size="sm"
          outline
          label="Documentation"
          :to="
            typeof props.documentation === 'object'
              ? props.documentation.link
              : props.documentation
          "
          target="_blank"
          :disabled="props.documentation?.disabled || !props.documentation"
        />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
  import { NuxtLinkProps } from '#app';

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
      | string;
    maintainers?: { name: string; link: string };
    description?: string;
    name: string;
  }>();
</script>
