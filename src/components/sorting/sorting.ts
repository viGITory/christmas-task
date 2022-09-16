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

  render = (className?: string) => {
    const container = createElement(
      'div',
      { class: className ? `${className} sorting` : 'sorting' },
      ['Сортировать']
    );

    Object.values(sortOptions).forEach((value) => {
      const option = createElement('option', { class: 'sorting__option', value: `${value}` }, [
        value,
      ]);

      this.select.append(option);
    });

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
