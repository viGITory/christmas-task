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
    const page = createElement('div', { class: 'toys-page' });
    const mainContainer = createElement('main', { class: 'toys-page__main' });
    const leftContainer = createElement('section', { class: 'toys-page__left' });
    const valueFilters = new ValueFilters(this.data).render();
    const cardsContainer = createElement('section', { class: 'toys-page__cards' });

    this.data.forEach((item) => cardsContainer.append(new ToyCard(item).render()));

    valueFilters.addEventListener('input', () => {
      cardsContainer.innerHTML = '';

      filterByValue(this.data).forEach((item) => {
        cardsContainer.append(new ToyCard(item).render());
      });
    });

    leftContainer.append(valueFilters);
    mainContainer.append(leftContainer, cardsContainer);
    page.append(header.render(), mainContainer);

    return page;
  };
}

const toysPage = new Toys();
export default toysPage;
