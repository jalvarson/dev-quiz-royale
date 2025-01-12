<template>
  <div v-if="!goTo" :class="['card', `card--${variant}`]">
    <CardContent
      :title="title"
      :body="body"
      :image="image"
      :imageAlt="imageAlt"
    />
    <slot></slot>
  </div>
  <NuxtLink
    v-else
    :to="goTo"
    :class="['card', `card--${variant} card--clickable`]"
  >
    <CardContent
      :title="title"
      :body="body"
      :image="image"
      :imageAlt="imageAlt"
    />
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: false },
  variant: {
    type: String,
    default: 'default',
    validator: value =>
      ['default', 'backend', 'frontend', 'frameworks', 'designtools'].includes(
        value
      ),
  },
  goTo: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  imageAlt: {
    type: String,
    default: 'Image',
  },
});
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.2rem;
  border-radius: 0.75rem;
  gap: 1rem;
  overflow: hidden;
  position: relative;
  min-height: 10rem;
  text-decoration: none !important;
  transition: all 0.2s ease-out;

  &--clickable {
    &:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    }
  }
  /* Variants */
  &--default {
    background-color: $secondary;
    color: $on-secondary !important;
  }
  &--backend {
    background-color: $backend;
    color: $on-backend !important;
  }
  &--frontend {
    background-color: $frontend;
    color: $on-frontend !important;
  }
  &--frameworks {
    background-color: $frameworks;
    color: $on-frameworks !important;
  }
  &--designtools {
    background-color: $design-tools;
    color: $on-design-tools !important;
  }
}
</style>
