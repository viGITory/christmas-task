import './valueFilters.scss';

import { IToyCard, TValueFilter } from '../../../../../types';
import appState from '../../../../../appState';

import createElement from '../../../../../utils/createElement';
import { appStateSubject, resetFiltersSubject } from '../../../../../subject';

class ValueFilters {
  data;

  filters: HTMLElement[];

  constructor(data: IToyCard[]) {
    this.data = data;
    this.filters = [];

    resetFiltersSubject.subscribe(this.resetFilters);
  }

  resetFilters = () => {
    this.filters.forEach((item) => {
      if (item instanceof HTMLInputElement) {
        const checkbox = item;
        checkbox.checked = false;
      }
    });
  };

  createFilterGroup = (description: string, filterType: TValueFilter) => {
    const container = createElement('div', { class: 'value-filters__group' });
    const isFavoriteFilter = filterType === 'favorite';

    if (!isFavoriteFilter) container.textContent = `${description} `;

    const filterValues = [
      ...new Set(this.data.map((item) => !isFavoriteFilter && item[filterType])),
    ];

    filterValues.forEach((value) => {
      const label = createElement('label', {
        class: `value-filters__label value-filters__label--${filterType}`,
      });
      const text = createElement('span', {}, [`${!isFavoriteFilter ? value : 'Только любимые: '}`]);
      const checkbox = createElement('input', {
        class: 'value-filters__button',
        type: 'checkbox',
      });

      if (!isFavoriteFilter) text.classList.add('visually-hidden');

      checkbox.addEventListener('input', () => {
        if (checkbox instanceof HTMLInputElement) {
          if (isFavoriteFilter) appState.filters.isFavorite = checkbox.checked;
          else if (checkbox.checked) appState.filters[filterType].add(value);
          else appState.filters[filterType].delete(value);

          appStateSubject.notify();
        }
      });

      this.filters.push(checkbox);

      label.append(text, checkbox);
      container.append(label);
    });

    return container;
  };

  render = () => {
    const container = createElement('div', { class: 'value-filters' }, [
      createElement('h3', { class: 'value-filters__title' }, ['Фильтры по значению']),
    ]);

    container.append(
      this.createFilterGroup('Форма:', 'shape'),
      this.createFilterGroup('Цвет:', 'color'),
      this.createFilterGroup('Размер:', 'size'),
      this.createFilterGroup('Только любимые:', 'favorite')
    );

    return container;
  };
}

export default ValueFilters;
