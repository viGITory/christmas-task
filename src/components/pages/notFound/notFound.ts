import './notFound.scss';

import Snowfall from '../../snowfall/snowfall';

import createElement from '../../../utils/createElement';

class NotFound {
  render = () => {
    const container = createElement('div', { class: 'not-found-page' });
    const snowfall = new Snowfall({}).render();

    container.innerHTML = `
      <div class="not-found-page__inner">
        <div class="not-found-page__top">
          <h2 class="not-found-page__title">Страница не существует</h2>
          <a class="not-found-page__link" href="#/">
            <div class="not-found-page__link-inner">
              <span class="not-found-page__link-text">На главную</span>
              <span class="not-found-page__link-arrow"></span>
            </div>
          </a>
        </div>
        <div class="not-found-page__bottom">
          <div class="not-found-page__ground"></div>
          <h2 class="not-found-page__num">404</h2>
          <div class="not-found-page__snowdrift"></div>
        <div>
      </div>
    `;

    container.append(snowfall);
    return container;
  };
}

const notFoundPage = new NotFound();
export default notFoundPage;
