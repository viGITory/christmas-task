import './index.scss';

import Preloader from './components/preloader/preloader';
import router from './router/router';

const { body } = document;
const preloader = new Preloader().render();

body.style.overflow = 'hidden';
body.append(preloader);

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  router();

  setTimeout(() => {
    body.removeAttribute('style');
    preloader.classList.add('preloader--hide');
  }, 2000);
});
