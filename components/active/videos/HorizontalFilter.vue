<template>
  <div class="filter-horizontal">
    <!-- Mobile filter dialog -->
    <ActiveVideosMobileFilter :open="mobileMenu" @close="mobileMenu = false" />

    <div class="filter-horizontal-wrapper">
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" class="sr-only">
          {{ $t('global.filter.title', filters.length) }}
        </h2>
        <div class="filter-horizontal-content">
          <AtomsFilterHorizontalMenuWrapper
            v-if="sortOptions && sortOptions.length > 0"
            v-slot="{ open }"
          >
            <AtomsFilterHorizontalMenuButton :open="open">
              {{ $t('global.filter.sort.title') }}
            </AtomsFilterHorizontalMenuButton>
            <AtomsFilterHorizontalMenuList>
              <AtomsFilterHorizontalMenuItemLink
                v-for="option in sortOptions"
                :key="option.name"
                :icon="option.icon"
                :to="option.to"
              >
                {{ option.label }}
              </AtomsFilterHorizontalMenuItemLink>
            </AtomsFilterHorizontalMenuList>
          </AtomsFilterHorizontalMenuWrapper>

          <AtomsButton
            :shadow="false"
            class="sm:hidden"
            color="white"
            icon-left-name="ci:filter"
            type="button"
            @click="mobileMenu = true"
          >
            {{ $t('global.filter.title', filters.length) }}
          </AtomsButton>

          <AtomsFilterHorizontalPopOverWrapper>
            <AtomsFilterHorizontalPopOverContent
              v-for="(filter, index) in filters"
              :id="`desktop-menu-${filter.id}`"
              :key="filter.id"
              v-slot="{ open }"
            >
              <AtomsFilterHorizontalPopOverButton
                :counter="getCounter(filter.id)"
                :open="open"
              >
                {{ filter.name }}
              </AtomsFilterHorizontalPopOverButton>
              <AtomsFilterHorizontalPopOverList>
                <AtomsFilterHorizontalPopOverItemCheckbox
                  v-for="item in filter.options"
                  :key="item"
                  :model-value="item"
                  :checked="filters[index].selected.has(item)"
                  :value="item"
                  :section-id="filter.id"
                  @change="changeFilter(index, item)"
                >
                  {{ item }}
                </AtomsFilterHorizontalPopOverItemCheckbox>
              </AtomsFilterHorizontalPopOverList>
            </AtomsFilterHorizontalPopOverContent>
          </AtomsFilterHorizontalPopOverWrapper>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useVideosFilter } from '~/composables/filter/useVideosFilter';

  const mobileMenu = ref(false);

  const { changeFilter, filters, videos, sortOptions, getCounter } =
    useVideosFilter();
</script>
