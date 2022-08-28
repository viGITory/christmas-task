import './home.scss';

import createElement from '../../../utils/createElement';

class Home {
  render = () => {
    const container = createElement('div', { class: 'home-page' });

    container.innerHTML = `
      <a class="home-page__link" href="#/toys">
        <h1 class="home-page__title">Помогите бабушке нарядить ёлку</h1>
      </a>
      <div class="home-page__overlay"></div>
    `;

    return container;
  };
}

const homePage = new Home();
export default homePage;
