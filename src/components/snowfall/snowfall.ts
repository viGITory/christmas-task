import './snowfall.scss';

import createElement from '../../utils/createElement';

class Snowfall {
  container;

  constructor() {
    this.container = createElement('div', { class: 'snowfall' });
  }

  render = () => {
    for (let i = 0; i < 100; i += 1) {
      const snowflake = createElement('span', { class: 'snowfall__snowflake' });
      this.container.append(snowflake);
    }

    return this.container;
  };

  toggleShow = () => {
    this.container.classList.toggle('snowfall--show');
  };
}

export default Snowfall;
