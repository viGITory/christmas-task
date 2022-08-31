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
      <img class="toy-card__image" src="/assets/toys/${this.data.num}.png" alt="${this.data.name}">
      <ul class="toy-card__props">
        <li class="toy-card__props-item">Количество: ${this.data.count}</li>
        <li class="toy-card__props-item">Год покупки: ${this.data.year}</li>
        <li class="toy-card__props-item">Форма: ${this.data.shape}</li>
        <li class="toy-card__props-item">Цвет: ${this.data.color}</li>
        <li class="toy-card__props-item">Размер: ${this.data.size}</li>
        <li class="toy-card__props-item">Любимая: ${this.data.favorite ? 'да' : 'нет'}</li>
      </ul>
    `;

    return container;
  };
}

export default ToyCard;
