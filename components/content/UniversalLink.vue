<template>
  <NuxtLink v-if="isInternal" :to="to">
    <slot />
    <slot name="nuxt-link" />
  </NuxtLink>

  <a v-else :href="to" v-bind="linkAttrs">
    <slot />
    <slot name="href" />
  </a>
</template>

<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    /**
     * `true` if `href` points to a static file
     */
    static: {
      type: Boolean,
      default: false,
    },
  });

  const isInternal = computed(
    () =>
      !props.static &&
      props.to &&
      props.to.startsWith('/') &&
      props.to.startsWith('//') === false,
  );

  const linkAttrs = computed(() => ({
    rel: isInternal.value ? undefined : 'noopener nofollow noreferrer',
    target: props.blank ? '_blank' : undefined,
  }));
</script>
