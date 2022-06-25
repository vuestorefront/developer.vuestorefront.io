<template>
  <Story title="Atoms/Avatar/Diamond Shape" :init-state="initState">
    <template #default="{ state }">
      <DiamondShape
        :width="state.width"
        :height="state.height"
        :img="state.img"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.width" title="Width" />
      <HstText v-model="state.height" title="Height" />
      <HstText v-model="state.img" title="Image URL" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import DiamondShape from '~/components/atoms/avatar/DiamondShape.vue';

  function initState() {
    return {
      width: '2rem',
      height: '2rem',
      img: 'https://i.pravatar.cc/100',
    };
  }
</script>

<docs lang="md">
# Avatar Diamond Shape

Component for displaying an avatar image inside a diamond shape
</docs>
