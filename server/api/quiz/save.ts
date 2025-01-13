import QuizResult from '~/server/models/save';
import { connectToDatabase } from '~/utils/mongodb';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  await connectToDatabase(config.mongodbUri);

  const { quizName, score, username } = await readBody(event);
  console.log('Received body:', { quizName, score, username });
  
  if (!quizName || !username || score == null) {
    console.error('Missing required fields:', { quizName, score, username });
    throw createError({ statusCode: 400, message: 'Missing required fields' });
  }
  
  try {
    await QuizResult.create({ quizName, score, username });
    return { success: true, message: 'Quiz result saved successfully' };
  } catch (error) {
    console.error('Error saving quiz result:', error);
    throw createError({ statusCode: 500, message: 'Failed to save quiz result' });
  }
});
