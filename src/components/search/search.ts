import './search.scss';

import createElement from '../../utils/createElement';
import { appStateSubject } from '../../subject';

import appState from '../../appState';

class Search {
  render = () => {
    const container = createElement('input', {
      class: 'search',
      type: 'search',
      placeholder: 'Поиск',
      autocomplete: 'off',
      autofocus: '',
    });

    container.addEventListener('input', () => {
      if (container instanceof HTMLInputElement) {
        appState.search = container.value.trim();
        appStateSubject.notify();
      }
    });

    return container;
  };
}

export default Search;
