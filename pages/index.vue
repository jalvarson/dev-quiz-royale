<script setup lang="ts"></script>

<template>
  <section class="main-header">
    <div class="main-header__container">
      <NuxtImg
        class="main-header__image"
        src="/images/backend.png"
        alt="Back-end"
      />
      <h2 class="main-header__logo">Fast track coding challenge</h2>
      <h1 class="main-header__title">The Ultimate Developer Quiz</h1>
      <h3 class="main-header__subtitle">
        Welcome to the ultimate developer quiz! Whether you're a backend pro,
        frontend ace, or design tool expert, we've got challenges for you. Test
        your skills, learn, and show off your tech knowledge. Ready to play?
      </h3>
      <BaseButton
        class="main-header__button"
        type="button"
        label="Discover Quizzes"
        :onPress="() => navigateTo('/quiz')"
      />
    </div>
  </section>

  <LayoutsSection :columns="3">
    <Card
      title="Choose between 4 quizzes"
      body="Explore a variety of challenges tailored to your skills. Whether it's backend, frontend, frameworks, or design tools, there's a quiz for every tech enthusiast!"
    />
    <Card
      title="Get up the Leaderboard"
      body="Compete with developers worldwide! Score big, climb the ranks, and claim your spot as the ultimate tech trivia master."
    />
    <Card
      title="Share with Friends"
      body="Challenge your friends and colleagues! Share your results and see who knows their stuff better—it's learning with a twist of fun"
    />
  </LayoutsSection>

  <LayoutsSection :columns="2" id="quizzes">
    <Card
      title="Backend Mastermind"
      body="Test your knowledge of backend technologies, frameworks, and concepts. From databases to APIs, do you have what it takes to call yourself a backend guru?"
      variant="backend"
      image="/images/backend.png"
      goTo="/quiz/backend"
    />
    <Card
      title="Frontend Frenzy"
      body="Flex your CSS skills and JavaScript savvy. Can you ace the quiz on modern frontend techniques and tools?"
      variant="frontend"
      image="/images/frontend.png"
      goTo="/quiz/frontend"
    />
    <Card
      title="Framework Fighter"
      body="Angular, React, Vue, or Svelte? See if you can identify the most popular frameworks and their unique features."
      variant="frameworks"
      image="/images/frameworks.png"
      goTo="/quiz/frameworks"
    />
    <Card
      title="Design Suite Duel"
      body="Sketch, Figma, or Adobe XD? Show off your knowledge of the tools that power the world's best designs."
      variant="designtools"
      image="/images/designtools.png"
      goTo="/quiz/designtools"
    />
  </LayoutsSection>

  <LayoutsSection :columns="1">
    <Leaderboard id="leaderboard"/>
  </LayoutsSection>
</template>

<style scoped lang="scss">
.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;
  padding: 0 1.4rem;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    gap: 1rem;
  }

  &__image {
    max-width: 160px;
  }

  &__logo {
    @include displaySmall;
    color: $tertiary;
    text-align: center;

    @include respond-to('mobile') {
      @include titleLarge;
    }
  }

  &__title {
    @include displayLarge;
    text-align: center;

    @include respond-to('mobile') {
      @include displayMedium;
    }
  }

  &__subtitle {
    @include bodyLarge;
    text-align: center;
    max-width: 600px;

    @include respond-to('tablet') {
      @include bodyMedium;
    }
  }

  &__button {
    margin-top: 1rem;
  }
}
</style>
