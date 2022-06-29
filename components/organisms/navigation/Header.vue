<template>
  <div id="header-navigation-observer"></div>
  <div id="header-base" class="header-navigation">
    <nav id="header-navigation" class="header-menu-bar floating-menu">
      <div class="header-container">
        <NuxtLink
          to="https://vuestorefront.io/"
          class="my-3.5 flex items-center"
        >
          <img
            src="/logo/vsf-full.svg"
            class="h-6 md:h-9"
            alt="Vue Storefront - Developer Portal"
          />
        </NuxtLink>
        <div class="right-content">
          <Suspense>
            <Icon name="carbon:search" class="text-3xl" />
          </Suspense>
          <GitHubStars class="hidden md:inline-block" />
          <button
            data-collapse-toggle="header-menu"
            type="button"
            class="mobile-navigation mobile-navigation-button--closed"
            aria-controls="header-menu"
            aria-expanded="false"
          >
            <Suspense>
              <Icon name="carbon:menu" class="menu-icon" />
            </Suspense>
            <Suspense>
              <Icon name="carbon:close" class="close-icon" />
            </Suspense>
            <span class="sr-only">Open main menu</span>
          </button>
        </div>
        <div class="header-menu-navigation">
          <ul class="header-menu-navigation--list">
            <li>
              <a
                href="#"
                class="header-menu-navigation--item"
                aria-current="page"
              >
                Getting started
              </a>
            </li>
            <li>
              <a href="#" class="header-menu-navigation--item"> Guide </a>
            </li>
            <li>
              <a href="#" class="header-menu-navigation--item">
                Documentation
                <img
                  src="assets/images/icons/dropdown-caret.svg"
                  class="h-[1rem] inline"
                />
              </a>
            </li>
            <li>
              <a href="#" class="header-menu-navigation--item">
                Community
                <img
                  src="assets/images/icons/dropdown-caret.svg"
                  class="h-[1rem] inline"
                />
              </a>
            </li>
            <li>
              <a href="#" class="header-menu-navigation--item"> Videos </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import Icon from '~/components/atoms/icon/Icon.vue';
  import GitHubStars from '~/components/atoms/buttons/GitHubStars.vue';
  import SearchButton from '~/components/atoms/buttons/SearchButton.vue';

  const navElBase = computed(() => document?.querySelector('#header-base'));
  const navElContent = computed(() =>
    document?.querySelector('#header-navigation'),
  );

  onMounted(() => {
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        navElBase.value?.classList.remove(scrollUp);
        navElContent.value?.classList.remove('scrolling-menu');
        navElContent.value?.classList.add('floating-menu');
        return;
      }

      if (currentScroll > 80) {
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
    });
  });
</script>

<style lang="scss" scoped>
  @use 'assets/scss/components/organisms/navigation/header';
</style>
