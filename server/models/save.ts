import mongoose from 'mongoose';

const QuizResultSchema = new mongoose.Schema(
    {
      quizName: { type: String, required: true },
      score: { type: Number, required: true, min: 0, max: 100 },
      username: { type: String, required: true },
      completedAt: { type: Date, default: Date.now },
    },
    { collection: 'results' } 
  );
  
  const QuizResult = mongoose.models.QuizResult || mongoose.model('QuizResult', QuizResultSchema);
  export default QuizResult;
  