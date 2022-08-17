export interface CorrectAnswer {
  id: string;
  answer: string;
}

export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  title: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  name: string;
  title: string;
  questions: Question[];
  correct_answers: CorrectAnswer[];
}

export interface SelectedAnswers {
  [key: string]: string;
}

export interface Response {
  id: number;
  discord_user_id: string;
  answers: SelectedAnswers;
  score: number;
  submitter_cookie: string;
  created_at: string;
}
