<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QuizNames } from '~/utils/enums/quiz-names';
import type { Question } from '~/utils/types/quiz';

definePageMeta({
  layout: 'quiz',
});

const route = useRoute();
const name = route.params.name as QuizNames;

const quizStore = useQuizStore();

onMounted(async () => {
  try {
    await quizStore.fetchQuiz(name);
  } catch (error) {
    console.error('Failed to fetch quiz');
    navigateTo('/404', { redirectCode: 404 });
  }
});
</script>

<template>
  <div class="quiz-page">
    <div v-if="quizStore.isLoading">Loading quiz...</div>

    <!-- Show quiz content -->
    <QuizWrapper
      v-else-if="quizStore.questions.length && !quizStore.isQuizComplete"
    >
      <QuizHeader
        :progress="quizStore.currentQuestionIndex"
        :total="quizStore.questions.length"
      />
      <transition name="slide-fade" mode="out-in">
        <QuizQuestion
          v-if="quizStore.currentQuestion"
          :key="quizStore.currentQuestionIndex"
          :question="quizStore.currentQuestion.questionText"
        />
      </transition>
      <transition name="slide-out" mode="out-in">
        <QuizAnswerOptions
          v-if="quizStore.currentQuestion"
          :key="quizStore.currentQuestionIndex"
          :options="quizStore.currentQuestion.options"
          :onSelect="quizStore.selectAnswer"
        />
      </transition>
    </QuizWrapper>

    <!-- Show results -->
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
