import './favorites.scss';

import appState from '../../../../../appState';
import { IToyCard } from '../../../../../types';

import { favoritesSubject } from '../../../../../subject';
import createElement from '../../../../../utils/createElement';

class Favorites {
  toysData;

  favoritesList;

  constructor(toysData: IToyCard[]) {
    this.toysData = toysData;
    this.favoritesList = createElement('ul', { class: 'favorites__list' });

    favoritesSubject.subscribe(this.createFavoritesList);
  }

  createFavoritesList = () => {
    while (this.favoritesList.firstChild) {
      this.favoritesList.firstChild.remove();
    }

    [...this.toysData].forEach((toy) => {
      if (appState.favorites.has(toy.num) || (!appState.favorites.size && +toy.num <= 20)) {
        const toysContainer = createElement('div', { class: 'favorites__images-wrapper' });
        const countContainer = createElement('span');
        let imageCount = 1;

        while (toysContainer.children.length < +toy.count) {
          const itemImage = createElement('img', {
            class: 'favorites__image',
            src: `./assets/toys/${toy.num}.png`,
            alt: toy.name,
            height: '50',
            id: `${toy.num}-${imageCount}`,
          });

          itemImage.addEventListener('dragstart', (event) => {
            if (event.target instanceof HTMLImageElement && event.dataTransfer) {
              event.dataTransfer.setData('text/plain', event.target.id);
            }
          });

          itemImage.addEventListener('dragend', () => {
            if (!appState.tree.isDragOverMap) {
              itemImage.removeAttribute('style');
              itemImage.classList.remove('favorites__image--draggable');

              toysContainer.append(itemImage);
            }

            countContainer.textContent = !toysContainer.children.length
              ? ''
              : `${toysContainer.children.length}`;
          });

          imageCount += 1;

          toysContainer.append(itemImage);
        }

        countContainer.textContent = `${toysContainer.children.length}`;

        this.favoritesList.append(
          createElement('li', { class: 'favorites__item' }, [
            toysContainer,
            createElement('p', { class: 'favorites__count' }, [
              createElement('span', { class: 'visually-hidden' }, ['Количество: ']),
              countContainer,
            ]),
          ])
        );
      }
    });

    while (this.favoritesList.children.length < 20) {
      this.favoritesList.append(createElement('li', { class: 'favorites__item' }));
    }
  };

  render = () => {
    this.createFavoritesList();

    const container = createElement('div', { class: 'favorites' }, [
      createElement('h3', { class: 'favorites__title' }, ['Игрушки']),
      this.favoritesList,
    ]);

    return container;
  };
}

export default Favorites;
