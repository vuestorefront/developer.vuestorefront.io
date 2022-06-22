<template>
  <Story title="Nuxt Content/Prose/Blockquote" :init-state="initState">
    <template #default="{ state }">
      <Blockquote>
        {{ state.quote }}
      </Blockquote>
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.quote" title="Message" />
    </template>
  </Story>
</template>

<script setup lang="ts">
  import Blockquote from '~/components/content/Prose/ProseBlockquote.vue';

  function initState() {
    return {
      quote:
        'Porttitor aliquet risus nisl odio posuere torquent nibh massa tempus etiam, conubia ultricies inceptos rhoncus nam ad sapien lectus.',
    };
  }
</script>

<docs lang="md">
# Blockquote MD Prose

[Nuxt Content](https://content.nuxtjs.org/) MD Prose for Blockquote HTML element
</docs>
