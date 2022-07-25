<template>
  <Story title="Atoms/Brands/Box" :layout="{ type: 'single', iframe: true }">
    <Variant
      v-for="integration in integrationsList"
      :key="integration.name"
      :title="capitalize(integration.name)"
    >
      <AtomsBrandsBox :key="integration.key" v-bind="integration" shaped />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import { capitalize } from '~/utils/string';
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
