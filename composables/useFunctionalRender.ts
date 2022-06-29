import { Suspense, VNode } from 'vue';
import Icon from '~/components/atoms/icon/Icon.vue';

type CssClass = string | string[] | Record<string, boolean>;

export const useFunctionalRender = () => {
  const iconRender = (
    cssClass: CssClass,
    iconName = '',
    render = false,
  ): VNode | Array<VNode> =>
    render || !!iconName
      ? h(
          Suspense,
          h(Icon, {
            class: cssClass,
            name: iconName,
          }),
        )
      : [];

  const labelRender = (
    cssClass: CssClass,
    content: string | VNode,
  ): VNode | Array<VNode> =>
    h(
      'span',
      {
        class: cssClass,
      },
      content,
    );

  const counterRender = (
    cssClass: CssClass,
    counter: number,
    render = false,
  ): VNode | Array<VNode> =>
    render
      ? h(
          'span',
          {
            class: cssClass,
          },
          counter,
        )
      : [];

  const slotRender = (
    slotName: string,
    component: VNode | VNode[],
    slots: Record<string, any>,
    slotProps?: any,
  ): VNode | Array<VNode> =>
    (slots[slotName] && slots[slotName](slotProps)) || component;

  return {
    counterRender,
    labelRender,
    iconRender,
    slotRender,
  };
};
