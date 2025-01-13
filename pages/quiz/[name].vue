<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QuizNames } from '~/utils/enums/quiz-names';

definePageMeta({
  layout: 'quiz',
});

const route = useRoute();
const name = route.params.name as QuizNames;
const allowedQuizNames = Object.values(QuizNames);

// Only allow access to the quiz if the name is valid
if (!allowedQuizNames.includes(name)) {
  navigateTo('/404', { redirectCode: 404 });
}

const quizStore = useQuizStore();
const mounted = ref(false);

onMounted(() => {
  quizStore.setCurrentQuizName(name);

  setTimeout(() => {
    mounted.value = true;
  }, 100);
});
</script>

<template>
  <div class="quiz-page">
    <QuizWrapper v-if="quizStore.currentQuestion">
      <QuizHeader :progress="quizStore.currentQuestionIndex" />

      <transition name="slide-fade" mode="out-in">
        <QuizQuestion
          v-if="mounted && quizStore.currentQuestion"
          :key="quizStore.currentQuestionIndex"
          :question="quizStore.currentQuestion.question"
        />
      </transition>

      <transition name="slide-out" mode="out-in">
        <QuizAnswerOptions
          :key="quizStore.currentQuestionIndex"
          :options="quizStore.currentQuestion.options"
          :onSelect="quizStore.selectAnswer"
        />
      </transition>
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
