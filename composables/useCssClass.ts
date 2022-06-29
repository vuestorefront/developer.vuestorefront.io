import {
  CssBaseClasses,
  CssColorClasses,
  CssCounterClasses,
  CssIconClasses,
  CssOutlineClasses,
  CssShadowClasses,
  CssSizeClasses,
  CssSlotsClasses,
} from '~/constants/css/types/cssDataTypes';
import {
  BaseCounterProps,
  BaseCustomItemProps,
  BaseIconProps,
  BaseOptionsItemProps,
  BaseSizeProps,
  BaseTagProps,
  BaseVisualProps,
} from '~/constants/props/types/basePropTypes';

type CssClasses = Partial<
  CssSizeClasses &
    CssCounterClasses &
    CssIconClasses &
    CssSlotsClasses &
    CssColorClasses &
    CssOutlineClasses &
    CssShadowClasses &
    CssBaseClasses
>;

type PropsTypes = Partial<
  BaseCustomItemProps &
    BaseOptionsItemProps &
    BaseTagProps &
    BaseSizeProps &
    BaseCounterProps &
    BaseVisualProps &
    BaseIconProps
>;
export const useCssClass = ({
  props,
  slots,
  cssClasses,
}: {
  props: PropsTypes;
  slots: Record<string, any>;
  cssClasses: CssClasses;
}) => {
  const baseClass = computed<string>(() => cssClasses?.base || '');

  const sizeClass = computed<string>(
    () =>
      // eslint-disable-next-line unicorn/explicit-length-check
      `${props.size ? cssClasses?.size[props.size] || '' : ''}`,
  );

  const colorClass = computed<string>(
    () => `${props.color ? cssClasses?.color[props.color] || '' : ''}`,
  );

  const outlineClass = computed<string>(
    () =>
      `${
        props.outline
          ? `${cssClasses?.outline?.base || ''} ${
              cssClasses?.outline?.color[props.color || 'primary'] || ''
            }`
          : ''
      }`,
  );

  const shadowClass = computed<string>(
    () => `${props.shadow ? cssClasses?.shadow?.base || '' : ''}`,
  );

  const roundedClass = computed<string>(
    () => `${props.rounded ? cssClasses?.rounded || '' : ''}`,
  );

  const squareClass = computed<string>(
    () => `${props.square ? cssClasses?.square || '' : ''}`,
  );

  const disabledClass = computed<string>(
    () => `${props.disabled ? cssClasses?.disabled || '' : ''}`,
  );

  const counterClass = computed<string>(
    () => `${props.counter ? cssClasses?.counter?.base || '' : ''}`,
  );

  const iconClass = computed<string>(() => {
    let base = `${cssClasses?.icon?.base || ''} `;

    if (props.iconOnly) base += cssClasses?.icon?.iconOnly || '';

    if (props.icon === 'right')
      base += `${base} ${cssClasses?.icon?.right || ''} `;

    if (props.icon === 'left')
      base += `${base} ${cssClasses?.icon?.left || ''} `;

    return base;
  });

  const slotsClass = computed(() => {
    let base = '';
    if (slots.right) base += cssClasses?.slots?.right || '';

    if (slots.left) base += cssClasses?.slots?.left || '';

    return base;
  });

  const mergeClasses = (...classes: string[]) => {
    return classes.join(' ').replace(/  +/g, ' ');
  };

  return {
    baseClass,
    colorClass,
    counterClass,
    disabledClass,
    iconClass,
    mergeClasses,
    outlineClass,
    roundedClass,
    shadowClass,
    sizeClass,
    slotsClass,
    squareClass,
  };
};
