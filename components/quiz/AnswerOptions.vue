<script setup lang="ts">
import type { Option } from '~/utils/types/quiz';

const props = defineProps<{
  options: Option[];
  onSelect: (index: number) => void;
}>();
</script>

<template>
  <div class="quiz-answers">
    <div class="quiz-answers__content">
      <BaseButton
        v-for="(option, index) in props.options"
        :key="index"
        :label="option.text"
        expand
        :onPress="() => props.onSelect(index)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-answers {
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    width: 100%;
    max-width: 680px;
    display: grid;
    gap: 0.7rem;
    grid-template-columns: repeat(2, 1fr);
    @include respond-to('mobile') {
      grid-template-columns: 1fr;
    }
  }
}
</style>
