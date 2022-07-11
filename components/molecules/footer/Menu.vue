<template>
  <div class="footer-navigation-links--menu-list">
    <div>
      <h3 class="footer-navigation-links--menu-title">
        {{ title }}
      </h3>
      <ul role="list">
        <li v-for="(item, index) in subMenu" :key="index" class="">
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
