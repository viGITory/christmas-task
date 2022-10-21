import './snowfall.scss';

import createElement from '../../utils/createElement';
import { snowfallSubject } from '../../subject';

class Snowfall {
  container;

  constructor({ className = '' }) {
    this.container = createElement('div', { class: `snowfall ${className}`.trim() });

    snowfallSubject.subscribe(this.toggleShow);
  }

  toggleShow = () => {
    this.container.classList.toggle('snowfall--hide');
  };

  render = () => {
    for (let i = 0; i < 100; i += 1) {
      const snowflake = createElement('span', { class: 'snowfall__snowflake' });
      this.container.append(snowflake);
    }

    return this.container;
  };
}

export default Snowfall;
