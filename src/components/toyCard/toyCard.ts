import './toyCard.scss';

import { IToyCard } from '../../types';

import createElement from '../../utils/createElement';
import appState from '../../appState';
import { favoritesSubject } from '../../subject';

class ToyCard {
  data;

  constructor(data: IToyCard) {
    this.data = data;
  }

  render = () => {
    const container = createElement('article', {
      class: 'toy-card',
      'data-num': `${this.data.num}`,
    });

    container.innerHTML = `
      <div class="toy-card__inner">
        <div class="toy-card__content">
          <h3 class="toy-card__title">${this.data.name}</h3>
          <div class="toy-card__wrapper">
            <img class="toy-card__image" src="/assets/toys/${this.data.num}.png" alt="${
      this.data.name
    }">
            <div class="toy-card__count-wrapper">
              <span class="toy-card__favorite"></span>
              <span class="toy-card__count">${this.data.count} шт.</span>
            </div>
          </div>
          <ul class="toy-card__props">
            <li class="toy-card__props-item">Год покупки: <span>${this.data.year}</span></li>
            <li class="toy-card__props-item">Форма: <span>${this.data.shape}</span></li>
            <li class="toy-card__props-item">Цвет: <span>${this.data.color}</span></li>
            <li class="toy-card__props-item">Размер: <span>${this.data.size}</span></li>
            <li class="toy-card__props-item">Любимая: <span>${
              this.data.favorite ? 'да' : 'нет'
            }</span></li>
          </ul>
        </div>
        <div class="toy-card__error">Извините, все слоты заполнены</div>
      </div>
    `;

    container.addEventListener('click', () => {
      if (appState.favorites.size >= 20 && !container.classList.contains('toy-card--active')) {
        container.classList.add('toy-card--error');

        setTimeout(() => {
          container.classList.remove('toy-card--error');
        }, 1000);
      }

      if (appState.favorites.size < 20 && !container.classList.contains('toy-card--active')) {
        container.classList.add('toy-card--active');
        appState.favorites.add(this.data.num);
      } else {
        container.classList.remove('toy-card--active');
        appState.favorites.delete(this.data.num);
      }

      favoritesSubject.notify();
    });

    return container;
  };
}

export default ToyCard;
