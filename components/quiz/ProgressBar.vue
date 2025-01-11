<template>
  <div class="quiz-progress-bar">
    <div
      class="quiz-progress-bar__fill"
      :style="{ width: `${(progress / 10) * 100}%` }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
    validator: value => value >= 1 && value <= 10,
  },
});
</script>

<style scoped lang="scss">
.quiz-progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: $white-20;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;

  &__fill {
    height: 100%;
    background-color: $tertiary;
    width: 0%;
    transition: width 0.3s ease;
  }
}
</style>
