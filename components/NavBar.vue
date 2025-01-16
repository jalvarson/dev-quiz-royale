<script setup lang="ts">
import { ref } from 'vue';

const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const closeMenu = () => {
  isMenuActive.value = false;
};
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo" title="Back to home"
      >Dev Quiz Royale</NuxtLink
    >
    <nav class="header__menu">
      <button
        class="burger"
        @click="toggleMenu"
        :aria-expanded="isMenuActive ? 'true' : 'false'"
        :class="{ 'is-active': isMenuActive }"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div
        class="overlay"
        :class="{ 'is-active': isMenuActive }"
        @click="closeMenu"
      ></div>
      <div class="menu" :class="{ 'is-active': isMenuActive }">
        <ul class="menu-inner">
          <li class="menu-item">
            <NuxtLink to="#leaderboard" @click="closeMenu"
              >Leaderboard</NuxtLink
            >
          </li>
          <li class="menu-item">
            <NuxtLink to="#quizzes" @click="closeMenu">Quizzes</NuxtLink>
          </li>
        </ul>
        <BaseButton
          type="button"
          size="medium"
          label="Choose a quiz"
          :onPress="() => navigateTo('/quiz')"
        />
      </div>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  &__logo {
    @include titleLarge;
    color: $on-secondary;
    text-decoration: none;
    user-select: none;
  }

  .burger {
    position: relative;
    display: block;
    cursor: pointer;
    width: 1.6rem;
    height: auto;
    border: none;
    background: none;
    visibility: visible;
    z-index: 11;

    .burger-line {
      display: block;
      width: 100%;
      height: 2px;
      margin: 6px 0;
      background: $on-secondary;
      border-radius: 1rem;
      transition: all 0.3s ease;

      &:nth-child(1) {
        transform-origin: center;
      }
      &:nth-child(2) {
        opacity: 1;
      }
      &:nth-child(3) {
        transform-origin: center;
      }
    }

    &.is-active {
      .burger-line {
        background-color: $primary;
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    z-index: 10;
    background-color: $secondary;
    transition: all 0.3s ease-in-out;

    &.is-active {
      left: 0;
    }

    .menu-inner {
      display: flex;
      flex-direction: column;

      .menu-item {
        margin: 0.5rem 0;

        a {
          @include bodyLarge;
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

  @media (min-width: 768px) {
    .burger {
      display: none;
    }

    .menu {
      flex-direction: row;
      position: static;
      width: auto;
      height: auto;
      box-shadow: none;
      background: none;
      padding: 0rem;
      .menu-inner {
        flex-direction: row;
        gap: 1.5rem;
      }
    }

    .overlay {
      display: none;
    }
  }
}
</style>
