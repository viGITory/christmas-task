import createElement from '../../../utils/createElement';

class Home {
  render = () => {
    const container = createElement('div', { class: 'home-page' });

    container.innerHTML = `
      <h2>Главная страница</h2>
      <a href="#/toys">Начать</a>
    `;

    return container;
  };
}

const homePage = new Home();
export default homePage;
