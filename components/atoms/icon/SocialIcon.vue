<template>
  <NuxtLink
    v-if="socialIcon"
    :to="socialIcon.link"
    class="text-gray-400 hover:text-gray-500"
  >
    <span class="sr-only">{{ socialIcon.name }}</span>
    <Suspense>
      <Icon :name="socialIcon.icon" class="social-icon" />
    </Suspense>
  </NuxtLink>
</template>

<script setup lang="ts">
  import Icon from '~/components/atoms/icon/Icon.vue';
  import { SocialIcon, socialList } from '~/constants/socialList';

  const props = defineProps<{
    name: string;
  }>();

  const socialIcon = computed<SocialIcon[] | undefined>(() =>
    socialList.find((item) =>
      item.alias.includes(
        props.name.replace(/[^\d A-Za-z]/g, '').toLowerCase(),
      ),
    ),
  );
</script>

<style scoped>
  .social-icon {
    font-size: 24px;
    line-height: 1em;
  }
</style>
