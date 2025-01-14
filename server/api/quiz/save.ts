import QuizResult from '~/server/models/save';
import { connectToDatabase } from '~/utils/mongodb';

export default defineEventHandler(async event => {
  const config = useRuntimeConfig();

  await connectToDatabase(config.mongodbUri);

  const { quizName, score, username } = await readBody(event);

  if (!quizName || !username || score == null) {
    console.error('Missing required fields:', { quizName, score, username });
    throw createError({ statusCode: 400, message: 'Missing required fields' });
  }

  try {
    // Save the quiz result
    const newResult = await QuizResult.create({ quizName, score, username });

    // Calculate percentile
    const totalResults = await QuizResult.countDocuments({ quizName });

    // Count users who scored strictly higher
    const betterResultsCount = await QuizResult.countDocuments({
      quizName,
      score: { $gt: score },
    });

    // Calculate percentile
    const percentile =
      totalResults > 0
        ? Math.round(((totalResults - betterResultsCount) / totalResults) * 100)
        : 0;

    // If score is 0%, percentile is always 0
    if (score === 0) {
      return {
        success: true,
        score,
        percentile: 0,
      };
    }

    return {
      success: true,
      message: 'Quiz result saved successfully',
      percentile,
    };
  } catch (error) {
    console.error('Error saving quiz result:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to save quiz result',
    });
  }
});
