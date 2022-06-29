<template>
  <ComponentRender />
</template>

<script setup lang="ts">
  import ButtonContent from '~/components/atoms/buttons/ButtonContent.vue';
  import BaseButtonDefaultProps from '~/components/atoms/buttons/baseButtonDefaultProps';

  const props = defineProps({
    ...BaseButtonDefaultProps,
    tag: {
      type: String,
      default: 'button',
    },
    tagProps: {
      type: Object,
      default: () => ({}),
    },
  });
  const attrs = useAttrs();
  const slots = useSlots();

  const ComponentRender = () => {
    return h(
      props.tag,
      {
        disabled: props.disabled,
        ...props.tagProps,
        ...attrs,
      },
      [
        h(
          ButtonContent,
          {
            ...props,
          },
          slots,
        ),
      ],
    );
  };
</script>
