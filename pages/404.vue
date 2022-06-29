<template>
  <LazyOrganismsErrorPage :code="404">
    <p>This is not the page you're looking for. But there is always hope.</p>
    <p>
      You can go back to the last page, go to our home page or search for the
      specific topic.
    </p>
  </LazyOrganismsErrorPage>
</template>

<script setup lang="ts">
  const router = useRouter();
</script>
