import './header.scss';

import createElement from '../../utils/createElement';
import { favoritesSubject, pageRouteSubject } from '../../subject';
import appState from '../../appState';

class Header {
  navLinks: HTMLAnchorElement[];

  favoritesContainer;

  constructor() {
    this.navLinks = [];
    this.favoritesContainer = createElement('span', { class: 'header__favorites' }, [
      `${appState.favorites.size}`,
    ]);

    favoritesSubject.subscribe(this.updateFavoritesCount);
    pageRouteSubject.subscribe(this.changeActiveLink);
  }

  changeActiveLink = () => {
    this.navLinks.forEach((link) => {
      return link.href.indexOf(window.location.hash) !== -1
        ? link.classList.add('header__nav-link--active')
        : link.classList.remove('header__nav-link--active');
    });
  };

  updateFavoritesCount = () => {
    this.favoritesContainer.textContent = `${appState.favorites.size}`;
  };

  render = () => {
    const container = createElement('header', { class: 'header' });
    const nav = createElement('nav', { class: 'header__nav' });
    const navList = createElement('ul', { class: 'header__nav-list' });

    const linkNames = {
      '/': 'На главную',
      '/toys': 'Игрушки',
      '/tree': 'Ёлка',
    };

    Object.entries(linkNames).forEach(([key, value]) => {
      const navItem = createElement('li', { class: 'header__nav-item' });
      const navLink = createElement('a', { class: 'header__nav-link', href: `#${key}` }, [
        `${value}`,
      ]);

      navItem.append(navLink);
      navList.append(navItem);

      if (navLink instanceof HTMLAnchorElement) this.navLinks.push(navLink);
    });

    nav.append(navList);
    container.append(nav, this.favoritesContainer);

    return container;
  };
}

export default Header;
