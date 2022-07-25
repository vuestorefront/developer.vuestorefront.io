<template>
  <Story title="Molecules/Card/Docs" :init-state="initState">
    <template #default="{ state }">
      <div style="padding: 10px; width: 320px">
        <MoleculesCardDocs
          :img="state.img"
          :docs="state.docs"
          :repo="state.required"
          :status="state.status"
          :license="state.license"
          :description="state.description"
          :name="state.name"
        />
      </div>
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.name" title="Name" />
      <HstText v-model="state.description" title="Description" />
      <HstText v-model="state.img" title="Logo" />
      <HstSelect
        v-model="state.license"
        title="Project License"
        :options="{
          os: 'Open Source',
          enterprise: 'Enterprise',
          paid: 'Paid',
        }"
      />
      <HstSelect
        v-model="state.status"
        title="Badge Status"
        :options="{
          prod: 'Production',
          alpha: 'Alpha',
          beta: 'Beta',
          wip: 'In progress',
        }"
      />
      <HstText v-model="state.docs.link" title="Docs Link" />
      <HstCheckbox v-model="state.docs.disabled" title="Docs Disabled" />
      <HstText v-model="state.repo.link" title="Repo Link" />
      <HstCheckbox v-model="state.repo.disabled" title="Repo Disabled" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  function initState() {
    return {
      img: 'https://picsum.photos/600/600/?blur',
      status: 'beta',
      license: 'os',
      docs: {
        link: '#',
        disabled: false,
      },
      repo: {
        link: '#',
        disabled: false,
      },
      name: 'Est ipsum',
      description:
        'Felis efficitur duis dictum luctus pulvinar himenaeos dis fames condimentum, sagittis laoreet adipiscing ut dapibus ac habitasse nibh, justo magna etiam sodales ex facilisis posuere nascetur.',
    };
  }
</script>

<docs lang="md">
# Blog Card

Card for displaying a resumed version of a blog post

```typescript
type Props = {
  author: {
    name: string;
    link: string;
    avatar: string;
  };
  date: Date | number;
  description: string;
  image: string;
  link: string;
  title: string;
};
```
</docs>
