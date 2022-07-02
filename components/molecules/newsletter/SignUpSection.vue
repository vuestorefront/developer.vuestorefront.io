<template>
  <div
    class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center"
  >
    <div class="lg:w-0 lg:flex-1">
      <h2 class="text-3xl sm:text-4xl font-bold">
        Sign up for our dev newsletter
      </h2>
      <p class="mt-3 max-w-3xl text-gray-500">
        Join our developer focused newsletter! We want to provide you all sort
        of materials related to eCommerce, Vue, Nuxt, Vue Storefront ecosystem,
        news and much more!
      </p>
    </div>
    <div class="mt-8 lg:mt-0 lg:ml-8">
      <form class="sm:flex">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          autocomplete="email"
          required
          class="w-full px-5 py-3 border border-gray-300 placeholder-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
          placeholder="Enter your email"
        />
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <AtomsButtonDefault color="primary" label="Subscribe" type="submit" />
        </div>
      </form>
      <p class="mt-3 text-sm text-gray-300">
        We care about the protection of your data. Read our
        <NuxtLink href="#" class="text-gray-400 text-sm underline">
          Privacy Policy.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
