export const sanitizeJsonResponse = <T>(data: T) =>
  JSON.parse(
    JSON.stringify(data).replace(
      /https:\/\/api\.github\.com\//g,
      'https://github.com/',
    ),
  );
