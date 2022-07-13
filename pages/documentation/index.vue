<template>
  <AtomsLayoutContainer>
    <AtomsLayoutContent>
      <h1>Documentation</h1>
      <p class="text-gray-500">
        Netus sem nostra pulvinar rhoncus penatibus ex tortor conubia laoreet
        varius interdum adipiscing integer egestas condimentum, eu etiam cursus
        amet malesuada tellus lacinia fames dis sapien primis hendrerit cubilia.
        Id etiam placerat laoreet hac varius curabitur enim tempus elementum
        lobortis auctor eleifend, facilisi quam lorem justo sem class aptent
        fames ultrices a. Proin in maximus tristique taciti maecenas consequat
        euismod torquent facilisis nostra tempus, nisi semper nunc consectetur
        vestibulum mus tempor sagittis donec dictumst laoreet, sit sapien diam
        scelerisque ultricies potenti montes tellus dictum ullamcorper.
      </p>
      <div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <MoleculesCardDocs
          description="Vivamus ullamcorper integer egestas condimentum sociosqu id risus mi phasellus, habitasse pretium eget fringilla suscipit nunc nascetur."
          documentation="https://docs.vuestorefront.io/v2/"
          img="/brands/icons/vsf.svg"
          name="Vue Storefront"
        />
        <MoleculesCardDocs
          description="Vivamus ullamcorper integer egestas condimentum sociosqu id risus mi phasellus, habitasse pretium eget fringilla suscipit nunc nascetur."
          documentation="https://docs.storefrontui.io/?path=/story/welcome--page"
          img="/brands/icons/sfui.svg"
          name="Storefront UI"
        />
      </div>
      <template v-for="integrations in integrationsList">
        <div v-if="integrations.list.length > 0" :key="integrations.title">
          <h2>{{ integrations.title }}</h2>
          <p class="text-gray-500">
            {{ integrations.description }}
          </p>
          <div
            class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <MoleculesCardDocs
              v-for="brand in integrations.list"
              :key="brand.key"
              :documentation="brand.link"
              :img="brand.logo"
              :name="brand.name"
              :status="brand.status"
              :license="brand.license"
            />
          </div>
        </div>
      </template>
    </AtomsLayoutContent>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { integrationsListByCategory } from '~/constants/integrations';
  import { IntegrationCategory } from '~/enums/integrations';

  const commerceVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.commerce]),
  );

  const cmsVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.cms]),
  );

  const paymentVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.payment]),
  );

  const reviewsVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.reviews]),
  );

  const analyticsVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.analytics]),
  );

  const authVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.auth]),
  );

  const cacheVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.cache]),
  );

  const searchVendors = computed(() =>
    integrationsListByCategory([IntegrationCategory.search]),
  );

  const integrationsList = computed(() => [
    {
      title: 'Commerce Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: commerceVendors.value,
    },
    {
      title: 'CMS Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: cmsVendors.value,
    },
    {
      title: 'Payments Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: paymentVendors.value,
    },
    {
      title: 'Reviews Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: reviewsVendors.value,
    },
    {
      title: 'Analytics Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: analyticsVendors.value,
    },
    {
      title: 'Auth Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: authVendors.value,
    },
    {
      title: 'Cache Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: cacheVendors.value,
    },
    {
      title: 'Search Integrations',
      description:
        'Posuere vel etiam netus nascetur eget finibus nostra porta rutrum donec facilisi est volutpat eros massa, congue curabitur dapibus gravida ut magna sodales natoque ad neque cursus per primis.',
      list: searchVendors.value,
    },
  ]);
</script>
