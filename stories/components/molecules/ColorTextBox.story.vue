<template>
  <Story title="Molecules/Banner/AlertTextBox">
    <Variant title="Color Text Box" :init-state="initState">
      <template #default="{ state }">
        <ColorTextBox
          :icon="state.icon"
          :type="state.type"
          :message="state.message"
          :title="state.title"
        />
      </template>
      <template #controls="{ state }">
        <HstSelect
          v-model="state.type"
          title="Component Type"
          :options="{
            success: 'Success (Green)',
            info: 'Info (Blue)',
            warning: 'Warning (Yellow)',
            danger: 'Danger (Rose)',
          }"
        />
        <HstText v-model="state.icon" title="Icon" />
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.text" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import ColorTextBox from '../../../components/molecules/banner/ColorTextBox';

  function initState() {
    return {
      type: 'success',
      icon: '',
      message: 'This is a colored banner default message',
      title: 'Title',
    };
  }
</script>
