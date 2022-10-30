import './toys.scss';

import Snowfall from '../../common/snowfall/snowfall';
import Header from '../../common/header/header';
import MusicButton from '../../common/musicButton/musicButton';
import SnowButton from '../../common/snowButton/snowButton';
import Search from './components/search/search';
import ValueFilters from './components/valueFilters/valueFilters';
import Sorting from './components/sorting/sorting';
import RangeFilters from './components/rangeFilters/rangeFilters';
import resetFiltersButton from './components/resetFiltersButton/resetFiltersButton';
import ToyCard from './components/toyCard/toyCard';

import createElement from '../../../utils/createElement';
import searchToy from '../../../utils/searchToy';
import filterByValue from '../../../utils/filterByValue';
import sortData from '../../../utils/sortData';
import filterByRange from '../../../utils/filterByRange';
import { appStateSubject } from '../../../subject';

import decorations from '../../../data/decorations';
import appState from '../../../appState';

class Toys {
  data;

  cardsContainer;

  constructor() {
    this.data = decorations;

    this.cardsContainer = createElement('div', { class: 'toys-page__cards' });

    appStateSubject.subscribe(this.renderCards);
  }

  renderCards = () => {
    while (this.cardsContainer.firstChild)
      this.cardsContainer.removeChild(this.cardsContainer.firstChild);

    searchToy(sortData(filterByValue(filterByRange(this.data)))).forEach((item) => {
      const card = new ToyCard(item).render();
      this.cardsContainer.append(card);

      if (appState.favorites.has(card.getAttribute('data-num')))
        card.classList.add('toy-card--active');
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
    const snowfall = new Snowfall({ className: 'snowfall--hide' });
    const header = new Header().render();
    const mainContainer = createElement('main', { class: 'toys-page__main' }, [
      createElement('h1', { class: 'visually-hidden' }, ['Ёлочные игрушки']),
    ]);
    const leftContainer = createElement('section', { class: 'toys-page__left' }, [
      createElement('h2', { class: 'visually-hidden' }, ['Фильтры']),
    ]);
    const rightContainer = createElement('section', { class: 'toys-page__right' }, [
      createElement('h2', { class: 'visually-hidden' }, ['Карточки игрушек и сортировка']),
    ]);
    const topLeftWrapper = createElement('div', { class: 'toys-page__left-wrapper' });
    const bottomLeftWrapper = createElement('div', { class: 'toys-page__reset-buttons' }, [
      'Сбросить ',
    ]);
    const musicButton = new MusicButton().render();
    const snowButton = new SnowButton().render();
    const search = new Search().render();
    const valueFilters = new ValueFilters(this.data).render();
    const rangeFilters = new RangeFilters(this.data).render();
    const sorting = new Sorting({ className: 'toys-page__sorting' }).render();

    this.renderCards();

    topLeftWrapper.append(musicButton, snowButton, search);
    bottomLeftWrapper.append(resetFiltersButton.render());
    leftContainer.append(topLeftWrapper, valueFilters, sorting, rangeFilters, bottomLeftWrapper);
    rightContainer.append(sorting, this.cardsContainer);
    mainContainer.append(leftContainer, rightContainer);
    page.append(snowfall.render(), header, mainContainer);

    return page;
  };
}

const toysPage = new Toys();
export default toysPage;
