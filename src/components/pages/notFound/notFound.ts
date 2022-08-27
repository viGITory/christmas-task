import createElement from '../../../utils/createElement';

class NotFound {
  render = () => {
    const container = createElement('div', { class: 'not-found-page' });

    container.innerHTML = `
      <h2>Страница не найдена</h2>
    `;

    return container;
  };
}

const notFoundPage = new NotFound();
export default notFoundPage;
