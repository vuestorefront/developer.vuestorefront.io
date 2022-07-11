<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <hr class="footer-navigation" />
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="footer-navigation-links">
      <div class="footer-navigation-links--container">
        <div class="footer-navigation-links--content">
          <img class="h-10" src="/logo/vsf-full.svg" alt="Vue Storefront" />
          <p>Frontend Platform for Headless Commerce</p>
          <div class="footer-navigation-links--social">
            <AtomsIconSocial name="twitter" />
            <AtomsIconSocial name="github" />
            <AtomsIconSocial name="youtube" />
            <AtomsIconSocial name="dev.to" />
            <AtomsIconSocial name="facebook" />
            <AtomsIconSocial name="linkedin" />
          </div>
        </div>
        <div class="footer-navigation-links--menu">
          <MoleculesFooterMenu
            v-for="(item, index) in menuItems"
            :key="index"
            :title="item.title"
            :sub-menu="item.subMenu"
          />
        </div>
      </div>
      <div class="footer-navigation-links--copywriting">
        <p>&copy; {{ currentYear }} Vue Storefront. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { footerMenuItems } from '~/constants/footerMenu';

  const menuItems = computed(() => footerMenuItems);
  const currentYear = computed(() => new Date().getFullYear());
</script>
