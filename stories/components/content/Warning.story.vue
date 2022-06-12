<template>
  <Story title="Content/Component/Warning">
    <Variant title="Warning Text Box" :init-state="initState">
      <template #default="{ state }">
        <Warning :message="state.message" :title="state.title" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.text" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Warning from '../../../components/content/Warning';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>
