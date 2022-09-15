<template>
  <div
    ref="newsletter"
    class="mx-auto grid max-w-7xl grid-cols-1 py-12 px-4 sm:px-6 md:grid-cols-2 lg:py-16 lg:px-8"
  >
    <div class="">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Sign up for our #developer Monthly newsletter
      </h2>
      <p class="mt-3 max-w-3xl text-lg text-gray-500">
        Join our developer focused newsletter! We want to provide you all sort
        of materials related to eCommerce, Vue, Nuxt, Vue Storefront ecosystem,
        news and much more!
      </p>
    </div>
    <div class="mt-8 lg:mt-0 lg:ml-8">
      <form id="newsletter-form" class="sm:flex" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import scriptLoader from '~/utils/scriptLoader';

  const newsletter = ref(null);
  const rendered = ref(false);
  const targetIsVisible = useElementVisibility(newsletter);

  watch(
    computed(() => targetIsVisible.value),
    async () => {
      await scriptLoader('//js.hsforms.net/forms/v2.js', 'hub-spot');

      if (hbspt && !rendered.value) {
        hbspt.forms.create({
          target: '#newsletter-form',
          region: 'na1',
          portalId: '8443671',
          formId: '1355cce5-1417-4409-bb75-8a9f5081230d',
        });
        rendered.value = true;
      }
    },
  );
</script>
