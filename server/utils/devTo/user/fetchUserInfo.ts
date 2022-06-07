import { BlogUserApiResponse } from '../types';

export default async function fetchUserInfo({
  id,
  username,
}: {
  id?: number | string;
  username?: string;
}) {
  const apiUrl =
    id && !username
      ? `https://dev.to/api/users/${id}`
      : `https://dev.to/api/users/by_username?url=${username}`;

  return $fetch<BlogUserApiResponse>(apiUrl, {
    method: 'GET',
    responseType: 'json',
  });
}
