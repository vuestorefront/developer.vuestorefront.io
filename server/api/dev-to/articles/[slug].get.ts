import { BlogArticleApiResponse } from '~/server/utils/devTo/types';
import transformObjectKeys from 'transform-object-keys';
import { parseContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const { slug, username } = event.context.params;
  const data = transformObjectKeys(
    await $fetch<BlogArticleApiResponse>(
      `https://dev.to/api/articles/${username}/${slug}`,
      {
        method: 'GET',
        responseType: 'json',
      },
    ),
    { deep: true },
  );

  const bodyMarkdown = await parseContent(
    `content:blog-article-${data.slug}-${data.id}.md`,
    `
    ---
    layout: blog
    ---
    ${data.bodyMarkdown}
    `,
  );

  return { ...data, bodyMarkdown };
});
