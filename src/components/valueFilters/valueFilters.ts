import './valueFilters.scss';

import { IToyCard, TValueFilter } from '../../types';
import appState from '../../appState';

import createElement from '../../utils/createElement';
import appStateSubject from '../../subject';

class ValueFilters {
  data;

  constructor(data: IToyCard[]) {
    this.data = data;
  }

  createFilterGroup = (description: string, filterType: TValueFilter) => {
    const container = createElement(
      'div',
      { class: `value-filters__group value-filters__group--${filterType}` },
      [description]
    );
    const isFavoriteFilter = filterType === 'favorite';
    const filterValues = [
      ...new Set(this.data.map((item) => !isFavoriteFilter && item[filterType])),
    ];

    filterValues.forEach((value) => {
      const checkbox = createElement('input', {
        class: 'value-filters__button',
        type: 'checkbox',
        'aria-label': `${isFavoriteFilter ? 'Любимые игрушки' : `${description} ${value}`}`,
      });

      checkbox.addEventListener('input', () => {
        if (checkbox instanceof HTMLInputElement) {
          isFavoriteFilter
            ? (appState.filters.favorite = checkbox.checked)
            : checkbox.checked && !appState.filters[filterType].has(value)
            ? appState.filters[filterType].add(value)
            : appState.filters[filterType].delete(value);

          appStateSubject.notify();
        }
      });

      container.append(checkbox);
    });

    return container;
  };

  render = () => {
    const container = createElement('div', { class: 'value-filters' });

    container.innerHTML = `
      <h3 class="value-filters__title">Фильтры по значению</h3>
    `;

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
