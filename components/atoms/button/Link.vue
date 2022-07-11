<template>
  <NuxtLink class="button" v-bind="nuxtLink">
    <AtomsButtonContent v-bind="$props" />
  </NuxtLink>
</template>

<script setup lang="ts">
  import ColorProps from '~/constants/props/color';
  import CounterProps from '~/constants/props/counter';
  import DisabledProps from '~/constants/props/disabled';
  import IconProps from '~/constants/props/icon';
  import LabelProps from '~/constants/props/label';
  import OutlineProps from '~/constants/props/outline';
  import RoundedProps from '~/constants/props/rounded';
  import ShadowProps from '~/constants/props/shadow';
  import SizeProps from '~/constants/props/size';
  import SquareProps from '~/constants/props/square';
  import ButtonContent from '~/components/atoms/button/Content.vue';
  import { NuxtLinkProps } from '~/constants/props/nuxtLink';

  const props = defineProps({
    ...ColorProps,
    ...CounterProps,
    ...DisabledProps,
    ...IconProps,
    ...LabelProps,
    ...OutlineProps,
    ...RoundedProps,
    ...ShadowProps,
    ...SizeProps,
    ...SquareProps,
    ...NuxtLinkProps,
  });
  const attrs = useAttrs();
  const slots = useSlots();
</script>
