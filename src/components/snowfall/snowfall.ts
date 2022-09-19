import './snowfall.scss';

import createElement from '../../utils/createElement';
import { IComponentProps } from '../../types';

class Snowfall {
  container;

  constructor({ className = '' }: IComponentProps) {
    this.container = createElement('div', { class: `snowfall ${className}`.trim() });
  }

  render = () => {
    for (let i = 0; i < 100; i += 1) {
      const snowflake = createElement('span', { class: 'snowfall__snowflake' });
      this.container.append(snowflake);
    }

    return this.container;
  };

  toggleShow = () => {
    this.container.classList.toggle('snowfall--hide');
  };
}

export default Snowfall;
