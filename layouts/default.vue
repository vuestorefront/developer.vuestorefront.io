<template>
  <div class="layout layout-background">
    <OrganismsNavigationHeader />
    <main class="content">
      <slot />
    </main>
    <OrganismsNavigationFooter />
  </div>
</template>

<script setup lang="ts">
  usePageHead();
</script>
