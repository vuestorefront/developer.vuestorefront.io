<template>
  <div class="md:grid md:gap-8">
    <div>
      <h3 class="text-sm font-semibold text-gray-700 tracking-wider uppercase">
        {{ title }}
      </h3>
      <ul role="list" class="mt-4 first:mt-0 space-y-4">
        <li
          v-for="(item, index) in subMenu"
          :key="index"
          class="text-base font-medium text-base font-normal text-gray-400 hover:text-primary-600 focus:text-gray-500"
        >
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
