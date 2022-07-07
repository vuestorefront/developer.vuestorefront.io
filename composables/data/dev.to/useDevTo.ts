import { BlogArticleApiResponse } from '~/server/utils/devTo/types';
import { useBlogArticleById } from '~/composables/api/devTo/useBlogArticleById';
import { useBlogUser } from '~/composables/api/devTo/useBlogUser';
import { useBlogArticles } from '~/composables/api/devTo/useBlogArticles';

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

  return {
    convertPostsToProps,
    useBlogArticleById,
    useBlogUser,
    useBlogArticles,
  };
};
