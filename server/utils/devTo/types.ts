export interface DevToUserApiResponse {
  type_of: string;
  id: number;
  username: string;
  name: string;
  summary: string;
  twitter_username: string;
  github_username: string;
  website_url: string | null;
  location: string;
  joined_at: Date;
  profile_image: string;
}

export interface DevToUser {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface DevToOrganization {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
}

export interface DevToArticleApiResponse {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  collection_id?: number;
  created_at: Date;
  edited_at: Date;
  crossposted_at?: Date;
  published_at: Date;
  last_comment_at: Date;
  published_timestamp: Date;
  reading_time_minutes: number;
  user: DevToUser;
  organization: DevToOrganization;
}
