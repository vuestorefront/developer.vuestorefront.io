<template>
  <Story title="Atoms/Badge/Card" :layout="{ type: 'single', iframe: true }">
    <Variant
      v-for="(type, index) in status"
      :key="type + index"
      :title="`Status: ${capitalize(type)}`"
    >
      <AtomsBadgeCard :model="type" />
    </Variant>
    <Variant
      v-for="(type, index) in license"
      :key="type + index"
      :title="`Status: ${capitalize(type)}`"
    >
      <AtomsBadgeCard :model="type" />
    </Variant>
    <Variant
      v-for="(type, index) in position"
      :key="type + index"
      :title="`Position Shaped: ${capitalize(type)}`"
    >
      <AtomsBadgeCard :position="type" model="os" shaped />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import { capitalize } from '~/utils/string';
  import { randomElements } from '~/utils/array';

  const status = ['alpha', 'beta', 'wip'];

  const license = ['enterprise', 'os'];

  const position = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'bottom',
    'top',
  ];

  const positionRandomData = () =>
    randomElements([...status, ...license], 1).pop();
</script>

<docs lang="md">
# Badge Card Tag

Badge component to be using inside a card to display the status, license or custom information.

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

export enum BadgePosition {
  topLeft = 'top-left',
  topRight = 'top-right',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  bottom = 'bottom',
  top = 'top',
}

type Props = {
  label?: string;
  model: IntegrationStatus | IntegrationLicense; //Default: 'wip' | IntegrationStatus.wip
  position: BadgePosition; //Default: 'topLeft' | BadgePosition.topLeft
  shaped?: boolean;
};
```
</docs>
