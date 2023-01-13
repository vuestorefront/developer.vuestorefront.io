<template>
  <div v-if="elements.length > 0">
    <div
      class="mx-auto max-w-7xl py-0 sm:px-6 md:px-4 md:py-12 lg:py-16 lg:px-8"
    >
      <div
        class="lg:grid lg:items-center lg:gap-8"
        :class="{ 'lg:grid-cols-2': message && title }"
      >
        <div
          v-if="message || title"
          :class="direction === 'left' ? 'order-first' : 'order-last'"
        >
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {{ title }}
          </h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-500">
            {{ message }}
          </p>
          <div class="mt-8 sm:flex">
            <AtomsButton
              shadow
              color="primary"
              :label="buttonText"
              :to="buttonLink"
              class="w-full md:w-fit"
            />
          </div>
        </div>
        <div
          class="mt-8 grid content-center items-center justify-center gap-4 lg:mt-0"
          :class="{
            'grid-cols-2 md:grid-cols-3': message && title,
            'grid-cols-3 md:grid-cols-4': !(message && title),
            'order-last': direction === 'left',
            'order-first': direction === 'right',
          }"
        >
          <AtomsBrandsBox
            v-for="brand in elements"
            :key="brand.key"
            v-bind="brand"
            shaped
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IntegrationList } from '~/types/integrations';
  import { addKey } from '~/utils/array';

  const props = withDefaults(
    defineProps<{
      direction?: 'left' | 'right';
      title?: string;
      message?: string;
      buttonText?: string;
      buttonLink?: string;
      brands?: IntegrationList;
    }>(),
    {
      direction: 'left',
      title: '',
      message: '',
      buttonText: '',
      buttonLink: '',
      brands: () => [],
    },
  );

  console.log(props.brands);

  const elements = computed(() => addKey(props.brands));
</script>
