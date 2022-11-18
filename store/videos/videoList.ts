import {defineStore} from 'pinia';
import {Filter} from '~/types/components/filter';
import type {ParsedContent} from '@nuxt/content/dist/runtime/types';
import {whereObj} from '~/utils/content';
import {SortType} from '~/enums/filter';
import {useI18n} from 'vue-i18n';

export const videosList = defineStore('videosList', {
  state: () => {
    return {
      filters: [],
      data: [],
      pages: {
        current: 1,
        limit: 6,
        total: 0,
      },
    } as {
      filters: Filter[];
      data: ParsedContent[];
      pages: {
        current: number;
        limit: number;
        total: number;
      };
    };
  },
  getters: {
    selectedFilters(state) {
      return state.filters.reduce((acc, curr) => {
        return {
          ...acc,
          ...(curr.selected.size > 0
            ? {
              [curr.id]: [...curr.selected].filter(Boolean),
            }
            : {}),
        };
      }, {});
    },
  },
  actions: {},
});
