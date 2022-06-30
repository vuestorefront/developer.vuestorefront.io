import { BlogArticleApiResponse } from '~/server/utils/devTo/types';

export const useDevTo = () => {
  const convertPostsToProps = (posts: BlogArticleApiResponse[] | any) =>
    computed(() =>
      Array.isArray(posts)
        ? posts.map((post) => {
            return {
              id: post.id,
              author: {
                name: post.user.name,
                avatar: post.user.profile_image_90,
              },
              date: new Date(post.published_at),
              description: post.description,
              image: post.cover_image,
              slug: post.slug,
              title: post.title,
              tags: post.tag_list,
              readingTime: post.reading_time_minutes,
            };
          })
        : [],
    );

  return {
    convertPostsToProps,
  };
};
