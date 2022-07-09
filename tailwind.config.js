/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/typography'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/forms'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('tailwind-scrollbar-hide'),
  ],
  content: [
    'components/**/*.{js,jsx,ts,tsx,vue}',
    'constants/**/*.{js,jsx,ts,tsx,vue}',
    'content/**/*.{md,yml,json,json5,csv}',
    'layouts/**/*.{js,jsx,ts,tsx,vue}',
    'pages/**/*.{js,jsx,ts,tsx,vue}',
    'plugins/**/*.{js,jsx,ts,tsx,vue}',
    'stories/**/*.{js,jsx,ts,tsx,vue}',
  ],
  safelist: [
    'whitelisted',
    {
      pattern:
        /(bg|text|border)-(primary|secondary|blue|yellow|gray|rose|white)(-([2589])0+)?/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', 'Red Hat Display', 'sans-serif'],
        serif: ['Red Hat Display', 'Red Hat Text', 'sans-serif'],
        monospace: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['.75rem', '1rem'],
        sm: ['.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '3rem'],
        '6xl': ['3.75rem', '3.75rem'],
        '7xl': ['4.5rem', '4.5rem'],
        '8xl': ['6rem', '6rem'],
        '9xl': ['8rem', '8rem'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          DEFAULT: '#357dc0',
          50: '#f3f8f9',
          100: '#daf1fa',
          200: '#afe0f5',
          300: '#7cc2e7',
          400: '#479ed3',
          500: '#357dc0',
          600: '#2d62a9',
          700: '#254a87',
          800: '#1b3260',
          900: '#101f3f',
        },
        gray: {
          DEFAULT: '#73707b',
          50: '#fafbfb',
          100: '#f1f1f2',
          200: '#e5e5e6',
          300: '#d5d4d8',
          400: '#a3a0a9',
          500: '#73707b',
          600: '#55535b',
          700: '#413e47',
          800: '#2a262f',
          900: '#19181b',
        },
        primary: {
          DEFAULT: '#02bb4d',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#02bb4d',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          DEFAULT: '#875df1',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#875df1',
          600: '#6f40ec',
          700: '#6131dd',
          800: '#531ed3',
          900: '#420ca9',
        },
        rose: {
          DEFAULT: '#f43f5e',
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        yellow: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      boxShadow: {
        sm: ' 0px 0px 2px rgba(0, 0, 0, 0.2)',
        base: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.15)',
        lg: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.15)',
        xl: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.15)',
        '2xl':
          '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 24px 48px rgba(0, 0, 0, 0.15)',
      },
      container: {
        center: true,
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      borderRadius: {
        none: '0',
        xs: '0.0625rem',
        sm: '0.125rem',
        default: '0.1875rem',
        lg: '0.25rem',
        xl: '0.3125rem',
        '2xl': '0.375rem',
        '3xl': '0.5rem',
        '4xl': '0.75rem',
        '5xl': '0.9375rem',
        '6xl': '1.0625rem',
        '7xl': '1.1875rem',
        '8xl': '1.3125rem',
        '9xl': '1.5625rem',
        full: '9999px',
      },
      padding: {
        17: '76px',
      },
      backgroundImage: {
        quote: 'url("~/assets/images/icons/quote.svg")',
      },
    },
  },
  shortcuts: {
    /**
     * Body background
     */
    'd-body-bg': 'bg-white dark:bg-gray-900',
    'd-body-text-color': 'text-gray-900 dark:text-gray-50',
    'd-secondary-bg': 'bg-gray-500 dark:bg-gray-400',
    // 'd-secondary-text': 'text-gray-500 dark:text-gray-400',
    // 'd-secondary-text-hover': 'text-primary-500 dark:text-primary-400',
    'd-tertiary-text': 'text-gray-400 dark:text-gray-500',
    'd-border-tertiary': 'border-gray-400 dark:border-gray-500',
    'd-primary-text-hover': 'text-gray-600 dark:text-gray-400',
    'd-secondary-text-active': 'text-gray-900 dark:text-gray-300',
    // Primary
    'd-text-primary': 'text-primary-500 dark:text-primary-400',
    'd-border-primary': 'border-primary-500 dark:border-primary-400',
    'd-bg-primary': 'bg-primary-500 dark:bg-primary-400',
    'd-page-mobile-toc-bg':
      'bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80',
    'd-aside-header-bg': 'bg-gray-50 dark:bg-gray-800',
    'd-active-aside-navigation-item-bg': 'bg-primary-50 dark:bg-primary-900',
    'd-active-aside-navigation-item-text':
      'text-primary-500 dark:text-primary-400 ',
    'd-code-group-header-bg': '',
    'd-code-group-tab': '',

    // Icons
    'd-text-icon': 'd-secondary-text hover:d-secondary-text-hover',
    'd-icon': 'd-text-icon focus:outline-none',
    // Images utils
    'light-img': 'dark:hidden',
    'dark-img': 'light:hidden',

    // 'd-heading-hr': '!mt-4 !mb-0 d-border',
    'd-scrollbar':
      'scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800 scrollbar-thumb-rounded',

    //
    // New
    //

    'd-border-color': 'border-warmgray-200',
    'd-border-color-hover': 'border-primary-200 dark:border-gray-700',
    // 'd-border-header': 'border-b border-gray-200 dark:border-gray-800 border-opacity-50',

    // Container

    'd-max-w-container': 'max-w-7xl',
    'd-container-padded': 'px-6 sm:px-6',
    'd-container': 'd-max-w-container mx-auto',
    'd-container-content': 'd-container d-container-padded',

    // Header
    'd-header-blur': 'backdrop-filter backdrop-blur-12px',
    'd-header-bg': 'bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80',
    'd-header': 'sticky w-full top-0 z-10 d-header-blur h-header',
    'd-header-title': 'text-xl font-medium uppercase',
    'd-header-title-w-logo': 'd-header-title ml-4',
    'd-header-logo': 'flex items-center flex-none',
    'd-header-logo-size': 'w-auto max-h-8',

    // Footer
    'd-footer-title': 'text-xl font-medium uppercase',
    'd-footer-title-w-logo': 'd-footer-title ml-4',
    'd-footer-logo': 'flex items-center flex-none',
    'd-footer-logo-size': 'w-auto max-h-8',

    'd-text-secondary': 'text-warmgray-600 dark:text-warmgray-200',
    'd-text-secondary-hover': 'text-primary-500 dark:text-primary-400',
    'd-sticky-footer-container': 'flex flex-col min-h-screen',

    // Prose
    'd-prose-code-filename-bg': 'bg-gray-200 dark:bg-gray-700',
    'd-prose-code-filename-text': 'text-gray-600 dark:text-gray-400',
    'd-prose-hr-border-color': 'border-t d-border-color',
    'd-prose-ul-li-bullet': 'bg-warmgray-900',
    'd-prose-code-inline-border': 'border border-warmgray-200',
    'd-prose-code-inline-bg-color': 'bg-warmgray-50',
    'd-prose-code-inline-text-color': 'text-warmgray-600',
    'd-prose-code-inline-in-heading-border-hover':
      'border-warmgray-400 border-dashed',
    'd-prose-code-bg': 'bg-gray-100 dark:bg-gray-800',
    'd-prose-thead-border': 'border-b border-gray-200 dark:border-gray-700',
    'd-prose-tr-border': 'border-b d-border-color',
    'd-prose-blockquote-border': 'border-l',
    'd-prose-blockquote-border-color': 'd-border-color',
    'd-prose-blockquote-text-color': 'd-secondary-text',
    'd-prose-a-text-color': 'text-primary-500',
    'd-prose-a-border-color': 'border-b border-transparent',
    'd-prose-a-border-color-hover': 'hover:border-primary-200',
    'd-prose-a-headline-border':
      'border-b border-dashed border-gray-900 dark:border-gray-100',

    // Heading
    'd-heading-title': '!mb-0 !mt-0 !text-4xl !font-medium',
    'd-heading-description':
      '!mt-2 !mb-0 !text-xl !font-base !d-secondary-text',

    // Aside
    'd-aside-title-text':
      'text-xl font-semibold text-gray-900 dark:text-gray-100',
    'd-aside-title': 'd-aside-title-text cursor-pointer',
  },
};
