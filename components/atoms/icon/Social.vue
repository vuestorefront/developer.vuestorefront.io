<template>
  <NuxtLink v-if="socialIcon" :to="socialIcon.link">
    <span class="sr-only">{{ socialIcon.name }}</span>
    <Suspense>
      <AtomsIcon :name="socialIcon.icon" class="icon--social" />
    </Suspense>
  </NuxtLink>
</template>

<script setup lang="ts">
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
