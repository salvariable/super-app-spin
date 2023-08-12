export default (points: number): string =>
  `${Number(points / 10).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  })}`;
