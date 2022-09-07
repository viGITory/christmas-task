import { IToyCard } from '../types';
import appState from '../appState';

const filterByRange = (data: IToyCard[]) => {
  return data.filter(
    (item) =>
      +item.count >= appState.range.count.min &&
      +item.count <= appState.range.count.max &&
      +item.year >= appState.range.year.min &&
      +item.year <= appState.range.year.max
  );
};

export default filterByRange;
