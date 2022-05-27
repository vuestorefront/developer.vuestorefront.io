import createFetchRepo from './fetchRepoData';
import createFetchFile from './fetchFileContent';
import createFetchTree from './fetchTree';

export { gitHubFetch } from '~/server/utils/github/utils/gitHubFetch';

const fetchRepoData = (GITHUB_TOKEN: string) => createFetchRepo(GITHUB_TOKEN);

const fetchFileContent = (GITHUB_TOKEN: string) =>
  createFetchFile(GITHUB_TOKEN);

const fetchTree = (GITHUB_TOKEN: string) => createFetchTree(GITHUB_TOKEN);

export { fetchFileContent, fetchRepoData, fetchTree };
