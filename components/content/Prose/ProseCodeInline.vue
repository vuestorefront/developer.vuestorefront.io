<template>
  <code>
    <slot />
  </code>
</template>

<style lang="scss" scoped>
  code {
    @apply rounded-md border border-gray-200 bg-gray-50 px-[6px] py-[3px] text-sm font-normal text-gray-600;
  }

  /* Link with code snippet (NOT in headings) */
  :not(h1, h2, h3, h4) > a code {
    @apply pointer-events-none border-primary-200 bg-primary-50 text-primary-500;
  }

  tbody code {
    @apply inline-flex text-[12px];
  }

  /* Link with code snippet in headings */
  h1 a,
  h2 a,
  h3 a,
  h4 a {
    &:hover {
      & code {
        @apply border-dashed border-gray-400;
      }
    }
    code {
      @apply relative text-xl;
    }
  }
</style>
