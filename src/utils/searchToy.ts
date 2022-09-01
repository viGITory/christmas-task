import { IToyCard } from '../types';
import appState from '../appState';

const searchToy = (data: IToyCard[]) => {
  const searchValue = appState.search.toLowerCase();

  return data.filter((item) => item.name.toLowerCase().includes(searchValue));
};

export default searchToy;
