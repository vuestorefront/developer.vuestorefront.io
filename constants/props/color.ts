import { cssColors } from '~/constants/cssBaseData';

export default {
  color: {
    type: String,
    default: 'primary',
    validate: (s: string) => cssColors.has(s),
  },
};
