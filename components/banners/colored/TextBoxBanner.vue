<template>
  <div :class="`colored-banner bg-${data.bg} border-${data.border}`">
    <div class="flex">
      <slot
        name="icon"
        :icon="icon || data.icon"
        :color="`text-${data.border}`"
      >
        <div v-if="!!(icon || data.icon)" class="icon-box">
          <Suspense>
            <Icon
              aria-hidden="true"
              :class="`icon-img text-${data.border}`"
              :name="icon || data.icon"
            />
          </Suspense>
        </div>
      </slot>
      <div>
        <slot name="title" :title="title">
          <h3 :class="`title text-${data.text}`">
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
  import Icon from '../../icons/Icon.vue';

  const props = defineProps<{
    icon?: string;
    title?: string;
    message?: string;
    type?: string;
  }>();

  const data = computed(() => useGetTypeProperties(props.type));
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
