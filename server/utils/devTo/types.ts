import type { CamelCase } from 'transform-object-keys';

export type BlogUserApiResponse = CamelCase<{
  github_username: string;
  id: number;
  joined_at: Date;
  location: string;
  name: string;
  profile_image: string;
  summary: string;
  twitter_username: string;
  type_of: string;
  username: string;
  website_url: string | null;
}>;

export type BlogUser = CamelCase<{
  github_username: string;
  name: string;
  profile_image: string;
  profile_image_90: string;
  twitter_username: string;
  username: string;
  website_url: string;
}>;

export type BlogOrganization = CamelCase<{
  name: string;
  profile_image: string;
  profile_image_90: string;
  slug: string;
  username: string;
}>;

export type BlogArticleApiResponse = CamelCase<{
  body_html: string;
  body_markdown: string;
  canonical_url: string;
  collection_id: number;
  comments_count: number;
  cover_image: string;
  created_at: Date;
  crossposted_at?: Date;
  description: string;
  edited_at?: Date;
  id: number;
  last_comment_at: Date;
  organization: BlogOrganization;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: Date;
  published_timestamp: Date;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  tag_list: string;
  tags: string[];
  title: string;
  type_of: string;
  url: string;
  user: BlogUser;
}>;
