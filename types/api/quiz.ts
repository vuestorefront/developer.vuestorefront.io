import { ComputedRef } from "nuxt/dist/app/compat/capi";

export interface Question {
  title: string;
  answers: string[];
}

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
  correct_answers: string[];
  discord_role_id: string;
  passing_score: number;
};

export type EmailQuizBody = {
  title: string;
  passing_score: number;
};

export type EmailDetails = {
  id: string;
  name: string;
  surname: string;
  email: string;
  score: number;
  passed: boolean;
  diploma: string;
};
export interface UserDetails {
  name: string;
  surname: string;
  email: string;
}

export type Response = {
  id: number;
  user_id: string | null;
  quiz_id: string;
  discord_user_id: string | null;
  score: number;
  passed: boolean;
  answers: string[];
  user_details: UserDetails;
  submitter_cookie: string;
  created_at: string;
};

export type ApiQuizQuestions = Pick<Quiz, 'id' | 'title' | 'questions'>;

export type ApiQuizResponse = {
  id: Response['id'];
  score: Response['score'];
  passed: Response['passed'];
  username: string;
  isSubmitter: boolean;
  isBadgeClaimed: boolean;
  createdAt: Response['created_at'];
  quiz: Pick<Quiz, 'id' | 'title' | 'passing_score'>;
};

export type ApiQuizSubmit = {
  id: Response['id'];
};

