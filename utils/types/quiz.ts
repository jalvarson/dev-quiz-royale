export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: AnswerOption[];
}
