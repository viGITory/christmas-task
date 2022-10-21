import './snowButton.scss';

import createElement from '../../utils/createElement';
import { snowfallSubject } from '../../subject';

class SnowButton {
  container;

  constructor() {
    this.container = createElement('button', { class: 'snow-button', type: 'button' }, [
      createElement('span', { class: 'visually-hidden' }, ['Включить снегопад']),
    ]);

    this.addListeners();
    snowfallSubject.subscribe(this.toggleActive);
  }

  toggleActive = () => {
    this.container.classList.toggle('snow-button--active');
  };

  addListeners = () => {
    this.container.addEventListener('click', () => {
      snowfallSubject.notify();
    });
  };

  render = () => {
    return this.container;
  };
}

export default SnowButton;
