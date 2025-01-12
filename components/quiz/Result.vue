<script setup lang="ts">
defineProps<{
  score: Number;
}>();

const quizStore = useQuizStore();

const handleExploreMore = () => {
  quizStore.resetQuiz();
  navigateTo('/quiz');
};

const handleExporeLeaderboard = () => {
  quizStore.resetQuiz();
  navigateTo('/');
};
</script>

<template>
  <div class="quiz-result">
    <div class="quiz-result__header">
      <h2>Quiz complete!</h2>
      <p>Your answered {{ score }}% of the questions correctly.</p>
    </div>
    <div class="quiz-result__actions">
      <BaseButton label="Explore more" :onPress="handleExploreMore" />

      <BaseButton
        variant="outline"
        color="secondary"
        label="Check the Leaderbord"
        :onPress="handleExporeLeaderboard"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 680px;
    gap: 0.5rem;
    h2 {
      @include displayLarge;
    }
    p {
      @include bodyLarge;
    }
  }
  &__actions {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
