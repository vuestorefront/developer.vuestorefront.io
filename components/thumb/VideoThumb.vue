<template>
  <div class="flex items-stretch">
    <div
      aria-hidden="true"
      class="relative h-full w-full object-cover flex items-end justify-start text-left bg-cover bg-center rounded-xl"
      :style="`background-image: url(${image}});`"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="~/assets/images/icons/play-button.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    image: string;
  }>();
</script>
