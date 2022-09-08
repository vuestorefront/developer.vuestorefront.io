<template>
  <div class="layout layout-background">
    <OrganismsNavigationHeader/>
    <div class="content">
      <AtomsLayoutContent>
        <slot/>
      </AtomsLayoutContent>
      <ActiveOrganismsContentGitHubFooter/>
    </div>
    <OrganismsNavigationFooter/>
  </div>
</template>

<script setup lang="ts"></script>
