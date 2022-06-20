<template>
  <div :class="`colored-banner bg-${colors.bg} border-${colors.border}`">
    <div class="flex">
      <slot
        name="icon"
        :icon="icon || colors.icon"
        :color="`text-${colors.border}`"
      >
        <div v-if="!!(icon || colors.icon)" class="icon-box">
          <Suspense>
            <Icon
              aria-hidden="true"
              :class="`icon-img text-${colors.border}`"
              :name="icon || colors.icon"
            />
          </Suspense>
        </div>
      </slot>
      <div>
        <slot name="title" :title="title">
          <h3 :class="`title text-${colors.text}`">
            {{ title }}
          </h3>
        </slot>
        <slot :message="message">
          <div class="message">
            {{ message }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Icon from '~/components/icons/Icon.vue';

  const props = defineProps<{
    icon?: string;
    title?: string;
    message?: string;
    type?: ['default', 'success', 'danger', 'info', 'warning'];
  }>();

  const colors = computed(() => useGetTypeProperties(props.type));
</script>

<style scoped>
  .colored-banner {
    @apply p-4 border-l-4;
    .title {
      @apply m-0 text-base font-medium;
    }
    .message {
      @apply mt-2 text-sm text-gray-900;
    }
    .icon-box {
      @apply flex-shrink-0 mr-3;
      > .icon-img {
        @apply w-auto h-8;
      }
    }
  }
</style>
