<template>
  <Story title="Organisms/Error/Error Page" :init-state="initState">
    <template #default="{ state }">
      <ErrorPage
        :title="state.title"
        :code="state.code"
        :error="state.error"
        :message="state.message"
      />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.title" title="Title" />
      <HstText v-model="state.code" title="Code" />
      <HstTextarea v-model="state.message" title="Message" />
      <HstTextarea v-model="state.error" title="Error" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import ErrorPage from '~/components/organisms/error/ErrorPage.vue';

  function initState() {
    return {
      code: 404,
      title: 'Page not Found',
      message: `This is not the page you're looking for.\n
But there is always hope.\n
You can go back to the last page, go to our home page or search for the specific topic.`,
      error: `Massa fringilla eget torquent sodales ipsum aptent mollis nullam arcu, nisl proin amet consequat taciti placerat ad facilisis pellentesque lobortis, dictum quis purus potenti condimentum nam ligula primis.
      \nEnim tincidunt malesuada diam natoque eget duis fames turpis nostra id venenatis, magna etiam ut quam habitasse placerat semper class vehicula felis.`,
    };
  }
</script>

<docs lang="md">
# Error Page

Base component to render error pages.

```typescript
type Props = {
  code: number | string;
  title: string;
  message: string;
  error: string;
};
```
</docs>
