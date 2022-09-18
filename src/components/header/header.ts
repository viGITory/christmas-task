import './header.scss';

import createElement from '../../utils/createElement';
import { favoritesSubject } from '../../subject';
import appState from '../../appState';

class Header {
  favoritesContainer;

  constructor() {
    this.favoritesContainer = createElement('span', { class: 'header__favorites' }, [
      `${appState.favorites.size}`,
    ]);

    favoritesSubject.subscribe(this.updateFavoritesCount);
  }

  updateFavoritesCount = () => {
    this.favoritesContainer.textContent = `${appState.favorites.size}`;
  };

  render = () => {
    const container = createElement('header', { class: 'header' });

    container.innerHTML = `
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a class="header__nav-link" href="#/">На главную</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="#/toys">Игрушки</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="#/tree">Ёлка</a>
          </li>
        </ul>
      </nav>
    `;

    container.append(this.favoritesContainer);

    return container;
  };
}

export default Header;
