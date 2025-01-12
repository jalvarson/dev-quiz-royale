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

.slide-fade-enter-active {
  animation: bounceIn 0.6s cubic-bezier(0.25, 1.5, 0.5, 1);
}

.slide-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(4rem);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-4rem);
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  40% {
    transform: translateY(-0.5rem);
  }
  80% {
    transform: translateY(0.25rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
