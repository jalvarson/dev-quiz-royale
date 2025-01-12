<script setup lang="ts">
defineProps({
  question: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="quiz-question">
    <div class="quiz-question__title">
      {{ question }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-question {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  &__title {
    max-width: 680px;
    padding: 0 1rem;
    @include headlineLarge;
    text-align: center;
    @include respond-to('mobile') {
      @include headlineMedium;
    }
  }
}
</style>
