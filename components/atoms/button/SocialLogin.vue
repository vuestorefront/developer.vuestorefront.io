<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import { socialButtonClasses } from '~/constants/css/atoms/button';
  import ButtonContent from '~/components/atoms/button/Content.vue';

  const props = defineProps({
    type: {
      type: String,
      required: true,
      validate: (s: string) =>
        ['facebook', 'twitter', 'github', 'google', 'apple'].includes(s),
    },
  });

  const attrs = useAttrs();
  const ComponentRender = () =>
    h(
      'a',
      {
        ...attrs,
      },
      [
        h(ButtonContent, {
          class: `${socialButtonClasses[props.type].class}`,
          icon: 'left',
          iconName: socialButtonClasses[props.type].icon,
          label: socialButtonClasses[props.type].label,
        }),
      ],
    );
</script>
