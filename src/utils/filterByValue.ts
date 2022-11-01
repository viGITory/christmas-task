import { IToyCard } from '../types';
import appState from '../appState';

const filterByValue = (data: IToyCard[]) => {
  const { shape, color, size, isFavorite } = appState.filters;

  return data
    .filter((item) => !shape.size || shape.has(item.shape))
    .filter((item) => !color.size || color.has(item.color))
    .filter((item) => !size.size || size.has(item.size))
    .filter((item) => (isFavorite ? item.favorite : item));
};

export default filterByValue;
