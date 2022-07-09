<template>
  <div :class="`colored-banner bg-${colors.bg} border-${colors.border}`">
    <div class="flex">
      <slot
        name="icon"
        :icon="icon || colors.icon"
        :color="`text-${colors.border}`"
      >
        <div v-if="!!(icon || colors.icon) && !error" class="icon-box">
          <Suspense>
            <AtomsIcon
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
  const props = defineProps<{
    icon?: string;
    title?: string;
    message?: string;
    type?: 'default' | 'success' | 'danger' | 'info' | 'warning';
  }>();

  const colors = computed(() => useGetTypeProperties(props.type));
</script>

<style scoped>
  .colored-banner {
    @apply border-l-4 p-4;
    .title {
      @apply m-0 text-base font-medium;
    }
    .message {
      @apply mt-2 text-sm text-gray-900;
    }
    .icon-box {
      @apply mr-3 flex-shrink-0;
      > .icon-img {
        @apply h-8 w-auto;
      }
    }
  }
</style>
