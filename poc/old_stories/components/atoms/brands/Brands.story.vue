<template>
  <Story title="Atoms/Brands/Box" :layout="{ type: 'grid', width: 200 }">
    <Variant
      v-for="(integration, index) in integrationsList"
      :key="integration.name + index"
      :title="capitalize(integration.name)"
    >
      <template>
        <AtomsBrandsBox
          v-for="brand in integration"
          :key="brand.key"
          v-bind="brand"
          shaped
        />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import { integrationsList } from '~/constants/integrations';
</script>

<docs lang="md">
# Badge Tag

Badge component with icon & text

```typescript
export enum IntegrationStatus {
  alpha = 'alpha',
  beta = 'beta',
  prod = 'prod',
  wip = 'wip',
}

export enum IntegrationLicense {
  enterprise = 'enterprise',
  os = 'os',
}

type Props = {
  name: string;
  logo?: string;
  link:
    | string
    | Array<{
        name: string;
        link: string;
        icon: string;
      }>;
  license?: IntegrationLicense;
  status?: IntegrationStatus;
  color?: string;
  shaped?: boolean;
};
```
</docs>
