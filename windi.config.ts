/* eslint-disable global-require,@typescript-eslint/no-var-requires */
// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/scroll-snap'),
    require('windicss/plugin/typography'),
    require('@windicss/plugin-question-mark'),
  ],
  theme: {
    fontFamily: {
      sans: ['Red Hat Text', 'ui-sans-serif', 'system-ui'],
      heading: ['Red Hat Display', 'ui-sans-serif', 'system-ui'],
      mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
    },
  },
});
