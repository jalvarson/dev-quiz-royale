<script setup>
import SectionLayout from '~/components/layouts/Section.vue';

const leaderboardStore = useLeaderboardStore();

onMounted(() => {
  leaderboardStore.fetchLeaderboard();
});

// create computed property for setting different class dependign on score
const getScoreClass = score => {
  if (score > 80) {
    return 'label--high-score';
  } else if (score > 60) {
    return 'label--medium-score';
  } else {
    return 'label--low-score';
  }
};
</script>

<template>
  <div class="leaderboard">
    <h2 class="leaderboard__title">Leaderboard</h2>
    <p class="leaderboard__description">
      Compete with developers worldwide! Score big, climb the ranks, and claim
      your spot as the ultimate tech trivia master.
    </p>

    <SectionLayout :columns="4" v-if="!leaderboardStore.isLoading">
      <Card
        v-for="(entries, category) in leaderboardStore.leaderboard"
        :key="category"
        :title="`Top 5 ${category}`"
      >
        <ul>
          <li v-for="(entry, index) in entries" :key="index" class="item">
            <span class="item__username"
              >{{ index + 1 }}. {{ entry.username }}</span
            >

            <span :class="`label ${getScoreClass(entry.score)}`"
              >{{ entry.score }}%</span
            >
          </li>
        </ul>
      </Card>
    </SectionLayout>

    <p v-else>Loading leaderboard...</p>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 0.5rem 0;

  &__username {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:last-child {
    border-bottom: none;
  }
}

.label {
  @include labelMedium;
  font-weight: 700;
  color: $on-primary;
  padding: 0.2rem 0.3rem;
  border-radius: 0.3rem;
  &--high-score {
    background-color: $tertiary;
    color: $on-tertiary;
  }
  &--medium-score {
    background-color: $primary;
    color: $on-primary;
  }
  &--low-score {
    background-color: $primary-light;
    color: $on-primary-light;
  }
}
</style>
