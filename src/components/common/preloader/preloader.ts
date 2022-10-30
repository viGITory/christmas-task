import createElement from '../../../utils/createElement';
import './preloader.scss';

class Preloader {
  render = () => {
    const container = createElement('div', { class: 'preloader' });

    container.innerHTML = `
      <div class="preloader__inner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;

    container.addEventListener('transitionend', () => container.remove());

    return container;
  };
}

export default Preloader;
