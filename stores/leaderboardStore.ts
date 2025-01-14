import type { LeaderboardData } from '~/utils/types/leaderboard';

export const useLeaderboardStore = defineStore('leaderboard', () => {
  const isLoading = ref(false);

  const leaderboard = ref<LeaderboardData>({
    backend: [],
    frontend: [],
    frameworks: [],
    designtools: [],
  });

  const fetchLeaderboard = async () => {
    try {
      isLoading.value = true;
      const data = await $fetch<{ success: boolean; leaderboard: LeaderboardData }>(
        '/api/quiz/leaderboard'
      );
      leaderboard.value = data.leaderboard;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    leaderboard,
    fetchLeaderboard,
  };
});
