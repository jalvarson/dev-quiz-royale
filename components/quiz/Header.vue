<script setup lang="ts">
defineProps({
  progress: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="quiz-header">
    <div class="quiz-header__title">Question {{ progress }} of 10</div>
    <div class="quiz-header__progress">
      <QuizProgressBar :progress="progress" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &__title {
    @include displaySmall;
    color: $primary;
  }
  &__progress {
    width: 100%;
    max-width: 600px;
  }
}
</style>
