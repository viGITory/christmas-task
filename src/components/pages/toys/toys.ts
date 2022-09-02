import './toys.scss';

import Snowfall from '../../snowfall/snowfall';
import header from '../../header/header';
import MusicButton from '../../musicButton/musicButton';
import SnowButton from '../../snowButton/snowButton';
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
    const snowfall = new Snowfall();
    const leftContainer = createElement('section', { class: 'toys-page__left' });
    const topLeftWrapper = createElement('div', { class: 'toys-page__left-wrapper' });
    const musicButton = new MusicButton().render();
    const snowButton = new SnowButton().render();
    const search = new Search().render();
    const valueFilters = new ValueFilters(this.data).render();
    const sorting = new Sorting().render();
    const mainContainer = createElement('main', { class: 'toys-page__main' });
    const cardsContainer = createElement('section', { class: 'toys-page__cards' });

    this.data.forEach((item) => cardsContainer.append(new ToyCard(item).render()));

    snowButton.addEventListener('click', () => {
      snowfall.toggleShow();
    });

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

    topLeftWrapper.append(musicButton, snowButton, search);
    leftContainer.append(topLeftWrapper, valueFilters, sorting);
    mainContainer.append(leftContainer, cardsContainer);
    page.append(snowfall.render(), header.render(), mainContainer);

    return page;
  };
}

const toysPage = new Toys();
export default toysPage;
