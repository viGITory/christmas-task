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

  cardsContainer;

  constructor() {
    this.data = decorations;

    this.cardsContainer = createElement('section', { class: 'toys-page__cards' });
  }

  renderCards = () => {
    while (this.cardsContainer.firstChild)
      this.cardsContainer.removeChild(this.cardsContainer.firstChild);

    searchToy(sortData(filterByValue(this.data))).forEach((item) => {
      this.cardsContainer.append(new ToyCard(item).render());
    });

    if (!this.cardsContainer.firstChild) {
      const errorMsg = createElement('p', { class: 'toys-page__error' }, [
        'Извините, совпадений не обнаружено',
      ]);

      this.cardsContainer.append(errorMsg);
    }
  };

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

    this.renderCards();

    snowButton.addEventListener('click', () => {
      snowfall.toggleShow();
    });

    search.addEventListener('input', () => {
      this.renderCards();
    });

    valueFilters.addEventListener('input', () => {
      this.renderCards();
    });

    sorting.addEventListener('change', () => {
      this.renderCards();
    });

    topLeftWrapper.append(musicButton, snowButton, search);
    leftContainer.append(topLeftWrapper, valueFilters, sorting);
    mainContainer.append(leftContainer, this.cardsContainer);
    page.append(snowfall.render(), header.render(), mainContainer);

    return page;
  };
}

const toysPage = new Toys();
export default toysPage;
