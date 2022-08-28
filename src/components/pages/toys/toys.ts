import ValueFilters from '../../valueFilters/valueFilters';
import ToyCard from '../../toyCard/toyCard';

import createElement from '../../../utils/createElement';
import filterByValue from '../../../utils/filterByValue';

import decorations from '../../../data/decorations';

class Toys {
  data;

  constructor() {
    this.data = decorations;
  }

  render = () => {
    const container = createElement('div', { class: 'toys-page' });
    const cards = createElement('div', { class: 'toys-page__cards' });
    const valueFilters = new ValueFilters(this.data).render();

    container.innerHTML = `
      <a class="logo" href="#/">Лого</a>
      <nav>
        <ul>
          <li>
            <a href="#/toys">Игрушки</a>
          </li>
          <li>
            <a href="#/tree">Ёлка</a>
          </li>
        </ul>
      </nav>
    `;

    this.data.forEach((item) => cards.append(new ToyCard(item).render()));
    container.append(valueFilters, cards);

    valueFilters.addEventListener('input', () => {
      cards.innerHTML = '';

      filterByValue(this.data).forEach((item) => {
        cards.append(new ToyCard(item).render());
      });
    });

    return container;
  };
}

const toysPage = new Toys();
export default toysPage;
