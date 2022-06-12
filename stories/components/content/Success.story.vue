<template>
  <Story title="Content/Component/Success">
    <Variant title="Success Text Box" :init-state="initState">
      <template #default="{ state }">
        <Success :message="state.message" :title="state.title" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.text" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import Success from '../../../components/content/Success';

  function initState() {
    return {
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>
