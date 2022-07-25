<template>
  <div class="footer-navigation-links--menu-list">
    <div>
      <h3 class="footer-navigation-links--menu-title">
        {{ title }}
      </h3>
      <ul role="list">
        <li v-for="(item, index) in subMenu" :key="index" class="">
          <NuxtLink :to="item.link" :target="item.target || ''" class="group">
            {{ item.title }}
            <AtomsIcon
              v-if="item.iconName"
              :name="item.iconName"
              class="group-hover:text-primary text-gray-400"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  defineProps<{
    title: string;
    subMenu?: {
      title: string;
      link?: RouteLocationRaw;
      iconName?: string;
      target?: string;
    }[];
  }>();
</script>
