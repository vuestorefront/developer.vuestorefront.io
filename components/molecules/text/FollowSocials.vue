<template>
  <AtomsTextHeadingCenter
    :title="t('components.molecules.text.social.title')"
    :message="t('components.molecules.text.social.message')"
  />
  <div class="flex justify-center space-x-5">
    <AtomsIconSocial name="twitter" />
    <AtomsIconSocial name="github" />
    <AtomsIconSocial name="youtube" />
    <AtomsIconSocial name="dev.to" />
    <AtomsIconSocial name="facebook" />
    <AtomsIconSocial name="linkedin" />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
