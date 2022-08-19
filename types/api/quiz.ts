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
  discord_badge_id: string;
}

export interface SelectedAnswers {
  [key: string]: string;
}

export interface UserDetails {
  name: string;
  surname: string;
  email: string;
}

export interface Response {
  id: number;
  discord_user_id: string;
  quiz_name: string;
  answers: SelectedAnswers;
  user_details: UserDetails;
  score: number;
  submitter_cookie: string;
  created_at: string;
  quizzes: Quiz;
}

export type ApiQuizQuestions = Pick<Quiz, 'name' | 'title' | 'questions'>;

export type ApiQuizResponse = {
  id: Response['id'];
  score: Response['score'];
  username: string;
  isSubmitter: boolean;
  quiz: Pick<Quiz, 'name' | 'title'>;
};

export type ApiQuizSubmit = Pick<Response, 'id'>;

