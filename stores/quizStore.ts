import { ref, computed } from 'vue';
import { type SaveQuizResultResponse, type Question, type Quiz, type SaveQuizResultPayload } from '~/utils/types/quiz';

export const useQuizStore = defineStore('quiz', () => {
  const isLoading = ref(false);
  const isSaving = ref(false);
  const username = ref<string | null>(null);
  const questions = ref<Question[]>([]);
  const currentQuizName = ref('');
  const currentQuestionIndex = ref(1);
  const selectedAnswers = ref<{ questionId: number; selectedOption: number }[]>(
    []
  );
  const percentile = ref<number>(0);

  const setUsername = (name: string) => {
    username.value = name;
  };

  const fetchQuiz = async (name: string) => {
    isLoading.value = true;
    try {
      const data = await $fetch<Quiz>(`/api/quiz/${name}`);
      currentQuizName.value = data.quizName;
      questions.value = data.questions;
    } catch (error) {
      console.error('Error fetching quiz:', error);
      throw new Error('Quiz not found');
    } finally {
      isLoading.value = false;
    }
  };

  const saveQuizResult = async () => {
    if (!isQuizComplete.value) {
      console.warn('Quiz is not complete, result not saved.');
      return;
    }
  
    const payload: SaveQuizResultPayload = {
      username: username.value,
      quizName: currentQuizName.value,
      score: score.value,
    };
  
    try {
      isSaving.value = true;
      const result = await $fetch<SaveQuizResultResponse>('/api/quiz/save', {
        method: 'POST',
        body: payload,
      });
  
      percentile.value = result.percentile;
    } catch (error) {
      console.error('Error saving quiz result:', error);
      throw new Error('Failed to save quiz result');
    } finally {
      isSaving.value = false;
    }
  };
  

  // Get the current question based on the current question index
  const currentQuestion = computed(() => {
    if (!questions.value || questions.value.length === 0) {
      return null;
    }
    return questions.value[currentQuestionIndex.value - 1] || null;
  });

  // Check if the quiz is complete by checking if all questions have been answered
  const isQuizComplete = computed(() => {
    if (!questions.value || questions.value.length === 0) {
      return false;
    }
    return selectedAnswers.value.length === questions.value.length;
  });

  // Calculate the score
  const score = computed(() => {
    if (!isQuizComplete.value) return 0;

    const correctAnswersCount = selectedAnswers.value.filter(answer => {
      const question = questions.value.find(q => q.id === answer.questionId);
      if (!question) return false;
      return question.options[answer.selectedOption]?.isCorrect;
    }).length;

    return Math.round((correctAnswersCount / questions.value.length) * 100);
  });

  // Select an answer for the current question
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

    if (currentQuestionIndex.value < questions.value.length) {
      currentQuestionIndex.value++;
    }
  };

  // Resets the quiz
  const resetQuiz = () => {
    username.value = null;
    questions.value = [];
    currentQuizName.value = '';
    currentQuestionIndex.value = 1;
    selectedAnswers.value = [];
  };

  return {
    isLoading,
    isSaving,
    username,
    currentQuizName,
    questions,
    currentQuestionIndex,
    selectedAnswers,
    currentQuestion,
    isQuizComplete,
    percentile,
    score,
    setUsername,
    fetchQuiz,
    saveQuizResult,
    selectAnswer,
    resetQuiz,
  };
});
