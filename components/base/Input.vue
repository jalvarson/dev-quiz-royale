<script setup lang="ts">
interface InputProps {
  modelValue: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

const props = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};


</script>

<template>
  <div
    class="input-container"
  >
    <input
      :type="props.type || 'text'"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      class="input-container__base-input"
      @input="onInput"
    />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  &__base-input {
    width: 100%;
    padding: 0.8rem 1rem;
    background-color: transparent;
    border: 1.5px solid $white-60;
    border-radius: 0.6rem;
    transition: border-color 0.2s;
    color: $on-surface;

    &::placeholder {
      color: $white-80;
    }

    &:focus {
      border-color: white;
      outline: none;
    }

    &:disabled {
      background-color: white;
      cursor: not-allowed;
    }
  }
}
</style>
