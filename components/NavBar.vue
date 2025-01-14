<script setup lang="ts">
definePageMeta({
  layout: 'quiz',
});
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo" title="Back to home"
      >Dev Quiz Royale</NuxtLink
    >
    <nav class="header__menu">
      <ul class="header__menu-links">
        <!-- TODO: USE ANCHOR TAGS TO GO TO SECTION INSTEAD OF ROUTES -->
        <li class="header__menu-item">
          <NuxtLink to="/quiz">Leaderboard</NuxtLink>
        </li>
        <li class="header__menu-item">
          <NuxtLink to="/quiz">Quizes</NuxtLink>
        </li>
      </ul>
      <BaseButton
        type="button"
        size="medium"
        label="Take the Quiz now!"
        :onPress="() => navigateTo('/quiz')"
      />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: $secondary;
  height: 58px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  &__logo {
    @include titleLarge;
    color: $on-secondary;
    text-decoration: none;
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 24px;

    &-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      &-item {
        margin: 0 1rem;

        &-link {
          @include bodySmall;
          color: $on-secondary;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
