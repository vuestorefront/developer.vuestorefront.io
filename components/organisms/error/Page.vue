<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 md:gap-24 items-center justify-center"
  >
    <div class="text-gray-900">
      <div>
        <h1 class="text-6xl font-semibold">
          <component :is="titleComponent" />
        </h1>
      </div>
      <div>
        <h2 class="text-5xl font-semibold">
          Error <span class="text-secondary-900">{{ code }}</span>
        </h2>
      </div>
      <p class="my-4 text-gray-500">
        <slot>{{ message }}</slot>
      </p>
      <pre
        v-if="error"
        class="bg-gray-200 my-8 flex rounded-xl border border-gray-400 break-words p-3 whitespace-normal"
      >
          {{ error }}
      </pre>
      <div class="flex flex-row gap-4">
        <NuxtLink class="btn btn-primary"> Go Back </NuxtLink>
        <NuxtLink class="btn btn-white"> Go to Home </NuxtLink>
      </div>
    </div>
    <div>
      <img src="/draw/techLife.svg" :alt="`Error ${code}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    code: number | string;
    title: string;
    message?: string;
    error?: string;
  }>();

  const titleComponent = computed(() => {
    const [first, ...words] = props.title.split(' ');
    return h(
      'span',
      {
        class: 'text-primary-500',
      },
      [
        first,
        ...(words.length > 0
          ? [
              ' ',
              h(
                'span',
                {
                  class: 'text-gray-900',
                },
                words.join(' '),
              ),
            ]
          : []),
      ],
    );
  });
</script>
