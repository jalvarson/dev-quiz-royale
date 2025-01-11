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
  <div>
    <h1>Quiz: {{ name }}</h1>
    <p>Welcome to the quiz page for: {{ name }}</p>
  </div>
</template>
