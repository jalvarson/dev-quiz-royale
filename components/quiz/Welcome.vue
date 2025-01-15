<script setup lang="ts">
const props = defineProps<{
  name: string;
  startQuiz: (username: string) => void;
}>();

const usernameInput = ref<string>('');

// Handle the Start Quiz Action
const handleStartQuiz = () => {
  props.startQuiz(usernameInput.value);
};
</script>

<template>
  <div class="quiz-container-name">
    <h2 class="quiz-container-name__title">
      You are about the start the
      <span class="title-highlight">{{ name }}</span> quiz!
    </h2>
    <p class="quiz-container-name__subtitle">
      Enter your Username to start the quiz
    </p>
    <BaseInput
      class="quiz-container-name__input-username"
      id="nameInput"
      v-model="usernameInput"
      type="text"
      placeholder="E.g. Vue Ninja 🥷"
    />
    <BaseButton
      :disabled="!usernameInput"
      @click="handleStartQuiz"
      label="Start Quiz"
    />
  </div>
</template>

<style scoped lang="scss">
.quiz-container-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 680px;
  padding: 0 2rem;

  &__input-username {
    max-width: 480px;
  }

  &__title {
    @include displayLarge;
    text-align: center;
    margin-bottom: 1rem;

    @include respond-to(mobile) {
      @include displayMedium;
    }

    .title-highlight {
      color: $primary;
    }
  }

  &__subtitle {
    @include bodyLarge;
    text-align: center;
    @include respond-to(mobile) {
      @include bodyMedium;
    }
  }
}
</style>
