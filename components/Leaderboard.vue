<script setup>
import SectionLayout from '~/components/layouts/Section.vue';

const top5Items = [
  { name: 'Jonas', score: '100%' },
  { name: 'Maria', score: '95%' },
  { name: 'Liam', score: '92%' },
  { name: 'Emma', score: '89%' },
  { name: 'Noah', score: '87%' },
];
</script>

<template>
  <div class="leaderboard">
    <h2 class="leaderboard__title">Leaderboard</h2>
    <p class="leaderboard__description">
        Compete with developers worldwide! Score big, climb the ranks, and claim
        your spot as the ultimate tech trivia master.
    </p>

    <SectionLayout :columns="4">
      <CardWrapper title="Top 5 Back-end">
        <ul>
          <li v-for="(item, index) in top5Items" :key="index" class="item">
            <span>{{ item.name }}</span>
            <span class="label">{{ item.score }}</span>
          </li>
        </ul>
      </CardWrapper>
      <CardWrapper title="Top 5 Front-end">
        <ul>
          <li v-for="(item, index) in top5Items" :key="index" class="item">
            <span>{{ item.name }}</span>
            <span class="label">{{ item.score }}</span>
          </li>
        </ul>
      </CardWrapper>
      <CardWrapper title="Top 5 Framework">
        <ul>
          <li v-for="(item, index) in top5Items" :key="index" class="item">
            <span>{{ item.name }}</span>
            <span class="label">{{ item.score }}</span>
          </li>
        </ul>
      </CardWrapper>
      <CardWrapper title="Top 5 Design tools">
        <ul>
          <li v-for="(item, index) in top5Items" :key="index" class="item">
            <span>{{ item.name }}</span>
            <span class="label">{{ item.score }}</span>
          </li>
        </ul>
      </CardWrapper>
    </SectionLayout>
  </div>
</template>

<style scoped lang="scss">
.leaderboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 2rem;
  &__title {
    @include displayLarge;
    @include respond-to('mobile') {
      @include displayMedium;
    }

  }
  &__description {
    @include bodyMedium;
    text-align: center;
    max-width: 600px;
  }
}

ul {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 0.5rem 0;
  &:last-child {
    border-bottom: none;
  }
}

.label {
  @include labelSmall;
  font-weight: 700;
  background-color: $primary;
  color: $on-primary;
  padding: 0.2rem 0.3rem;
  border-radius: 0.3rem;
}
</style>
