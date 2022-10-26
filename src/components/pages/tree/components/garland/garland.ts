import './garland.scss';

import createElement from '../../../../../utils/createElement';
import { garlandSubject } from '../../../../../subject';
import appState from '../../../../../appState';

class Garland {
  container;

  constructor() {
    this.container = createElement('div', { class: 'garland garland--hide' });

    garlandSubject.subscribe(this.update);
  }

  update = () => {
    this.container.className = `garland garland--${appState.garland.color}`;

    if (!appState.garland.isActive) {
      this.container.className = 'garland garland--hide';
    }
  };

  render = () => {
    const rowCount = 8;
    let itemsCount = 3;

    while (this.container.children.length < rowCount) {
      const row = createElement('ul', { class: 'garland__row' });

      while (row.children.length < itemsCount) {
        row.append(
          createElement('li', { class: 'garland__item-wrapper' }, [
            createElement('span', { class: 'garland__item' }),
          ])
        );
      }

      itemsCount =
        this.container.children.length === rowCount - 2 ? (itemsCount -= 2) : (itemsCount += 2);

      this.container.append(row);
    }

    return this.container;
  };
}

const garland = new Garland();
export default garland;
