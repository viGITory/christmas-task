import './snowButton.scss';

import createElement from '../../utils/createElement';

class SnowButton {
  render = () => {
    const container = createElement('button', { class: 'snow-button', type: 'button' }, [
      createElement('span', { class: 'visually-hidden' }, ['Включить снегопад']),
    ]);

    container.addEventListener('click', () => {
      container.classList.toggle('snow-button--active');
    });

    return container;
  };
}

export default SnowButton;
