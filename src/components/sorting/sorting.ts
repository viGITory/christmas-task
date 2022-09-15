import './sorting.scss';

import createElement from '../../utils/createElement';
import { appStateSubject } from '../../subject';

import appState from '../../appState';
import sortOptions from '../../data/sortOptions';

class Sorting {
  select;

  constructor() {
    this.select = createElement('select', { class: 'sorting__select' });

    this.addListeners();
  }

  render = () => {
    const container = createElement('div', { class: 'sorting' }, ['Сортировка']);

    Object.values(sortOptions).forEach((value) => {
      const option = createElement('option', { class: 'sorting__option', value: `${value}` }, [
        value,
      ]);

      this.select.append(option);
    });

    container.innerHTML = `
      <h3 class="sorting__title">Сортировка</h3>
    `;
    container.append(this.select);

    return container;
  };

  addListeners = () => {
    this.select.addEventListener('change', () => {
      if (this.select instanceof HTMLSelectElement) {
        appState.sorting = this.select.value;
        appStateSubject.notify();
      }
    });
  };
}

export default Sorting;
