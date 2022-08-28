import { IToyCard, TValueFilter } from '../../types';
import appState from '../../appState';

import createElement from '../../utils/createElement';

class ValueFilters {
  data;

  constructor(data: IToyCard[]) {
    this.data = data;
  }

  createFilterGroup = (description: string, filterType: TValueFilter) => {
    const container = createElement('div', { class: 'value-filters__group' }, [description]);
    const isFavoriteFilter = filterType === 'favorite';
    const filterValues = [
      ...new Set(this.data.map((item) => !isFavoriteFilter && item[filterType])),
    ];

    filterValues.forEach((value) => {
      const checkbox = createElement('input', {
        class: 'value-filters__button',
        type: 'checkbox',
        'aria-label': `${isFavoriteFilter ? 'Любимые игрушки' : `${description} ${value}`}`,
      }) as HTMLInputElement;

      checkbox.addEventListener('input', () =>
        isFavoriteFilter
          ? (appState.filters.favorite = checkbox.checked)
          : checkbox.checked && !appState.filters[filterType].has(value)
          ? appState.filters[filterType].add(value)
          : appState.filters[filterType].delete(value)
      );

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
