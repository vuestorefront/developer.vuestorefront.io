import { joinURL, withQuery } from 'ufo';
import { generateReturnMethods } from '~/utils/fetch';
import { ApiUrl } from '~/enums/apiUrl';

export const useGitHub = (
  baseRepository = '',
  baseBranch = 'main',
  contentPath = 'content',
) => {
  // Temp solution before nuxt-content 2.1.x
  const route = useRoute();
  const runTimeConfig = useRuntimeConfig();
  const repository = computed(
    () => baseRepository || runTimeConfig.public.gitHub.repository,
  );
  const branch = computed(
    () => baseBranch || runTimeConfig.public.gitHub.branch,
  );
  const content = computed(
    () => baseRepository || useRuntimeConfig().public.gitHub.contentPath,
  );
  const currentFile = computed(() => `${route.path}.md`);

  const getEditPageLink = (currentPage: string) => {
    return joinURL(
      'https://github.com',
      repository.value,
      'edit',
      branch.value,
      content.value,
      ...currentPage.split('/'),
    );
  };

  const useFileCommits = () =>
    generateReturnMethods(
      withQuery(joinURL(ApiUrl.GitHub, 'contributors'), {
        repository: repository.value,
        file: [content.value, currentFile.value].join('/'),
      }),
    );

  return {
    currentFile,
    getEditPageLink,
    useFileCommits,
  };
};
