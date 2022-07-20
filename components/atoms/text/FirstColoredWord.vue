<template>
  <span v-if="titleStyle.firstPart" :class="titleStyle.cssClass.firstPart">
    {{ titleStyle.firstPart }}</span>
  <span v-if="titleStyle.secondPart" :class="titleStyle.cssClass.secondPart">
    {{ titleStyle.secondPart }}</span>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      text?: string;
      firstPart?: string;
      secondPart?: string;
      cssClass?: {
        firstPart: string | string[] | Record<string, string | number>;
        secondPart: string | string[] | Record<string, string | number>;
      };
    }>(),
    { text: '' },
  );
  const slots = useSlots();

  const { firstColoredWord } = useTextStyle();

  const titleStyle = firstColoredWord({
    text: props.text,
    firstPart: props.firstPart,
    secondPart: props.secondPart,
    cssClass: props.cssClass,
  });
</script>
