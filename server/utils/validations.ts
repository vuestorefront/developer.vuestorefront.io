export const validateToken = (token?: string) => {
  if (!token) throw new Error('No Token provided');
};
