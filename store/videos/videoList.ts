import { defineStore } from 'pinia';
import { Filter } from '~/types/components/filter';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { whereObj } from '~/utils/content';
import { SortType } from '~/enums/filter';

export const useVideosList = defineStore('videosList', {
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
    contentQuery(state) {
      return () => {
        const nuxtApp = useNuxtApp();
        const { query } = nuxtApp._activeRoute;

        if (query.page) {
          state.pages.current = Number(query.page.toString());
        }
        const sort: { publishedAt?: number; title?: number } = {};
        switch (query.sort) {
          case SortType.NEWEST:
            sort.publishedAt = -1;
            break;
          case SortType.OLDEST:
            sort.publishedAt = 1;
            break;
          case SortType.AZ:
            sort.title = 1;
            break;
          case SortType.ZA:
            sort.title = -1;
            break;
          default:
            sort.publishedAt = -1;
            break;
        }

        return queryContent('videos').sort({ $sensitivity: 'base', ...sort });
      };
    },
  },
  actions: {
    async fetch() {
      const nuxtApp = useNuxtApp();
      const { query } = nuxtApp._activeRoute;

      const whereCategory = whereObj(query, 'category', true);
      const whereAuthor = whereObj(query, 'author');
      const wherePlaylist = whereObj(query, 'playlist', true);

      const orQuery = [];
      const andQuery = [];

      if (whereCategory.length > 1) {
        orQuery.push(...whereCategory);
      }

      if (whereCategory.length === 1) {
        andQuery.push(...whereCategory);
      }

      if (wherePlaylist.length > 1) {
        orQuery.push(...wherePlaylist);
      }

      if (wherePlaylist.length > 1) {
        orQuery.push(...wherePlaylist);
      }

      if (whereAuthor.length === 1) {
        andQuery.push(...whereAuthor);
      }

      const whereQuery = {
        ...(orQuery.length > 0 ? { $or: orQuery } : {}),
        ...(andQuery.length > 0 ? { $and: andQuery } : {}),
      };

      this.data = await this.contentQuery()
        .where(whereQuery)
        .skip(
          this.pages.current === 1 || !this.pages.current
            ? 0
            : this.pages.limit * (this.pages.current - 1),
        )
        .limit(this.pages.limit)
        .find();

      const filteredVideosRaw = await this.contentQuery()
        .where(whereQuery)
        .only(['title'])
        .find();

      this.pages.total = filteredVideosRaw.length;
    },

    async getBaseData(i18n) {
      const nuxtApp = useNuxtApp();
      const { query } = nuxtApp._activeRoute;

      const allVideosRaw = await this.contentQuery()
        .only(['category', 'author', 'playlist'])
        .find();

      const { category, author, playlist } = allVideosRaw.reduce(
        (acc, curr) => {
          if (curr.category)
            acc.category.add(
              ...(Array.isArray(curr.category)
                ? curr.category
                : [curr.category]),
            );
          if (curr.author) acc.author.add(curr.author);
          if (curr.playlist)
            acc.playlist.add(
              ...(Array.isArray(curr.playlist)
                ? curr.playlist
                : [curr.playlist]),
            );

          return {
            ...acc,
          };
        },
        {
          category: new Set(),
          author: new Set(),
          playlist: new Set(),
        } as {
          category: Set<string>;
          author: Set<string>;
          playlist: Set<string>;
        },
      );

      this.filters = [
        {
          id: 'category',
          name: i18n.t('page.videos.filter.category'),
          options: [...category].sort(),
          selected: new Set(
            [
              ...(query?.category && Array.isArray(query.category)
                ? query?.category
                : [query?.category]),
            ].filter(Boolean),
          ),
        },
        {
          id: 'author',
          name: i18n.t('page.videos.filter.author'),
          options: [...author].sort(),
          selected: new Set(
            [
              ...(query?.author && Array.isArray(query.author)
                ? query?.author
                : [query?.author]),
            ].filter(Boolean),
          ),
        },
        {
          id: 'playlist',
          name: i18n.t('page.videos.filter.playlist'),
          options: [...playlist].sort(),
          selected: new Set(
            [
              ...(query?.playlist && Array.isArray(query.playlist)
                ? query?.playlist
                : [query?.playlist]),
            ].filter(Boolean),
          ),
        },
      ];
    },
  },
});
