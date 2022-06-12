<template>
  <Story title="Content/Component/Information">
    <Variant title="Information Text Box" :init-state="initState">
      <template #default="{ state }">
        <Info :message="state.message" :title="state.title" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.text" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Info from '../../../components/content/Info';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>
