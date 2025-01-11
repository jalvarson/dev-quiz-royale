<script setup>
import { QuizNames } from '~/utils/enums/quiz-names';

definePageMeta({
  layout: 'quiz',
});

const route = useRoute();
const name = route.params.name;
const allowedQuizNames = Object.values(QuizNames);

if (!allowedQuizNames.includes(name)) {
  navigateTo('/404', { redirectCode: 404 });
}
</script>

<template>
  <div class="quiz-page">
    <div class="quiz-content">
      <div class="quiz-header">
        <div class="quiz-header__title">Question 7 of 10</div>
        <div class="quiz-header__progress">
          <QuizProgressBar :progress="7" />
        </div>
      </div>
      <div class="quiz-question">
        <div class="quiz-question__title">
          What is the purpose of a RESTful API? What is the purpose of a RESTful API?

        </div>
      </div>
      <div class="quiz-answers">
        <div class="quiz-answers__content">
          <BaseButton expand label="Next Question" />
          <BaseButton expand label="Next Question" />
          <BaseButton expand label="Next Question" />
          <BaseButton expand label="Next Question" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-page {
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 58px;
  background-image: url('/images/quiz-background.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.quiz-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  max-height: 900px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.4rem;
}

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
