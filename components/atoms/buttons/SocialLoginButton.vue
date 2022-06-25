<script lang="ts">
  import Button from '~/components/atoms/buttons/Button.vue';

  const socialButton = {
    facebook: {
      class:
        'text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2',
      icon: 'fa6-brands:facebook-f',
      label: 'Sign in with Facebook',
    },
    twitter: {
      class:
        'text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2',
      icon: 'fa6-brands:twitter',
      label: ' Sign in with Twitter',
    },
    github: {
      class:
        'text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2',
      icon: 'fa6-brands:github',
      label: 'Sign in with Github',
    },
    google: {
      class:
        'text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2',
      icon: 'fa6-brands:google',
      label: 'Sign in with Google',
    },
    apple: {
      class:
        'text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2',
      icon: 'fa6-brands:apple',
      label: 'Sign in with Apple',
    },
  };

  export default {
    name: 'SocialButton',
    inheritAttrs: true,
    props: {
      type: {
        type: String,
        required: true,
        validate: (s) => Object.keys(socialButton).has(s),
      },
    },
    setup(props, { attrs }) {
      return () =>
        h(Button, {
          ...attrs,
          class: `${socialButton[props.type].class}`,
          icon: 'left',
          iconName: socialButton[props.type].icon,
          label: socialButton[props.type].label,
        });
    },
  };
</script>

<style lang="scss">
  @use 'assets/scss/components/buttons';
</style>
