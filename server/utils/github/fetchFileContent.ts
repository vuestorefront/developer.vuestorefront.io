import { parse } from 'regexparam';
import isEmpty from 'lodash/isEmpty';
import { gitHubFetch } from '~/server/utils/github/utils/gitHubFetch';
import { parseContent } from '#content/server';

const githubBlobUrl = parse('blob/:ref/*');

const exec = (
  path: string,
  result: {
    keys: string[];
    pattern: RegExp;
  },
): Record<string, unknown> => {
  let i = 0;
  const out: {
    [key: string]: unknown;
    [key: number]: unknown;
  } = {};
  const matches: RegExpExecArray | Record<string | number, unknown> =
    result.pattern.exec(path) || {};
  while (i < result.keys.length) {
    i += 1;
    out[result.keys[i]] = matches[i] || null;
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
    let ref = '';
    let mutablePath = `${filePath}`;
    const mutableRepo = `${repository}`;

    if (!isEmpty(mutablePath)) {
      const execResult = exec(`/${mutablePath}`, githubBlobUrl);
      if (execResult.ref) {
        ref = `${execResult.ref}`;
        mutablePath = mutablePath.replace(`blob/${ref}`, '');
      }
    } else if (mutableRepo.includes('@')) {
      [, ref] = mutableRepo.split('@');
    }

    const fileData = await gitHubFetch<string, 'text'>(
      GITHUB_TOKEN,
      { organization, repository },
      `contents/${mutablePath}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.raw',
          Authorization: `token ${GITHUB_TOKEN}`,
        },
        params: {
          ...(ref ? { ref } : {}),
        },
        response: true,
        responseType: 'text',
      },
    );

    return parseContent(`content:${mutablePath.split('/').pop()}`, fileData);
  };
};
