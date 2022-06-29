<template>
  <div class="docs-card">
    <div class="docs-card-badge">
      <AtomsBadgeCard :type="license" position="top-left" />
      <AtomsBadgeCard :type="status" position="top-right" />
    </div>
    <div class="docs-card-content">
      <div class="docs-card-image">
        <img :src="img" />
      </div>
      <h4 class="docs-card-title">{{ name }}</h4>
      <p class="docs-card-description">{{ description }}</p>
    </div>
    <div class="docs-card-footer">
      <AtomsButtonDefault
        tag="nuxt-link"
        :tag-props="{ to: docs.link }"
        :disabled="docs.disabled"
        label="Docs"
      />
      <AtomsButtonDefault
        tag="nuxt-link"
        :tag-props="{ to: repo.link }"
        :disabled="repo.disabled"
        label="Repo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    img: string;
    status: 'prod' | 'alpha' | 'beta' | 'wip';
    license: 'os' | 'enterprise' | 'paid';
    docs?: {
      link?: string;
      disabled?: boolean;
    };
    repo?: {
      link?: string;
      disabled?: boolean;
    };
    description: string;
    name: string;
  }>();
</script>
