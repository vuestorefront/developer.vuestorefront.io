export default async function fetchOrgArticles({
  organization,
  page,
  perPage,
}: {
  organization: string;
  page?: number;
  perPage?: number;
  [k: string]: any | any[];
}) {
  return $fetch(`https://dev.to/api/organizations/${organization}/articles`, {
    method: 'GET',
    params: {
      page: page || 1,
      per_page: perPage || 10,
    },
    responseType: 'json',
  });
}
