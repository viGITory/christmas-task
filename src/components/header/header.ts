import './header.scss';

import createElement from '../../utils/createElement';

class Header {
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

    return container;
  };
}

const header = new Header();
export default header;
