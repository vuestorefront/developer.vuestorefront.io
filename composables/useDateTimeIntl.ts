export const useDateTimeIntl = () => {
  const formatDate = ({
    date,
    locales = 'default',
    options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  }: {
    date: Date | string | number;
    locales?: ConstructorParameters<typeof Intl.DateTimeFormat>[0];
    options?: ConstructorParameters<typeof Intl.DateTimeFormat>[1];
  }) => new Intl.DateTimeFormat(locales, options).format(new Date(date || ''));

  return {
    formatDate,
  };
};
