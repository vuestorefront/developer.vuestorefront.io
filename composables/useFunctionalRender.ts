import { Suspense, VNode } from 'vue';
import Icon from '~/components/atoms/icon/Icon.vue';

type CssClass = string | string[] | Record<string, boolean>;

export const useFunctionalRender = () => {
  const iconRender = ({
    cssClass = '',
    iconName = '',
    render = false,
  }: {
    cssClass?: CssClass;
    iconName?: string;
    render: boolean;
  }): VNode | Array<VNode> =>
    render && !!iconName
      ? h(
          Suspense,
          h(Icon, {
            class: cssClass,
            name: iconName,
          }),
        )
      : [];

  const labelRender = ({
    cssClass = '',
    content,
  }: {
    cssClass?: CssClass;
    content: string | VNode;
  }): VNode | Array<VNode> =>
    h(
      'span',
      {
        class: cssClass,
      },
      content,
    );

  const counterRender = ({
    cssClass = '',
    counter,
    render = false,
  }: {
    cssClass?: CssClass;
    counter: number;
    render: boolean;
  }): VNode | Array<VNode> =>
    render
      ? h(
          'span',
          {
            class: cssClass,
          },
          counter,
        )
      : [];

  const slotRender = ({
    slotName = '',
    component,
    slots = {},
    slotProps,
  }: {
    slotName: string;
    component: VNode | VNode[];
    slots: Record<string, any>;
    slotProps?: any;
  }): VNode | Array<VNode> =>
    slots[slotName] ? slots[slotName](slotProps) : component;

  return {
    counterRender,
    labelRender,
    iconRender,
    slotRender,
  };
};
