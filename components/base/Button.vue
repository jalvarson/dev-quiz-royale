<script setup lang="ts">
interface ButtonProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'outline' | 'contained';
  onPress?: () => void;
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  expand?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  size: 'large',
  color: 'primary',
  type: 'button',
  variant: 'contained',
  disabled: false,
  loading: false,
  expand: false,
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button-wrapper"
    :class="[
      `button-wrapper--${size}`,
      `button-wrapper--${color}`,
      `button-wrapper--${variant}`,
      { 'button-wrapper--expand': expand },
    ]"
    @click="onPress"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s, color 0.2s;
  text-transform: uppercase;

  &:hover {
    opacity: 0.86;
    transform: scale(1.02);
  }

  &:active {
    opacity: 0.72;
    transform: scale(1);
  }

  &--small {
    padding: 0.25rem 0.5rem;
    @include labelMedium;
    font-family: 'Passion One', sans-serif;
  }

  &--medium {
    padding: 0.5rem 1rem;
    @include labelLarge;
    font-family: 'Passion One', sans-serif;
  }

  &--large {
    padding: 0.85rem 1.4rem;
    @include titleMedium;
    font-family: 'Passion One', sans-serif;
  }

  // Variants
  &--contained {
    border: none;

    &.button-wrapper--primary {
      background-color: $primary;
      color: $on-primary;
    }

    &.button-wrapper--secondary {
      background-color: $tertiary;
      color: $on-tertiary;
    }
  }

  &--text {
    background-color: transparent;
    color: $primary;
    border: none;

    &.button-wrapper--secondary {
      color: $tertiary;
    }
  }

  &--outline {
    background-color: transparent;
    color: $primary;
    border: 1px solid $primary;

    &.button-wrapper--secondary {
      color: $tertiary;
      border-color: $tertiary;
    }
  }

  &--expand {
    width: 100%;
  }

  &:disabled {
    background-color: $white-50;
    color: white;
    cursor: not-allowed;
  }
}
</style>
