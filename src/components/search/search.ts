import './search.scss';

import createElement from '../../utils/createElement';
import appState from '../../appState';

class Search {
  render = () => {
    const container = createElement('input', {
      class: 'search',
      type: 'search',
      placeholder: 'Поиск',
      autocomplete: 'off',
      autofocus: '',
    }) as HTMLInputElement;

    container.addEventListener('input', () => {
      appState.search = container.value;
    });

    return container;
  };
}

export default Search;
