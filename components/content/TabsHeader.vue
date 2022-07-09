<template>
  <div class="relative rounded-t-2xl bg-gray-700">
    <div class="relative z-0 px-2">
      <button
        v-for="({ label }, i) in tabs"
        :ref="(el) => tabsRefs.push(el)"
        :key="`${i}${label}`"
        class="xs:py-3 xs:my-0 relative my-1.5 px-3 py-1.5 font-mono text-sm font-medium tracking-tight focus:outline-none"
        :class="[
          activeTabIndex === i
            ? 'active rounded-lg bg-gray-500 text-white'
            : 'text-gray-300',
        ]"
        @click="updateTabs(i)"
      >
        {{ label }}
      </button>
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    tabs: { active: boolean; label: string }[];
    activeTabIndex: number;
  }>();
  const emit = defineEmits(['update']);

  const tabsRefs = ref([]);

  function updateTabs(i) {
    emit('update', i);
  }
</script>
