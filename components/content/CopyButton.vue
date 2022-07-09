<template>
  <button
    ref="copy"
    class="copy rounded-2xl px-1 py-0.5 text-xl hover:bg-gray-200"
  >
    <Suspense>
      <AtomsIcon
        class="copy-hover:text-gray-900 text-gray-500"
        :class="state === 'copied' ? 'text-primary' : ''"
        :name="state === 'init' ? 'carbon:copy-file' : 'carbon:checkmark'"
      />
    </Suspense>
  </button>
</template>

<script setup lang="ts">
  import Clipboard from 'clipboard';

  const copy = ref();

  const state = ref('init');

  onMounted(() => {
    const copyCode = new Clipboard(copy.value, {
      target(trigger) {
        return trigger.parentElement.previousElementSibling;
      },
    });

    copyCode.on('success', (event) => {
      event.clearSelection();
      state.value = 'copied';
      window.setTimeout(() => {
        state.value = 'init';
      }, 2000);
    });
  });
</script>
