export const whereObj = (
  data: Record<string, string | string[]>,
  key: string,
  isArray = false,
) => {
  if (data[key] && Array.isArray(data[key]) && isArray) {
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
            ...(isArray ? { $contains: [data[key]] } : { $in: data[key] }),
          },
        },
      ]
    : [];
};
