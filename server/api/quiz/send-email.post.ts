import ejs from 'ejs';
import { createSendGridClient } from '~/server/utils/sendGrid';
import { EmailDetails, EmailQuizBody } from '~~/types/api/quiz';
import emailTemplate from '~/server/utils/templates/quizResponseEmail';
import { createSupabaseClient } from '~/server/utils/supabase';

import {
  defineEventHandler,
  getCookie,
  H3Event,
  readBody,
  setCookie,
} from 'h3';

type SendEmailBody = {
  quiz: EmailQuizBody;
  details: EmailDetails;
};

/**
 * Sends e-mail with quiz results to the user
 */

async function downloadPdf(url: string) {
  const base64 = await fetch(url).then((response: any) =>
    response.buffer().then((buffer: any) => buffer.toString('base64')),
  );

  return base64;
}

async function sendEmail(quiz: EmailQuizBody, details: EmailDetails) {
  const sendGrid = createSendGridClient();

  const { href } = new URL(
    `/quiz/results/${details.id}`,
    useRuntimeConfig().public.pageUrl,
  );

  // const image = await downloadImage(details.diploma);
  const pdf = await downloadPdf(details.diploma);

  const html = ejs.render(emailTemplate, {
    name: details.name,
    surname: details.surname,
    score: details.score,
    passed: details.passed,
    quiz_name: quiz.title,
    passing_score: quiz.passing_score,
    // diploma: image,
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
    attachments: [
      {
        content: pdf,
        filename: `${details.name}-${details.surname}-diploma.pdf`,
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  });
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SendEmailBody>(event);
  const supabase = createSupabaseClient();

  const { quiz, details } = body;
  
  await sendEmail(quiz, details);

  return {
    status: 200,
    body: 'OK',
  };
});
