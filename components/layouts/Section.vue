<template>
  <section class="section">
    <div :class="['section__container', `section__container--${columns}`]">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  columns: { type: Number, default: 1 },
});
</script>

<style scoped lang="scss">
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.4rem;
  width: 100%;

  &__container {
    display: grid;
    gap: 1rem;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    &--1 {
      grid-template-columns: 1fr;

      @include respond-to('tablet') {
        grid-template-columns: 1fr;
      }

      @include respond-to('mobile') {
        grid-template-columns: 1fr;
      }
    }

    &--2 {
      grid-template-columns: repeat(2, 1fr);

      @include respond-to('tablet') {
        grid-template-columns: 1fr; // Adjust to single column on smaller screens
      }

      @include respond-to('mobile') {
        grid-template-columns: 1fr;
      }
    }

    &--3 {
      grid-template-columns: repeat(3, 1fr);

      @include respond-to('tablet') {
        grid-template-columns: 1fr;
      }

      @include respond-to('mobile') {
        grid-template-columns: 1fr;
      }
    }

    &--4 {
      grid-template-columns: repeat(4, 1fr);

      @include respond-to('desktop') {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-to('tablet') {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
