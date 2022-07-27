<template>
  <div class="avatar mr-2" aria-hidden="true">
    <svg class="svg-hidden">
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path
          d="M0.177,0.177 C0.245,0.109,0.278,0.075,0.313,0.053 C0.428,-0.018,0.572,-0.018,0.687,0.053 C0.722,0.075,0.755,0.109,0.823,0.177 C0.891,0.245,0.925,0.278,0.947,0.313 C1,0.428,1,0.572,0.947,0.687 C0.925,0.722,0.891,0.755,0.823,0.823 C0.755,0.891,0.722,0.925,0.687,0.947 C0.572,1,0.428,1,0.313,0.947 C0.278,0.925,0.245,0.891,0.177,0.823 L0.177,0.823 C0.109,0.755,0.075,0.722,0.053,0.687 C-0.018,0.572,-0.018,0.428,0.053,0.313 C0.075,0.278,0.109,0.245,0.177,0.177 L0.177,0.177"
        ></path>
      </clipPath>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '#imports';

  export default defineComponent({
    props: {
      width: {
        type: String,
        default: '2rem',
      },
      height: {
        type: String,
        default: '2rem',
      },
      img: {
        type: String,
        required: true,
      },
    },
    computed: {
      avatarBgUrl() {
        return `url("${this.$props.img}")`;
      },
    },
  });
</script>

<style lang="scss" scoped>
  .svg-hidden {
    position: absolute;
    width: 0;
    height: 0;
  }

  .avatar {
    width: v-bind(width);
    height: v-bind(height);
    clip-path: url(#my-clip-path);
    background-repeat: no-repeat;
    background-image: v-bind(avatarBgUrl);
    background-position: center center;
    background-size: cover;
    border-radius: 0 0 0 8px;
  }
</style>
