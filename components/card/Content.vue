<template>
  <div class="card-content">
    <h3 class="card-content__title">{{ title }}</h3>
    <p class="card-content__body">{{ body }}</p>
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="imageAlt"
      class="card-content__image"
    />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: false },
  image: { type: String, default: null },
  imageAlt: { type: String, default: 'Image' },
});
</script>

<style lang="scss">
.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  &__title {
    @include headlineMedium;
    color: inherit;
  }

  &__body {
    @include bodyMedium;
    max-width: 68%;
    color: inherit;
  }

  &__image {
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 40px;
    position: absolute;
    bottom: -120px;
    right: -60px;
    transition: all 0.3s ease-in-out;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @include respond-to('tablet') {
        bottom: -120px;
        right: -70px;
        width: 220px;
        height: 220px;
    }
    .card--clickable:hover & {
      transform: scale(1.1);
      right: -80px;
    }
  }
}
</style>
