<script setup lang="ts">
const props = defineProps<{
  startQuiz: (username: string) => void;
}>();

const usernameInput = ref<string>('');

// Handle the Start Quiz Action
const handleStartQuiz = () => {
  props.startQuiz(usernameInput.value);
};
</script>

<template>
  <div class="quiz-content-name-input">
    <h2>Welcome to the Quiz!</h2>
    <label for="nameInput">Enter your name to begin:</label>
    <input
      id="nameInput"
      v-model="usernameInput"
      placeholder="Enter your name"
      type="text"
    />
    <button :disabled="!usernameInput" @click="handleStartQuiz">
      Start Quiz
    </button>
  </div>
</template>

<style scoped>
.quiz-content-name-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>
