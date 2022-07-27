import { ApiUrl } from '~/enums/apiUrl';
import { joinURL, withQuery } from 'ufo';
import { generateReturnMethods } from '~/utils/fetch';
import { BlogArticleApiResponse } from '~/types/api/devTo';

export const useDevTo = () => {
  const convertPostsToProps = (posts: BlogArticleApiResponse[] | any) =>
    computed(() =>
      Array.isArray(posts)
        ? posts.map(
            (
              post,
            ): {
              author?: {
                name: string;
                username: string;
                avatar: string;
              };
              date: Date | number;
              description: string;
              id: string | number;
              image: string;
              readingTime: string | number;
              slug: string;
              tags: string[];
              title: string;
              url: string;
            } => {
              return {
                id: post.id,
                author: {
                  name: post.user.name,
                  username: post.user.username,
                  avatar: post.user.profileImage90,
                },
                date: new Date(post.publishedAt),
                description: post.description,
                image: post.coverImage,
                slug: post.slug,
                title: post.title,
                tags: post.tagList,
                readingTime: post.readingTimeMinutes,
                url: post.url,
              };
            },
          )
        : [],
    );

  const useBlogArticleById = (id: number | string) =>
    generateReturnMethods(`${ApiUrl.Blog}articles/${id}`);

  const useBlogUser = ({ username, id }: { username?: string; id?: number }) =>
    generateReturnMethods(
      withQuery(joinURL(ApiUrl.Blog, 'user'), {
        ...(id && !username ? { id: `${id}` } : {}),
        ...(username ? { username } : {}),
      }),
    );

  const useBlogArticles = ({
    username,
    page,
    perPage,
    collectionId,
    urlQuery = {},
    organization,
  }: {
    username?: string;
    organization?: string;
    page?: number;
    perPage?: number;
    collectionId?: number;
    urlQuery?: Record<string, string | string[] | undefined>;
  }): ReturnType<typeof generateReturnMethods<BlogArticleApiResponse[]>> =>
    generateReturnMethods(
      withQuery(
        joinURL(
          ApiUrl.Blog,
          ...(!organization && username
            ? ['user', 'articles']
            : [organization, 'articles']),
        ),
        {
          ...(username && !organization ? { username } : {}),
          ...(page ? { page: `${page}` } : {}),
          ...(perPage ? { perPage: `${perPage}` } : {}),
          ...(!organization
            ? {
                ...(collectionId ? { collectionId: `${collectionId}` } : {}),
                ...urlQuery,
              }
            : {}),
        },
      ),
    );

  return {
    convertPostsToProps,
    useBlogArticleById,
    useBlogUser,
    useBlogArticles,
  };
};
