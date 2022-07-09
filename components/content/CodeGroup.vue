<template>
  <div
    ref="codeGroup"
    class="code-group"
    :class="[activeTabIndex === 0 && 'first-tab']"
  >
    <TabsHeader
      ref="tabsHeader"
      :active-tab-index="activeTabIndex"
      :tabs="tabs"
      @update="activeTabIndex = $event"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { isTag } from '~/utils/mdc';
  import TabsHeader from './TabsHeader.vue';

  const slots = useSlots();
  const activeTabIndex = ref(0);
  const counter = ref(0);
  const codeGroup = ref(null);
  const tabsHeader = ref(null);
  const tabs = computed(() =>
    slots
      .default()
      .flat()
      .filter((slot) => isTag(slot, 'code'))
      .map((slot) => {
        const attrs = slot.props || {};
        return {
          label: attrs.filename || 'untitled',
          active: typeof attrs.active !== 'undefined',
        };
      }),
  );

  function updateActiveTab() {
    const index = tabs.value.findIndex((tab) => tab.active);
    activeTabIndex.value = index < 0 ? 0 : index;
  }

  watch(activeTabIndex, (newValue, oldValue) => {
    const t = codeGroup.value.querySelectorAll(
      '.code-group > .code-block, .code-group > .prose .docus-highlight, .code-group > .docus-highlight',
    );
    if (oldValue < t.length) {
      t[oldValue].classList.remove('active');
    }
    t[newValue].classList.add('active');
  });

  /* onUpdated(() => {
    const newTabs = calculateTabs();
    if (JSON.stringify(newTabs) !== JSON.stringify(tabs.value)) {
      // this.counter += 1
      nextTick(() => {
        updateActiveTab();
        // TODO: refactor tabs completely
        tabsHeader.value.updateHighlightUnderlinePosition();
      });
    }
  }); */

  onMounted(() => {
    updateActiveTab();
  });
</script>

<style scoped lang="scss">
  .code-group:deep(pre) {
    @apply rounded-tl-none rounded-tr-none;
  }
  .code-group:deep(> .code-block:not(.active)) {
    display: none;
  }
  .code-group:deep(pre[class*='language-']) {
    @apply mt-0 rounded-t-none;
  }

  .first-tab:deep(.code-block:nth-child(2), .docus-highlight:nth-child(2)) {
    display: block;
  }
</style>
