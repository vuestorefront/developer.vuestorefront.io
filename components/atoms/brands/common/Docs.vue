<template>
  <AtomsBrandsCommonContent
    v-bind="$props"
    :shaped="shaped"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <template #docs-link>
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <div
          v-show="isHover"
          class="absolute bottom-0 left-0 flex w-fit flex-row gap-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border bg-white p-2"
        >
          <NuxtLink v-for="(doc, index) in link" :key="index" :to="doc.link">
            <img :src="doc.icon" :alt="doc.name" class="h-6" />
          </NuxtLink>
        </div>
      </transition>
    </template>
  </AtomsBrandsCommonContent>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';

  defineProps<{
    name: string;
    logo?: string;
    link: Array<{
      name: string;
      link: string;
      icon: string;
    }>;
    license?: IntegrationLicense;
    status?: IntegrationStatus;
    color?: string;
    shaped?: boolean;
  }>();

  const isHover = ref(false);
</script>
