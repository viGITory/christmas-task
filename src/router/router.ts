import notFoundPage from '../components/pages/notFound/notFound';

import routes from './routes';

const router = () => {
  const root = document.getElementById('root');
  const path = window.location.hash.slice(1).toLowerCase() || '/';
  const page = routes[path] || notFoundPage.render();

  if (root) {
    root.innerHTML = '';
    root.append(page);
  }
};

export default router;
