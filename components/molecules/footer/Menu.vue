<template>
  <div class="md:grid md:gap-8">
    <div>
      <h3 class="text-sm font-bold text-gray-400 tracking-wider uppercase">
        {{ title }}
      </h3>
      <ul role="list" class="mt-4 space-y-4">
        <li v-for="(item, index) in subMenu" :key="index">
          <NuxtLink :to="item.link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    subMenu?: {
      title: string;
      link: string;
    }[];
  }>();
</script>
