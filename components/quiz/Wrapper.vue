<script setup lang="ts"></script>

<template>
  <div class="quiz-content">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
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
</style>
