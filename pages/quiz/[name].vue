<script setup lang="ts">
import { QuizNames } from '~/utils/enums/quiz-names';

definePageMeta({
  layout: 'quiz',
});

const route = useRoute();
const name = route.params.name as QuizNames;
const allowedQuizNames = Object.values(QuizNames);

if (!allowedQuizNames.includes(name)) {
  navigateTo('/404', { redirectCode: 404 });
}

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.setCurrentQuizName(name);
});
</script>

<template>
  <div class="quiz-page">
    <QuizWrapper v-if="quizStore.currentQuestion">
      <QuizHeader :progress="quizStore.currentQuestionIndex" />
      <QuizQuestion :question="quizStore.currentQuestion.question" />
      <QuizAnswerOptions
        :options="quizStore.currentQuestion.options"
        :onSelect="quizStore.selectAnswer"
      />
    </QuizWrapper>

    <QuizResult v-else-if="quizStore.isQuizComplete" :score="quizStore.score" />
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
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
