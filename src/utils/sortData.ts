import { IToyCard } from '../types';

import appState from '../appState';
import sortOptions from '../data/sortOptions';

const sortData = (data: IToyCard[]) => {
  const { nameAscend, nameDescend, countAscend, countDescend, yearAscend, yearDescend } =
    sortOptions;

  if (appState.sorting === nameAscend) return data.sort((a, b) => a.name.localeCompare(b.name));
  if (appState.sorting === nameDescend) return data.sort((a, b) => b.name.localeCompare(a.name));
  if (appState.sorting === countAscend) return data.sort((a, b) => (+a.count > +b.count ? 1 : -1));
  if (appState.sorting === countDescend) return data.sort((a, b) => (+b.count > +a.count ? 1 : -1));
  if (appState.sorting === yearAscend) return data.sort((a, b) => (+a.year > +b.year ? 1 : -1));
  if (appState.sorting === yearDescend) return data.sort((a, b) => (+b.year > +a.year ? 1 : -1));

  return data;
};

export default sortData;
