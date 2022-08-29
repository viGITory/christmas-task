import './toys.scss';

import header from '../../header/header';
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

    this.data.forEach((item) => cards.append(new ToyCard(item).render()));
    container.append(header.render(), valueFilters, cards);

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
