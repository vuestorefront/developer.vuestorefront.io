<template>
  <NuxtLayout name="default">
    <AtomsLayoutContent>
      <AtomsLayoutContainer>
        <MoleculesErrorContent
          title="Ops!"
          :code="error.statusCode"
          :error="error.message"
        >
          <p class="mb-2 text-gray-900">
            This is not the page you're looking for. But there is always hope.
          </p>
          <p>
            You can go back to the last page, go to our home page or search for
            the specific topic.
          </p>
        </MoleculesErrorContent>
      </AtomsLayoutContainer>
    </AtomsLayoutContent>
  </NuxtLayout>
</template>

<script setup lang="ts">
  defineProps({
    error: Object,
  });
  const router = useRouter();
</script>
