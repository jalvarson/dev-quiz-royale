export interface Quiz {
  quizName: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
}

export interface Option {
  text: string; 
  isCorrect: boolean;
}

export interface SaveQuizResultPayload {
    username: string;
    quizName: string;
    score: number;
  }
  