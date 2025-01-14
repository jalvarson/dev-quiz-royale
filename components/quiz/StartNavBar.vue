<script setup lang="ts">
const router = useRouter();
const quizStore = useQuizStore();

const handleLeaveGame = () => {
  quizStore.resetQuiz();
  router.back();
};

const handleExploreLeaderboard = () => {
  quizStore.resetQuiz();
  navigateTo({ path: '/', hash: '#leaderboard' });
};
</script>

<template>
  <header class="header">
    <div class="header__logo" title="Back to home">Dev Quiz Royale</div>
    <div v-if="!quizStore.isQuizComplete" class="header__title">
      Active game: {{ quizStore.currentQuizName }}
    </div>
    <BaseButton
      v-if="!quizStore.isQuizComplete"
      color="secondary"
      size="medium"
      label="Leave game"
      :onPress="handleLeaveGame"
    />
    <BaseButton
      v-else="!quizStore.isQuizComplete"
      variant="outline"
      color="secondary"
      size="medium"
      label="Check the Leaderboard"
      :onPress="handleExploreLeaderboard"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: $surface;
  height: 58px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  &__logo {
    @include titleLarge;
    color: $on-secondary;
    text-decoration: none;
  }

  &__title {
    @include titleMedium;
    color: $on-secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 24px;

    &-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      &-item {
        margin: 0 1rem;

        &-link {
          @include bodySmall;
          color: $on-secondary;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
