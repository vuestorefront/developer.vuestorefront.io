import { parse } from 'regexparam';
import isEmpty from 'lodash/isEmpty';
import { gitHubFetch } from '~/poc/server/utils/github/utils/gitHubFetch';
import { parseContent } from '#content/server';

const githubBlobUrl = parse('blob/:ref/*');

const exec = (
  path: string,
  result: {
    keys: string[];
    pattern: RegExp;
  },
): Record<string, unknown> => {
  let index = 0;
  const out: {
    [key: string]: unknown;
    [key: number]: unknown;
  } = {};
  const matches: RegExpExecArray | Record<string | number, unknown> =
    result.pattern.exec(path) || {};
  while (index < result.keys.length) {
    index += 1;
    out[result.keys[index]] = matches[index] || null;
  }
  return out;
};

export default (GITHUB_TOKEN: string) => {
  return async ({
    organization,
    repository,
    filePath = '',
  }: {
    organization: string;
    repository: string;
    filePath?: string;
  }) => {
    let reference = '';
    let mutablePath = `${filePath}`;
    const mutableRepo = `${repository}`;

    if (!isEmpty(mutablePath)) {
      const execResult = exec(`/${mutablePath}`, githubBlobUrl);
      if (execResult.ref) {
        reference = `${execResult.ref}`;
        mutablePath = mutablePath.replace(`blob/${reference}`, '');
      }
    } else if (mutableRepo.includes('@')) {
      [, reference] = mutableRepo.split('@');
    }

    const fileData = await gitHubFetch<string, 'text'>(
      GITHUB_TOKEN,
      { organization, repository },
      `/contents/${mutablePath}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.raw',
          Authorization: `token ${GITHUB_TOKEN}`,
        },
        params: {
          ...(reference ? { ref: reference } : {}),
        },
        response: true,
        responseType: 'text',
      },
    );

    return parseContent(`content:${mutablePath.split('/').pop()}`, fileData);
  };
};
