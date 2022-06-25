<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <NuxtLink to="https://vuestorefront.io/" class="flex items-center">
        <img
          src="/logo/vsf-full.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Vue Storefront - Developer Portal"
        />
      </NuxtLink>
      <div class="flex md:order-2">
        <!-- Place this tag where you want the button to render. -->
        <github-button
          href="https://github.com/vuestorefront/vue-storefront"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          data-show-count="true"
          aria-label="Star vuestorefront/vue-storefront on GitHub"
        >
          Star
        </github-button>
        <button
          data-collapse-toggle="header-menu"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="header-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <Suspense>
            <Icon name="carbon:menu" />
          </Suspense>
          <Suspense>
            <Icon name="carbon:close" />
          </Suspense>
        </button>
      </div>
      <div
        id="header-menu"
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >Home</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >About</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Services</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import GithubButton from 'vue-github-button';
  import Icon from '../../atoms/icon/Icon.vue';

  const isVisible = ref(false);
  const menuItems = ref(document.querySelectorAll('.mega-menu a'));
  const focusedIndex = ref(0);

  const showMenu = () => {
    isVisible.value = true;
  };

  const hideMenu = () => {
    isVisible.value = false;
    focusedIndex.value = 0;
  };
  const startArrowKeys = () => {
    menuItems.value[0].focus();
  };
  const focusPrevious = (isArrowKey) => {
    focusedIndex.value -= 1;
    if (isArrowKey) {
      focusItem();
    }
  };

  const focusNext = (isArrowKey) => {
    focusedIndex.value += 1;
    if (isArrowKey) {
      focusItem();
    }
  };

  const focusItem = () => {
    menuItems.value[focusedIndex.value].focus();
  };
</script>
