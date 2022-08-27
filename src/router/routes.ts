import homePage from '../components/pages/home/home';
import toysPage from '../components/pages/toys/toys';
import treePage from '../components/pages/tree/tree';

const routes: { [key: string]: HTMLElement } = {
  '/': homePage.render(),
  '/toys': toysPage.render(),
  '/tree': treePage.render(),
};

export default routes;
