import { useRuntimeConfig } from '#imports';
import { $fetch } from 'ohmyfetch';
import { joinURL, withQuery } from 'ufo';
import {
  GitHubCommitsRestResponse,
  GitHubUsersRestResponse,
} from '~/types/api/gitHub';

export default defineEventHandler(async (event) => {
  const { repository, file } = useQuery(event);
  const token = useRuntimeConfig().githubToken;

  if (
    !repository ||
    !file ||
    Array.isArray(repository) ||
    Array.isArray(file)
  ) {
    return createError(
      'API query parameters missing or wrong: repository or file',
    );
  }

  const data = await $fetch<GitHubCommitsRestResponse[], 'json'>(
    joinURL('https://api.github.com/', 'repos', repository, 'commits'),
    {
      params: {
        path: file,
      },
      headers: {
        Authorization: `token ${token}`,
      },
      retry: 3,
      method: 'GET',
    },
  );

  const contributorsLogin = new Set(data.map((c) => c.author.login));
  const contributors = await Promise.all(
    [...contributorsLogin].map(async (c) => {
      const user = await $fetch<GitHubUsersRestResponse>(
        joinURL('https://api.github.com/', 'users', c),
        {
          headers: {
            Authorization: `token ${token}`,
          },
        },
      );

      return {
        name: user.name,
        login: user.login,
        avatar: user.avatar_url,
        url: user.html_url,
      };
    }),
  );

  return {
    lastUpdate: data[0].commit.author.date,
    contributors,
    commits: data.map((c) => c.commit),
  };
});
