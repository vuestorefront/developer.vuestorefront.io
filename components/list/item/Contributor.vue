<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="flex flex-row items-center justify-items-start border border-gray-300 rounded-xl px-2 py-1 w-fit hover:bg-gray-300 text-gray-500 dark:text-white hover:text-gray-900 cursor-pointer"
  >
    <div class="avatar mr-2">
      <svg class="svg-hidden">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path
            d="M0.177,0.177 C0.245,0.109,0.278,0.075,0.313,0.053 C0.428,-0.018,0.572,-0.018,0.687,0.053 C0.722,0.075,0.755,0.109,0.823,0.177 C0.891,0.245,0.925,0.278,0.947,0.313 C1,0.428,1,0.572,0.947,0.687 C0.925,0.722,0.891,0.755,0.823,0.823 C0.755,0.891,0.722,0.925,0.687,0.947 C0.572,1,0.428,1,0.313,0.947 C0.278,0.925,0.245,0.891,0.177,0.823 L0.177,0.823 C0.109,0.755,0.075,0.722,0.053,0.687 C-0.018,0.572,-0.018,0.428,0.053,0.313 C0.075,0.278,0.109,0.245,0.177,0.177 L0.177,0.177"
          ></path>
        </clipPath>
      </svg>
    </div>
    <div class="text-base">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name?: string;
    avatar?: string;
    username?: string;
    url?: string;
  }>();

  const avatarBgUrl = computed(() => `url(${props.avatar})`);
</script>

<style lang="scss" scoped>
  .svg-hidden {
    position: absolute;
    width: 0;
    height: 0;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    clip-path: url(#my-clip-path);
    background-repeat: no-repeat;
    background-image: v-bind(avatarBgUrl);
    background-position: center center;
    background-size: cover;
    border-radius: 0 0 0 8px;
  }
</style>
