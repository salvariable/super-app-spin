import { ImageSourcePropType } from 'react-native';

export const ENTITY_LIMIT = 1000;
export const ENTITY_MIN = 20;

export const IMAGES: Record<string, ImageSourcePropType> = {
  volaris: require('../assets/Images/volaris.png'),
  'smart-fit': require('../assets/Images/smart-fit.png'),
  vix: require('../assets/Images/vix.png'),
  oxxo: require('../assets/Images/oxxo.png'),
  'oxxo-gas': require('../assets/Images/oxxo-gas.png'),
};

export const CATEGORIES: Record<string, string> = {
  fuel: 'Combustible',
  flight: 'Vuelos',
  fitness: 'Deportes',
  entertainment: 'Entretenimiento',
  groceries: 'Supermercado',
};

export const ONE_DAY = 1000 * 60 * 60 * 24;
