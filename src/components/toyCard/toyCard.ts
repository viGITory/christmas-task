import './toyCard.scss';

import { IToyCard } from '../../types';

import createElement from '../../utils/createElement';

class ToyCard {
  data;

  constructor(data: IToyCard) {
    this.data = data;
  }

  render = () => {
    const container = createElement('article', { class: 'toy-card' });

    container.innerHTML = `
      <h4 class="toy-card__title">${this.data.name}</h4>
      <div class="toy-card__wrapper">
        <img class="toy-card__image" src="/assets/toys/${this.data.num}.png" alt="${
      this.data.name
    }">
        <span class="toy-card__count">${this.data.count} шт.</span>
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
    `;

    return container;
  };
}

export default ToyCard;
