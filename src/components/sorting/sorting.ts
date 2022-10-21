import './sorting.scss';

import createElement from '../../utils/createElement';
import { appStateSubject } from '../../subject';

import appState from '../../appState';
import sortOptions from '../../data/sortOptions';

class Sorting {
  container;

  select;

  constructor({ className = '' }) {
    this.container = createElement('label', { class: `${className} sorting`.trim() }, [
      'Сортировать ',
    ]);
    this.select = createElement('select', { class: 'sorting__select' });

    this.addListeners();
  }

  render = () => {
    Object.values(sortOptions).forEach((value) => {
      const option = createElement('option', { class: 'sorting__option', value: `${value}` }, [
        value,
      ]);

      this.select.append(option);
    });

    this.container.append(this.select);

    return this.container;
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
