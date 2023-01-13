import ejs from 'ejs';
import { createSendGridClient } from '~/server/utils/sendGrid';
import { EmailDetails, EmailQuizBody } from '~~/types/api/quiz';
import emailTemplate from '~/server/utils/templates/quizResponseEmail';

/**
 * Sends e-mail with quiz results to the user
 */

export const sendEmail = (quiz: EmailQuizBody, details: EmailDetails) => {
  const sendGrid = createSendGridClient();
  const { href } = new URL(
    `/quiz/results/${details.id}`,
    useRuntimeConfig().public.pageUrl,
  );

  const html = ejs.render(emailTemplate, {
    name: details.name,
    surname: details.surname,
    score: details.score,
    passed: details.passed,
    quiz_name: quiz.title,
    passing_score: quiz.passing_score,
    diploma: details.diploma,
    href,
  });

  return sendGrid.send({
    to: details.email,
    from: {
      name: 'Vue Storefront Developer',
      email: 'noreply@developer.vuestorefront.io',
    },
    subject: `Your ${quiz.title} quiz results`,
    html,
    trackingSettings: {
      clickTracking: {
        enable: false,
      },
    },
  });
};