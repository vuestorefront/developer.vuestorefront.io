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
      <div class="grid grid-cols-3 space-x-4">
        <MoleculesCardDocs
          description="Vivamus ullamcorper integer egestas condimentum sociosqu id risus mi phasellus, habitasse pretium eget fringilla suscipit nunc nascetur."
          docs="https://docs.vuestorefront.io/v2/"
          img="/brands/icons/vsf.svg"
          name="Vue Storefront"
          repo="https://github.com/vuestorefront/vue-storefront"
        />
      </div>
    </AtomsLayoutContent>
  </AtomsLayoutContainer>
</template>

<script setup lang="ts">
  import { IntegrationLicense, IntegrationStatus } from '~/enums/integrations';
</script>
