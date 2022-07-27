<template>
  <div class="layout layout-background">
    <OrganismsNavigationHeader />
    <div class="content">
      <AtomsLayoutContent>
        <slot />
        <AtomsLayoutContainer>
          <div class="flex flex-auto flex-row justify-between">
            <!--            <ActiveAtomsTextEditOnGitHub /> -->
            <!--            <ActiveMoleculesContributorsList /> -->
          </div>
        </AtomsLayoutContainer>
      </AtomsLayoutContent>
    </div>
    <OrganismsNavigationFooter />
  </div>
</template>

<script setup lang="ts"></script>
