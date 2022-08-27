import createElement from '../../../utils/createElement';

class Toys {
  render = () => {
    const container = createElement('div', { class: 'toys-page' });

    container.innerHTML = `
      <a class="logo" href="#/">Лого</a>
      <nav>
        <ul>
          <li>
            <a href="#/toys">Игрушки</a>
          </li>
          <li>
            <a href="#/tree">Ёлка</a>
          </li>
        </ul>
      </nav>
      <h2>Страница игрушек</h2>
    `;

    return container;
  };
}

const toysPage = new Toys();
export default toysPage;
