<template>
  <Story title="Text/Edit Page" :layout="{ type: 'single', iframe: true }">
    <EditPage />
  </Story>
</template>

<script setup lang="ts">
  import EditPage from '~/components/text/EditPage.vue';
</script>

<docs lang="md">
# Edit Page Text

Component for displaying an edit page text with an icon in the end.
</docs>
