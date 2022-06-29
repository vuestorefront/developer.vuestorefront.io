export default {
  icon: {
    type: [Boolean, String],
    default: false,
    validate: (s: string | boolean) =>
      typeof s === 'boolean' || ['left', 'right'].includes(s),
  },
  iconOnly: Boolean,
  iconName: String,
  iconLeftName: String,
  iconRightName: String,
};
