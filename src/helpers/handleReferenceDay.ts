import { ONE_DAY } from '../constants/values';

export default (date: string | Date): string => {
  const today = new Date().setHours(0, 0, 0, 0);
  const dayToCompare = new Date(date).setHours(0, 0, 0, 0);

  if (today === dayToCompare) {
    return 'Hoy';
  }

  if (today > dayToCompare) {
    if (today - dayToCompare === ONE_DAY) {
      return 'Ayer';
    }

    if (today - dayToCompare === ONE_DAY * 2) {
      return 'Antier';
    }
  }

  if (today < dayToCompare) {
    return 'Próximamente';
  }

  const day = new Date(date).toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
  });

  return day.charAt(0).toUpperCase() + day.slice(1);
};
