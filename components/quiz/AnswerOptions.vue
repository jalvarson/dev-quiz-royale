<script setup lang="ts">
import type { AnswerOption } from '~/utils/types/AnswerOption';

const props = defineProps<{
    options: AnswerOption[];
}>();
</script>

<template>
  <div class="quiz-answers">
    <div class="quiz-answers__content">
      <BaseButton
        v-for="(option, index) in props.options"
        :key="index"
        :label="option.label"
        expand
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
