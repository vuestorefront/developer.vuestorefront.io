<template>
  <p class="align-middle text-base leading-8 text-gray-500 dark:text-white">
    <slot>Edit this page on GitHub</slot>
    <Suspense>
      <AtomsIcon name="carbon:edit" class="ml-2 mb-1 text-lg" />
    </Suspense>
  </p>
</template>
