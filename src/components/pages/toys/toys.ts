import './toys.scss';

import header from '../../header/header';
import Search from '../../search/search';
import ValueFilters from '../../valueFilters/valueFilters';
import Sorting from '../../sorting/sorting';
import ToyCard from '../../toyCard/toyCard';

import createElement from '../../../utils/createElement';
import searchToy from '../../../utils/searchToy';
import filterByValue from '../../../utils/filterByValue';
import sortData from '../../../utils/sortData';

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
    const search = new Search().render();
    const valueFilters = new ValueFilters(this.data).render();
    const sorting = new Sorting().render();
    const cardsContainer = createElement('section', { class: 'toys-page__cards' });

    this.data.forEach((item) => cardsContainer.append(new ToyCard(item).render()));

    search.addEventListener('input', () => {
      cardsContainer.innerHTML = '';

      searchToy(sortData(filterByValue(this.data))).forEach((item) => {
        cardsContainer.append(new ToyCard(item).render());
      });

      if (!cardsContainer.innerHTML)
        cardsContainer.innerHTML = `
          <p class="toys-page__error">Извините, совпадений не обнаружено</p>
        `;
    });

    valueFilters.addEventListener('input', () => {
      cardsContainer.innerHTML = '';

      searchToy(sortData(filterByValue(this.data))).forEach((item) => {
        cardsContainer.append(new ToyCard(item).render());
      });
    });

    sorting.addEventListener('change', () => {
      cardsContainer.innerHTML = '';

      searchToy(sortData(filterByValue(this.data))).forEach((item) => {
        cardsContainer.append(new ToyCard(item).render());
      });
    });

    leftContainer.append(search, valueFilters, sorting);
    mainContainer.append(leftContainer, cardsContainer);
    page.append(header.render(), mainContainer);

    return page;
  };
}

const toysPage = new Toys();
export default toysPage;
