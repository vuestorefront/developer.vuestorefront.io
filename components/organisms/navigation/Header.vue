<template>
  <div id="header-navigation-observer"></div>
  <div id="header-base" class="header-navigation">
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
            <AtomsIcon name="eva:search-outline" class="text-3xl" />
          </Suspense>
          <AtomsButtonGitHubStars
            class="hidden md:inline-block"
            size="large"
            repository="vuestorefront/vue-storefront"
          />
          <button
            data-collapse-toggle="header-menu"
            type="button"
            class="mobile-navigation mobile-navigation-button--closed"
            aria-controls="header-menu"
            aria-expanded="false"
          >
            <Suspense>
              <AtomsIcon name="carbon:menu" class="menu-icon" />
            </Suspense>
            <Suspense>
              <AtomsIcon name="carbon:close" class="close-icon" />
            </Suspense>
            <span class="sr-only">{{
              t('components.organisms.navigation.header.openMenu')
            }}</span>
          </button>
        </div>
        <div class="header-content-center">
          <ul class="header-content-center--list">
            <li
              v-for="(menu, index) in headerMenuItems"
              :key="index"
              class="header-content-center--item"
            >
              <MoleculesMegamenu v-bind="menu" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { headerMenuItems } from '~/constants/headerMenu';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const navElBase = computed(() => document?.querySelector('#header-base'));
  const navElContent = computed(() =>
    document?.querySelector('#header-navigation'),
  );

  onMounted(() => {
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
    const scrollFunction = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        navElBase.value?.classList.remove(scrollUp);
        navElContent.value?.classList.remove('scrolling-menu');
        navElContent.value?.classList.add('floating-menu');
        return;
      }

      if (currentScroll > 120) {
        navElContent.value?.classList.add('scrolling-menu');
        navElContent.value?.classList.remove('floating-menu');
      }
      if (
        currentScroll > lastScroll &&
        !navElBase.value?.classList.contains(scrollDown)
      ) {
        navElBase.value?.classList.remove(scrollUp);
        navElBase.value?.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        navElBase.value?.classList.contains(scrollDown)
      ) {
        navElBase.value?.classList.remove(scrollDown);
        navElBase.value?.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', scrollFunction);
    window.addEventListener('touchmove', scrollFunction);
  });
</script>
