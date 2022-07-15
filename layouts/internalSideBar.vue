<template>
  <div class="layout layout-background">
    <OrganismsNavigationHeader />
    <AtomsLayoutContainer>
      <AtomsLayoutContent class="layout-content--sidebar">
        <AtomsLayoutSideBar />
        <main class="content">
          <slot />
        </main>
      </AtomsLayoutContent>
    </AtomsLayoutContainer>
    <OrganismsNavigationFooter />
  </div>
</template>

<script setup lang="ts"></script>
