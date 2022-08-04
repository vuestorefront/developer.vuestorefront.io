<p align="center">
  <img src="https://user-images.githubusercontent.com/1626923/156934585-5c585b9f-53ff-4eee-beb3-a3a410c48d47.png" alt="Vue Storefront" />
</p>

<h3 align="center">
  Community Developer Portal
</h3>
<p align="center">
  Welcome to our community developer portal repository. This project is dedicated to all our community members and contributors.
</p>
<p align="center">
  The developer portal is a hub of information about the Vue Storefront framework and the community materials. You will find videos, blog posts, documentation and much more.
</p>

<p align="center">
    <a href="https://github.com/vuestorefront/vue-storefront/">
      <img alt="GitHub Repository Stars Count" src="https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social" />
    </a>
    <a href="https://twitter.com/vuestorefront">
      <img alt="Follow Us on Twitter" src="https://img.shields.io/twitter/follow/vuestorefront?style=social" />
    </a>
    <a href="https://www.youtube.com/c/VueStorefront">
      <img alt="Subscribe on our Youtube Channel" src="https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social" />
    </a>
    <a href="https://discord.vuestorefront.io/">
      <img alt="Chat with us on Discord" src="https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white" />
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
      <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" />
    </a>
    <a href="https://github.com/vuestorefront/developer.vuestorefront.io">
      <img alt="License" src="https://img.shields.io/github/license/vuestorefront/developer.vuestorefront.io" />
    </a>
    <a href="https://github.com/vuestorefront/developer.vuestorefront.io/pulls">
      <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
    </a>
</p>
<p align="center">
  <a href="https://stackblitz.com/github/vuestorefront/developer.vuestorefront.io">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="">
  </a>
</p>

> # #TechForUkraine
> <div align="center">
>   <p>
>      <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
>   </p>
>   <h2><strong>Russia’s military aggression against Ukraine.</strong></h2>
>   <div align="left">
>     <h3>How can you support Ukrainian civil society?</h3>
>     All help is needed. If you are not able to help locally, by sheltering a fellow Ukrainian, you can also:
>     <ul>
>       <li>
>           Support Ukraine Armed forces directly by sending funding to the special accounts.<br />
>           <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
>               target="_blank">NBU Special Account to Raise Funds for Ukraine’s Armed Forces</a>
>       </li>
>       <li>
>           Help the ICRC (Red Cross) with donations.<br />
>           <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian
>               Red Cross Society</a>
>       </li>
>       <li>
>           Donate to the United Help Ukraine.<br />
>           <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
>       </li>
>       <li>
>           Donate to Voices of Children<br />
>           <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
>       </li>
>    </ul>
>   </div>
> </div>

-------

## How it works?

### Tech Stack

The project use as it's tech stack the following technologies:

- [Nuxt 3][nuxt]
- [Nuxt Content][nuxt-content]
- [Tailwind CSS][tailwind-css]

### How do we use `components`?

In this project we are using two components structures:

- Atomic Design
- Active Components

#### What is Atomic Design?

> Atomic design is atoms, molecules, organisms, templates, and pages concurrently working together to create effective
> interface design systems
> [Atomic Design by Brad Frost][atomicdesign]

#### What is Active Components?

The principle of Active Components is to create reusable components which takes data manipulation upon itself, removing
the need to add those code bits into a page, component or layout.

### How do we use `layouts`?

We are following the default [Nuxt 3 Layout][nuxt-layout] structure.

### How do we use `pages`?

We are following the default [Nuxt 3 Pages][nuxt-page] structure, with automatic route generation.

### How do we use `composables`?

We are following the default [Nuxt 3 Composables][nuxt-composables] structure, with automatic import, for most of the
composables.

There are other composables, which needs to be imported manually, those are related to specific usages, such as `UI`
or [`activeComponents`](#how-do-we-use-components).

### How do we use `content`?

We are using [Nuxt Content][nuxt-content] as our content management system. In the `content` folder you will find,
different types of content, like `video`, `blog` or `documentation`.

We are heavily using the front-matter field to manipulate the data and fetch information across different areas of the
portal.

### How do we use `server`?

We are following the default [Nuxt 3 Server Routes][nuxt-router] structure.

The `server` folder has special APIs developed for the usage of the portal, like fetching data from [Dev.to][devto], or
internal data to render content.

### How do we use `locales`?

All the `components`, `pages` and `layouts` are using internationalization to handle text and time. We are using
the [Vue i18n][vue-i18n] plugin to handle the translations.

## Deployment

The Vue Storefront developer portal is currently being deployed to the Vue Storefront Cloud Platform.

## Contributing

If you like the ideas behind Vue Storefront and want to become a contributor - join our [Discord server][discord], check
the [list of the active issues][issues] or contact us directly via contributors(at)vuestorefront(dot)io.

If you have discovered a 🐜 or have feature suggestion, feel free to [create an issue][create-issue] on GitHub.

## Support us

**Vue Storefront is and always will be Open Source, released under MIT Licence.**

You can support us in various ways:

- **Contribute** - this is how the Core Team is supporting the project!
- **Evangelize** - tweet about us, take some speaking slot at a tech conference, etc.

## Partners

Vue Storefront is a Community effort brought to You by our great Core Team and supported by the following companies.

[**See Vue Storefront partners directory**][vsf-partners]

Vue Storefront source code is completely free and released under the [MIT License][license].


[atomicdesign]: https://atomicdesign.bradfrost.com/

[create-issue]: https://github.com/vuestorefront/developer.vuestorefront.io/issues/new/choose

[devto]: https://dev.to/

[discord]: https://discord.vuestorefront.io/

[issues]: https://github.com/vuestorefront/developer.vuestorefront.io/issues

[license]: https://github.com/vuestorefront/vue-storefront/blob/master/LICENSE

[nuxt-composables]: https://v3.nuxtjs.org/guide/directory-structure/composables

[nuxt-content]: https://content.nuxtjs.org/

[nuxt-layout]: https://v3.nuxtjs.org/guide/directory-structure/layouts

[nuxt-page]: https://v3.nuxtjs.org/guide/directory-structure/pages

[nuxt-router]: https://v3.nuxtjs.org/guide/features/server-routes

[nuxt]: https://v3.nuxtjs.org/

[tailwind-css]: https://tailwindcss.com/

[vsf-partners]: https://www.vuestorefront.io/partner-agencies?utm_source=github.com&utm_medium=referral&utm_campaign=readme

[vue-i18n]: https://vue-i18n.intlify.dev/
