import { cssSizes } from '~/constants/cssBaseData';

export default {
  size: {
    type: String,
    default: 'base',
    validate: (s: string) => cssSizes.has(s),
  },
};
