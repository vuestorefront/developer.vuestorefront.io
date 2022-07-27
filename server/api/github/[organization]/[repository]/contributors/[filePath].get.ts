import { useRuntimeConfig } from '#imports';
import { $fetch } from 'ohmyfetch';
import { sanitizeRepo } from '~/server/utils/sanitize';
import { joinURL } from 'ufo';
import { GitHubCommitsRestResponse } from '~/types/api/gitHub';

export default defineEventHandler(async (event) => {
  const { organization, repository, filePath } = event.context.params;
  const token = useRuntimeConfig().githubToken;
  const apiUrl = joinURL(
    'https://api.github.com/',
    'repos',
    organization,
    sanitizeRepo(repository),
    'commits',
  );
  const data = await $fetch<GitHubCommitsRestResponse[], 'json'>(apiUrl, {
    headers: {
      Authorization: `token ${token}`,
    },
    params: {
      path: filePath,
    },
    retry: 3,
    method: 'GET',
  });

  return data.map((d) => ({
    name: d.commit.author.name,
    avatar: d.author.avatar_url,
    username: d.author.login,
    url: d.author.html_url,
  }));
});
