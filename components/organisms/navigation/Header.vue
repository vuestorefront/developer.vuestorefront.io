<template>
  <Popover id="header-base" class="header-navigation">
    <nav id="header-navigation" class="header-menu-bar floating-menu">
      <div class="header-container">
        <NuxtLink to="/" class="header-content-left">
          <img
            src="/logo/vsf-full.svg"
            class="h-6 md:h-9"
            :alt="t('components.organisms.navigation.header.title')"
          />
        </NuxtLink>
        <div class="header-content-right">
          <Suspense>
            <AtomsIcon
              name="heroicons-outline:search"
              class="text-3xl text-gray-700"
            />
          </Suspense>
          <AtomsButtonGitHubStars
            class="hidden md:inline-block"
            size="large"
            repository="vuestorefront/vue-storefront"
          />
          <PopoverButton class="mobile-navigation-button--closed">
            <span class="sr-only">Open menu</span>
            <Suspense>
              <AtomsIcon
                name="heroicons-outline:menu"
                class="text-3xl text-gray-700"
              />
            </Suspense>
          </PopoverButton>
        </div>
        <PopoverGroup
          as="nav"
          class="header-content-center hidden space-x-10 md:flex"
        >
          <ul class="header-content-center--list">
            <li
              v-for="(menu, index) in headerMenuItems"
              :key="index"
              class="header-content-center--item"
            >
              <MoleculesMegamenu v-bind="menu" />
            </li>
          </ul>
        </PopoverGroup>
      </div>
    </nav>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="header-mobile-navigation--popover">
        <div
          class="rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-2 pb-6">
            <div class="flex items-center justify-between">
              <NuxtLink to="/">
                <img
                  src="/logo/vsf-full.svg"
                  class="h-6 md:h-9"
                  :alt="t('components.organisms.navigation.header.title')"
                />
              </NuxtLink>
              <div class="-mr-2">
                <PopoverButton class="header-mobile-navigation--close">
                  <span class="sr-only">Close menu</span>
                  <Suspense>
                    <AtomsIcon
                      name="carbon:close"
                      class="text-3xl text-gray-700"
                    />
                  </Suspense>
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <PopoverButton
                  v-for="item in headerMenuItems"
                  :key="item.label"
                  :as="NuxtLinkComp"
                  :to="item.link"
                  :target="item.target || ''"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.label }}
                  </span>
                  <AtomsIcon
                    v-if="item.iconName"
                    :name="item.iconName"
                    class="group-hover:text-primary text-gray-400"
                  />
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue';
  import { headerMenuItems } from '~/constants/headerMenu';
  import { useI18n } from 'vue-i18n';

  const NuxtLinkComp = defineNuxtLink({});

  const { t } = useI18n();
</script>
