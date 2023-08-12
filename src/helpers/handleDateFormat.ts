export const formatTransactionDate = (date: string | Date): string => {
  const formattedDate = new Date(date).toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export default (date: string | Date): string =>
  new Date(date).toLocaleDateString('es-MX');
