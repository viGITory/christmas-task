import './resetFiltersButton.scss';

import appState from '../../appState';
import { appStateSubject, resetFiltersSubject } from '../../subject';
import createElement from '../../utils/createElement';

class ResetFiltersButton {
  render = () => {
    const container = createElement('button', { class: 'reset-filters-button', type: 'button' }, [
      createElement('span', { class: 'visually-hidden' }, ['фильтры']),
    ]);

    container.addEventListener('click', () => {
      appState.filters.shape.clear();
      appState.filters.color.clear();
      appState.filters.size.clear();
      appState.filters.favorite = false;

      resetFiltersSubject.notify();
      appStateSubject.notify();
    });

    return container;
  };
}

const resetFiltersButton = new ResetFiltersButton();
export default resetFiltersButton;
