import QuizResult from '~/server/models/save';
import { connectToDatabase } from '~/utils/mongodb';
import type { LeaderboardData } from '~/utils/types/leaderboard';

export default defineEventHandler(async (): Promise<{ success: boolean; leaderboard: LeaderboardData }> => {
  const config = useRuntimeConfig();
  await connectToDatabase(config.mongodbUri);

  try {
    const quizzes = ['backend', 'frontend', 'frameworks', 'designtools'];
    const leaderboardData: LeaderboardData = {
      backend: [],
      frontend: [],
      frameworks: [],
      designtools: [],
    };

    for (const quizName of quizzes) {
      const topScores = await QuizResult.find({ quizName })
        .sort({ score: -1, completedAt: 1 })
        .limit(5)
        .select('username score');

      leaderboardData[quizName as keyof LeaderboardData] = topScores.map(
        ({ username, score }) => ({
          username,
          score: score,
        })
      );
    }

    return {
      success: true,
      leaderboard: leaderboardData,
    };
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw createError({ statusCode: 500, message: 'Failed to fetch leaderboard data' });
  }
});
