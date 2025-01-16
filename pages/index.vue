<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const handleParallax = () => {
  const images = document.querySelectorAll('.parallax-image');
  const scrollPosition = window.scrollY;

  images.forEach(image => {
    const isMoveUp = image.classList.contains('move-up');
    const direction = isMoveUp ? -1 : 1;
    const speed = parseFloat(image.getAttribute('data-speed') || '0.2');
    const offset = scrollPosition * speed * direction;
    (image as HTMLElement).style.transform = `translateY(${offset}px)`;
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleParallax);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleParallax);
});
</script>

<template>
  <section class="main-header">
    <div class="main-header__container">
      <NuxtImg
        class="main-header__image"
        src="/images/frontend.png"
        alt="frontend person"
      />
      <h2 class="main-header__logo">Fast track coding test</h2>
      <h1 class="main-header__title">Dev Quiz Royale</h1>
      <h3 class="main-header__subtitle">
       The ultimate developer quiz! Whether you're a backend pro,
        frontend ace, or design tool expert, we've got challenges for you. Test
        your skills, show off your tech knowledge.
      </h3>
      <BaseButton
        class="main-header__button"
        type="button"
        label="Discover Quizzes"
        :onPress="() => navigateTo('/quiz')"
      />
      <div class="parallax-container">
        <NuxtImg
          class="parallax-image move-up image-1"
          data-speed="0.1"
          src="/images/firebase-blurred.png"
          alt="Firebase"
        />
        <NuxtImg
          class="parallax-image move-up image-2"
          data-speed="0.4"
          src="/images/flutter-blurred.png"
          alt="Flutter"
        />
        <NuxtImg
          class="parallax-image move-down image-3"
          data-speed="0.7"
          src="/images/python.png"
          alt="Python"
        />
        <NuxtImg
          class="parallax-image move-up image-4"
          data-speed="0.8"
          src="/images/go.png"
          alt="GoLang"
        />
        <NuxtImg
          class="parallax-image move-down image-5"
          data-speed="0.35"
          src="/images/c.png"
          alt="C++"
        />
        <NuxtImg
          class="parallax-image move-down image-6"
          data-speed="0.05"
          src="/images/vue.png"
          alt="VueJS"
        />
      </div>
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
    <Leaderboard id="leaderboard" />
  </LayoutsSection>
</template>

<style scoped lang="scss">
.parallax-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.parallax-image {
  position: absolute;
  will-change: transform;
  transition: transform 0.4s ease-out;
}

.image-1 {
  top: 5%;
  left: -10%;
  width: 300px;
  @include respond-to('tablet') {
    width: 200px;
  }
}

.image-2 {
  bottom: -10%;
  right: 15%;
  width: 400px;
}

.image-3 {
  bottom: 20%;
  left: -4%;
  width: 240px;
  @include respond-to('tablet') {
    width: 200px;
    bottom: 10%;
    left: -16%;
  }
}

.image-4 {
  bottom: 10%;
  right: 0%;
  margin-right: -10px;
  width: 300px;
  @include respond-to('tablet') {
    width: 200px;
    margin-right: -50px;
    bottom: 0%;
  }
}

.image-5 {
  top: 10%;
  right: 20%;
  width: 200px;
  @include respond-to('tablet') {
    width: 160px;
    top: 6%;
    right: 6%;
  }
}

.image-6 {
  top: 20%;
  left: 10%;
  width: 120px;
  @include respond-to('tablet') {
    width: 80px;
    top: 20%;
    left: 5%;
  }
}

.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100svh;
  padding: 0 1.4rem;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    gap: 1rem;
  }

  &__image {
    max-width: 220px;
    animation-name: floating;
    animation: floating 3s ease-in-out infinite;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-bottom: -2rem;
  }

  &__logo {
    @include titleLarge;
    color: $tertiary;
    text-align: center;

    @include respond-to('mobile') {
      @include titleMedium;
    }
  }

  &__title {
    @include displayLarge;
    text-align: center;

    @include respond-to('mobile') {
      @include headlineLarge;
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
