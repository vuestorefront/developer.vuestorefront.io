<template>
  <div class="code-block" :class="{ 'line-counter': !!language }">
    <slot />
    <div class="code-block--attrs">
      <span v-if="filename">[ {{ filename }} ]</span>
      <CopyButton />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '#imports';

  export default defineComponent({
    props: {
      code: {
        type: String,
        default: '',
      },
      language: {
        type: String,
        default: null,
      },
      filename: {
        type: String,
        default: null,
      },
      highlights: {
        type: Array as () => number[],
        default: () => [],
      },
    },
  });
</script>
