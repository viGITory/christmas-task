import './home.scss';

import createElement from '../../../utils/createElement';

class Home {
  render = () => {
    const container = createElement('div', { class: 'home-page' });

    container.innerHTML = `
      <h1 class="home-page__title">
        Н<span class="home-page__title-light">о</span>вого<span class="home-page__title-light">д</span>няя 
        и<span class="home-page__title-light">г</span>ра
        «На<span class="home-page__title-light">р</span>яди 
        <span class="home-page__title-light">ё</span>лку»
      </h1>
      <a class="home-page__link" href="#/toys">
        <span class="home-page__link-item">Начать</span>
      </a>
      <div class="home-page__overlay"></div>
    `;

    return container;
  };
}

const homePage = new Home();
export default homePage;
