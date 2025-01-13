import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  questionText: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

const quizSchema = new mongoose.Schema({
  quizName: { type: String, required: true },
  description: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.models.Quiz || mongoose.model('quizzes', quizSchema);

export default Quiz;
