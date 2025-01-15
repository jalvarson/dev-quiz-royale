<script setup lang="ts">
import { QuizNames } from '~/utils/enums/quiz-names';

definePageMeta({
  layout: 'quiz',
});

const route = useRoute();
const quizName = route.params.name as QuizNames;

const quizStore = useQuizStore();

const startQuiz = (username: string) => {
  quizStore.setUsername(username);
  quizStore.fetchQuiz(quizName).catch(error => {
    console.error('Failed to fetch quiz');
    navigateTo('/404', { redirectCode: 404 });
  });
};

onBeforeRouteLeave(() => {
  quizStore.resetQuiz();
});

</script>

<template>
  <div class="quiz-page">

    <div v-if="quizStore.isLoading">Loading quiz...</div>

    <QuizWelcome :name="quizName" v-else-if="!quizStore.username" :startQuiz="startQuiz" />

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

    <QuizResult
      v-else-if="quizStore.isQuizComplete"
      :score="quizStore.score"
      :percentile="quizStore.percentile"
    />
  </div>
</template>

<style scoped lang="scss">
.quiz-page {
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 58px;
  background-image: url('/images/quiz-background.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.name-input-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.4rem;
}
</style>
