import { ref, computed } from 'vue';
import type { Question } from '~/utils/types/quiz';

export const useQuizStore = defineStore('quiz', () => {
  const currentQuizName = ref('');
  const questions = ref<Question[]>([
    {
      id: 1,
      category: 'backend',
      question: 'What does REST stand for?',
      options: [
        { text: 'Represent State', isCorrect: false },
        { text: 'Representational State Transfer', isCorrect: true },
        { text: 'Random Server Transfer', isCorrect: false },
        { text: 'Rapid State Transfer', isCorrect: false },
      ],
    },
    {
      id: 2,
      category: 'frontend',
      question: 'What is JSX used for?',
      options: [
        { text: 'Java XML', isCorrect: false },
        { text: 'JavaScript XML', isCorrect: true },
        { text: 'Java Styles', isCorrect: false },
        { text: 'JavaScript Extensible', isCorrect: false },
      ],
    },
    {
      id: 3,
      category: 'general',
      question: 'What is the capital of France?',
      options: [
        { text: 'London', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
        { text: 'Paris', isCorrect: true },
        { text: 'Berlin', isCorrect: false },
      ],
    },
    {
      id: 4,
      category: 'general',
      question: 'What is the capital of Spain?',
      options: [
        { text: 'London', isCorrect: false },
        { text: 'Madrid', isCorrect: true },
        { text: 'Paris', isCorrect: false },
        { text: 'Berlin', isCorrect: false },
      ],
    },
    {
      id: 5,
      category: 'backend',
      question: 'What is the most popular programming language?',
      options: [
        { text: 'Java', isCorrect: false },
        { text: 'Python', isCorrect: true },
        { text: 'JavaScript', isCorrect: false },
        { text: 'C#', isCorrect: false },
      ],
    },
    {
      id: 6,
      category: 'frontend',
      question: 'What is the most popular front-end framework?',
      options: [
        { text: 'Angular', isCorrect: false },
        { text: 'React', isCorrect: true },
        { text: 'Vue', isCorrect: false },
        { text: 'Svelte', isCorrect: false },
      ],
    },
    {
      id: 7,
      category: 'general',
      question: 'What is the capital of Germany?',
      options: [
        { text: 'London', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
        { text: 'Paris', isCorrect: false },
        { text: 'Berlin', isCorrect: true },
      ],
    },
    {
      id: 8,
      category: 'general',
      question: 'What is the capital of Italy?',
      options: [
        { text: 'London', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
        { text: 'Paris', isCorrect: false },
        { text: 'Rome', isCorrect: true },
      ],
    },
    {
      id: 9,
      category: 'backend',
      question: 'What is the most popular database?',
      options: [
        { text: 'MySQL', isCorrect: false },
        { text: 'MongoDB', isCorrect: true },
        { text: 'PostgreSQL', isCorrect: false },
        { text: 'SQLite', isCorrect: false },
      ],
    },
    {
      id: 10,
      category: 'frontend',
      question: 'What is the most popular CSS framework?',
      options: [
        { text: 'Bootstrap', isCorrect: true },
        { text: 'Tailwind CSS', isCorrect: false },
        { text: 'Materialize', isCorrect: false },
        { text: 'Foundation', isCorrect: false },
      ],
    },
  ]);

  const currentQuestionIndex = ref(1);
  const selectedAnswers = ref<{ questionId: number; selectedOption: number }[]>(
    []
  );

  const currentQuestion = computed(() => {
    // Dont return a question if the quiz is complete
    if (isQuizComplete.value) {
      return null;
    }
    return questions.value[currentQuestionIndex.value - 1] || null;
  });

  const isQuizComplete = computed(
    () => selectedAnswers.value.length === questions.value.length
  );

  // Score calculation (only available after quiz completion)
  const score = computed(() => {
    if (!isQuizComplete.value) return 0;

    const correctAnswersCount = selectedAnswers.value.filter(answer => {
      const question = questions.value.find(q => q.id === answer.questionId);
      if (!question) return false;
      return question.options[answer.selectedOption]?.isCorrect;
    }).length;

    return Math.round((correctAnswersCount / questions.value.length) * 100);
  });

  const setCurrentQuizName = (quizName: string) => {
    currentQuizName.value = quizName;
  };

  // Set the quiz questions
  const setQuestions = (newQuestions: Question[]) => {
    questions.value = newQuestions;
    currentQuestionIndex.value = 1;
    selectedAnswers.value = [];
    console.log('Updated questions:', questions.value);
  };

  // Select an answer for the current question and move to the next question
  const selectAnswer = (optionIndex: number) => {
    const question = questions.value[currentQuestionIndex.value - 1];
    if (!question) return;

    const existingAnswerIndex = selectedAnswers.value.findIndex(
      answer => answer.questionId === question.id
    );

    if (existingAnswerIndex !== -1) {
      selectedAnswers.value[existingAnswerIndex].selectedOption = optionIndex;
    } else {
      selectedAnswers.value.push({
        questionId: question.id,
        selectedOption: optionIndex,
      });
    }

    // Move to the next question
    if (currentQuestionIndex.value < questions.value.length) {
      currentQuestionIndex.value++;
    } else {
      console.log('Quiz completed!');
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    currentQuestionIndex.value = 1;
    selectedAnswers.value = [];
  };

  return {
    currentQuizName,
    setCurrentQuizName,
    questions,
    currentQuestionIndex,
    selectedAnswers,
    currentQuestion,
    isQuizComplete,
    score,
    setQuestions,
    selectAnswer,
    resetQuiz,
  };
});
