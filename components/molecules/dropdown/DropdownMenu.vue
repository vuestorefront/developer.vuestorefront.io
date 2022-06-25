<template>
  <slot name="dropdown:button" :dropdown="props">
    <button
      id="dropdownDefault"
      data-dropdown-toggle="dropdown"
      class="dropdown-btn"
      type="button"
      @keydown.esc.exact="hideMenu"
      @keydown.tab.exact="focusNext(false)"
      @keydown.down.exact.prevent="focusNext(true)"
      @keydown.up.exact.prevent=""
    >
      <Suspense v-if="iconName">
        <Icon :name="iconName" class="w-4 h-4 ml-2" />
      </Suspense>
      {{ label }}
      <img
        src="../../../assets/images/icons/dropdown-caret.svg"
        alt="Dropdown Arrow"
        aria-hidden="true"
        class="w-4 h-4 ml-2"
      />
    </button>
  </slot>
  <slot v-if="subMenu" name="dropdown:menu" :sub-menu="subMenu">
    <div class="dropdown-menu">
      <ul aria-labelledby="dropdownDefault">
        <li v-for="(menu, index) in subMenu" :key="index">
          <Suspense v-if="menu.iconName">
            <Icon :name="menu.iconName" />
          </Suspense>
          <NuxtLink :to="menu.link" class="dropdown-menu-item">
            {{ menu.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </slot>
</template>

<script setup lang="ts">
  import { HeaderMenu } from '../../../constants/headerMenu';
  import Icon from '../../atoms/icon/Icon.vue';

  const props = defineProps<{
    label: string;
    link: string;
    iconName?: string;
    subMenu?: HeaderMenu[];
  }>();

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

<style lang="scss" scoped>
  @use 'assets/scss/components/molecules/dropdown';
</style>
