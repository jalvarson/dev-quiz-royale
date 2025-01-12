<script setup lang="ts">
defineProps<{
  score: number;
}>();

const quizStore = useQuizStore();

const handleExploreMore = () => {
  quizStore.resetQuiz();
  navigateTo('/quiz');
};

const handleExploreLeaderboard = () => {
  quizStore.resetQuiz();
  navigateTo('/');
};

const getScoreMessage = (score: number) => {
  if (score >= 90) {
    return "You're a coding wizard! \uD83E\uDDD9\u200D\u2728 Top of the leaderboard!";
  } else if (score >= 70) {
    return "Solid work! You're in the top tier of coders. \uD83D\uDE80\uD83D\uDCBB";
  } else if (score >= 50) {
    return "Not bad! You've got potential, keep it up! \uD83D\uDD27\u26A1";
  } else {
    return "It's not about the score, it's about the journey. Keep learning! \uD83C\uDF31\uD83D\uDD25";
  }
};
</script>

<template>
  <div class="quiz-result">
    <div class="quiz-result__header">
      <h2 class="header-title">Quiz complete!</h2>
      <div class="header-subtitle">
        You answered {{ score }}% of the questions correctly.
      </div>
      <div class="header-compare">
        {{ getScoreMessage(score) }}
      </div>
    </div>
    <div class="quiz-result__actions">
      <BaseButton label="Explore more" :onPress="handleExploreMore" />

      <BaseButton
        variant="outline"
        color="secondary"
        label="Check the Leaderboard"
        :onPress="handleExploreLeaderboard"
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

    .header-title {
      @include displayLarge;
    }

    .header-subtitle {
      @include titleLarge;
    }

    .header-compare {
      @include bodyLarge;
      margin-top: 1rem;
      text-align: center; 
    }
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
  }
}
</style>