<template>
  <template v-for="integration in integrations">
    <section
      v-if="Array.isArray(integration.list) && integration.list.length > 0"
      :id="integration.type"
      :key="integration.title"
    >
      <h2>{{ integration.title }}</h2>
      <p class="text-gray-500">
        {{ integration.description }}
      </p>
      <div class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MoleculesCardDocs
          v-for="(ext, index) in integration.list"
          :key="ext.name + index"
          :documentation="ext.link"
          :img="ext.logo"
          :name="ext.name"
          :status="ext.status"
          :license="ext.license"
          :maintainers="ext.maintainedBy"
        />
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
  import { useIntegrationsList } from '~/store/documentation/integrationsList';
  import { storeToRefs } from 'pinia';

  const store = useIntegrationsList();

  const { integrations, filterParams } = storeToRefs(store);

  onBeforeMount(async () => store.fetch());

  watch(filterParams, async () => store.fetch(), { deep: true });
</script>
