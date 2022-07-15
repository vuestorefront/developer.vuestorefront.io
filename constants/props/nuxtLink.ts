export const NuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false,
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false,
  },
  target: {
    type: String,
    default: void 0,
    required: false,
  },
  rel: {
    type: String,
    default: void 0,
    required: false,
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false,
  },
  activeClass: {
    type: String,
    default: void 0,
    required: false,
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false,
  },
  replace: {
    type: Boolean,
    default: void 0,
    required: false,
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false,
  },
  external: {
    type: Boolean,
    default: void 0,
    required: false,
  },
  custom: {
    type: Boolean,
    default: void 0,
    required: false,
  },
};
