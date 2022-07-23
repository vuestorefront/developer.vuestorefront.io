export const whereObj = (
  data: Record<string, string | string[]>,
  key: string,
  isArray = false,
) => {
  if (data[key] && Array.isArray(data[key])) {
    return data[key].map((d) => ({
      [key]: {
        $contains: [d],
      },
    }));
  }

  return data[key]
    ? [
        {
          [key]: {
            ...(isArray ? { $contains: [data[key]] } : { $eq: data[key] }),
          },
        },
      ]
    : [];
};
