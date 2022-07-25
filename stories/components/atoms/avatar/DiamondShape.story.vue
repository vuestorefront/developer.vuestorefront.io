<template>
  <Story title="Atoms/Avatar/Diamond Shape">
    <Variant title="Default">
      <AtomsAvatarDiamondShape
        width="2rem"
        height="2rem"
        img="https://i.pravatar.cc/100"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Avatar Diamond Shape

Component for displaying an avatar image inside a diamond shape

## Props

```typescript
type Props = {
  img: string;
  width?: string; //Default: '2rem'
  height?: string; //Default: '2rem'
};
```
</docs>
