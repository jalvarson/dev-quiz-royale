import Quiz from '../../models/quiz';
import { connectToDatabase } from '~/utils/mongodb';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  await connectToDatabase(config.mongodbUri);

  const { name } = event.context.params as { name: string };
  const quiz = await Quiz.findOne({ quizName: name });

  if (!quiz) {
    throw createError({ statusCode: 404, message: 'Quiz not found' });
  }

  return {
    quizName: quiz.quizName,
    description: quiz.description,
    questions: quiz.questions,
  };
});
