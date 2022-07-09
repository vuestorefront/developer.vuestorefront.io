<template>
  <Link
    class="button-link"
    :class="[size, bold ? 'font-semibold' : 'font-medium']"
    :to="href"
  >
    <Markdown :use="$slots.default" unwrap="p ul li" />

    <template #href>
      <IconExternalLink v-if="blank" class="ml-2 h-4 w-4" />
    </template>
  </Link>
</template>

<script>
  export default defineComponent({
    props: {
      href: {
        type: String,
        default: '',
      },
      blank: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'medium',
      },
      bold: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style lang="postcss" scoped>
  a.button-link {
    @apply inline-flex flex-none items-center rounded-md border border-transparent bg-primary-500 px-3 py-1.5 text-sm leading-4 text-white transition-colors duration-200 hover:bg-primary-600  focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900;

    &.medium {
      @apply px-4 py-2 text-base leading-4;
    }

    &.large {
      @apply px-6 py-2.5 text-lg leading-6;
    }
  }
</style>
