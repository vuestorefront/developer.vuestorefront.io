<template>
  <div
    class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8"
  >
    <div class="lg:w-0 lg:flex-1">
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
      <form class="space-y-2 space-x-2 sm:flex">
        <label for="first-name" class="sr-only">Email address</label>
        <input
          id="first-name"
          name="first-name"
          type="text"
          autocomplete="name"
          required
          class="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-300 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
          placeholder="Enter your first name"
        />
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          autocomplete="email"
          required
          class="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-300 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <AtomsButtonDefault
            color="primary"
            label="Subscribe"
            type="submit"
            shadow
          />
        </div>
      </form>
      <p class="mt-3 text-sm text-gray-300">
        We care about the protection of your data. Read our
        <NuxtLink href="#" class="text-sm text-gray-400 underline">
          Privacy Policy.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
