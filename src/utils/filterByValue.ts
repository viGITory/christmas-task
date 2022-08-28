import { IToyCard } from '../types';
import appState from '../appState';

const filterByValue = (data: IToyCard[]) => {
  const { shape, color, size, favorite } = appState.filters;

  return data
    .filter((item) => !shape.size || shape.has(item.shape))
    .filter((item) => !color.size || color.has(item.color))
    .filter((item) => !size.size || size.has(item.size))
    .filter((item) => (favorite ? item.favorite : item));
};

export default filterByValue;
