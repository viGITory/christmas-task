import createElement from '../../../utils/createElement';

class Tree {
  render = () => {
    const container = createElement('div', { class: 'tree-page' });

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
      <h2>Страница ёлки</h2>
    `;

    return container;
  };
}

const treePage = new Tree();
export default treePage;
