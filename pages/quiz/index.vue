<script setup>
definePageMeta({
  layout: 'quiz',
});
</script>

<template>
  <div class="discover-page">
    <div class="discover-page__content">
      <h2 class="discover-page__content-title">Choose Your Quiz</h2>
      <p class="discover-page__content-subtitle">
        Choose a quiz to test your knowledge of the latest technologies and
        tools.
      </p>

      <LayoutsSection :columns="2">
        <CardWrapper
          title="Backend Mastermind"
          body="Test your knowledge of backend technologies, frameworks, and concepts. From databases to APIs, do you have what it takes to call yourself a backend guru?"
          variant="backend"
          image="/images/backend.png"
          goTo="/quiz/backend"
        />
        <CardWrapper
          title="Frontend Frenzy"
          body="Flex your CSS skills and JavaScript savvy. Can you ace the quiz on modern frontend techniques and tools?"
          variant="frontend"
          image="/images/frontend.png"
          goTo="/quiz/frontend"
        />
        <CardWrapper
          title="Framework Fighter"
          body="Angular, React, Vue, or Svelte? See if you can identify the most popular frameworks and their unique features."
          variant="frameworks"
          image="/images/frameworks.png"
          goTo="/quiz/frameworks"
        />
        <CardWrapper
          title="Design Suite Duel"
          body="Sketch, Figma, or Adobe XD? Show off your knowledge of the tools that power the world’s best designs."
          variant="designtools"
          image="/images/design-tools.png"
          goTo="/quiz/design-tools"
        />
      </LayoutsSection>
    </div>
  </div>
</template>

<style scoped lang="scss">
.discover-page {
  display: flex;
  min-height: 100svh;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding-top: 58px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    overflow-y: auto;
    padding-top: 2rem;
    

    &-title {
      @include displayLarge;
      text-align: center;
      color: $on-surface;
      @include respond-to('tablet') {
        @include displayMedium;
      }
    }

    &-subtitle {
      @include bodyMedium;
      text-align: center;
      color: $on-surface;
      max-width: 40rem;
      padding: 0.5rem 2rem;
    }
  }
}
</style>
