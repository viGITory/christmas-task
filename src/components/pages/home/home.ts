import './home.scss';

import createElement from '../../../utils/createElement';

class Home {
  render = () => {
    const container = createElement('div', { class: 'home-page' });

    container.innerHTML = `
      <main class="home-page__main">
        <h1 class="home-page__title">
          Н<span class="home-page__title-light">о</span>вого<span class="home-page__title-light">д</span>няя 
          и<span class="home-page__title-light">г</span>ра
          «На<span class="home-page__title-light">р</span>яди 
          <span class="home-page__title-light">ё</span>лку»
        </h1>
        <a class="home-page__link" href="#/toys">
          <div class="home-page__link-inner">
            <span class="home-page__link-arrow"></span>
            <span class="home-page__link-text">Начать</span>
          </div>
        </a>
        <div class="home-page__overlay"></div>
      </main>
    `;

    return container;
  };
}

const homePage = new Home();
export default homePage;
