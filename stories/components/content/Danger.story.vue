<template>
  <Story title="Content/Component/Danger">
    <Variant title="Danger Text Box" :init-state="initState">
      <template #default="{ state }">
        <Danger :message="state.message" :title="state.title" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.text" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Danger from '../../../components/content/Danger';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>
