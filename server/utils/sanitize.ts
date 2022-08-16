export const sanitizeRepo = (repository: string): string => {
  return repository.includes('@')
    ? `${repository.split('@').pop()}`
    : repository;
};
