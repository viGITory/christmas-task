import './garlandControls.scss';

import createElement from '../../../../../utils/createElement';
import appState from '../../../../../appState';
import { garlandSubject } from '../../../../../subject';

class GarlandControls {
  render = () => {
    const container = createElement('div', { class: 'garland-controls' }, [
      createElement('h3', { class: 'garland-controls__title' }, ['Гирлянда']),
    ]);
    const buttonsContainer = createElement('div', { class: 'garland-controls__wrapper' });
    const colors = ['yellow', 'green', 'red', 'blue', 'multicolor'];

    for (let i = 0; i < colors.length; i += 1) {
      const button = createElement(
        'button',
        { class: 'garland-controls__button', type: 'button' },
        [createElement('span', { class: 'visually-hidden' }, [`${colors[i]}`])]
      );

      button.addEventListener('click', () => {
        appState.garland.isActive = !button.classList.contains('garland-controls__button--active');

        [...buttonsContainer.children].forEach((child) => {
          child.classList.remove('garland-controls__button--active');
        });

        if (appState.garland.isActive) {
          button.classList.add('garland-controls__button--active');
        }

        appState.garland.color = `${colors[i]}`;
        garlandSubject.notify();
      });

      buttonsContainer.append(button);
    }

    container.append(buttonsContainer);
    return container;
  };
}

const garlandControls = new GarlandControls();
export default garlandControls;
