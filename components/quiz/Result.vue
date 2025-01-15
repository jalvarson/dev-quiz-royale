<script setup lang="ts">
defineProps<{
  score: number;
  percentile: number;
}>();

const quizStore = useQuizStore();

const handleExploreMore = () => {
  quizStore.resetQuiz();
  navigateTo('/quiz');
};

const getScoreMessage = (score: number) => {
  if (score >= 90) {
    return "You're a coding wizard! 🧙‍✨ Top of the leaderboard!";
  } else if (score >= 70) {
    return "Solid work! You're in the top tier of coders. 🚀💻";
  } else if (score >= 50) {
    return "Not bad! You've got potential, keep it up! 🔧⚡";
  } else {
    return "It's not about the score, it's about the journey. Keep learning! 🌱🔥";
  }
};

onMounted(async () => {
  await quizStore.saveQuizResult();
});
</script>

<template>
  <div class="quiz-result">
    <div class="quiz-result__header">
      <NuxtImg
        :src="`/images/${quizStore.currentQuizName}.png`"
        alt="Quiz complete"
        width="180"
        height="180"
      />
      <h2 class="header-title">Quiz complete!</h2>
      <div class="header-subtitle">
        Good job {{ quizStore.username }} You answered <span class="header-subtitle__score">{{ score }}%</span> of
        the questions correctly. You were better then
        <span class="header-subtitle__percentile">{{ percentile }}%</span>
        of all quizers
      </div>
      <div class="header-compare">
        {{ getScoreMessage(score) }}
      </div>
    </div>
    <div v-if="quizStore.isSaving">Completing quiz...</div>
    <div class="quiz-result__actions" v-else>
      <BaseButton label="Try another quiz" :onPress="handleExploreMore" />
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
  padding: 0 2rem;

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
      text-align: center;
      @include respond-to(mobile) {
        @include displayMedium;
      }
    }

    .header-subtitle {
      @include titleLarge;
      max-width: 580px;
      text-align: center;
      @include respond-to(mobile) {
        @include titleMedium;
      }
      &__score {
        color: $primary;
      }
      &__percentile {
        color: $tertiary;
      }
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
    @include respond-to(mobile) {
      flex-direction: column;
    }
  }
}
</style>
