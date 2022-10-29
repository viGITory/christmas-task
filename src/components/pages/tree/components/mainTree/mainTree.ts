import './mainTree.scss';

import appState from '../../../../../appState';

import { treeImageSubject, treeBackgroundSubject } from '../../../../../subject';
import createElement from '../../../../../utils/createElement';
import garland from '../garland/garland';

class MainTree {
  container;

  treeImage;

  constructor({ className = '' }) {
    this.container = createElement('section', { class: `${className} main-tree`.trim() }, [
      createElement('h3', { class: 'visually-hidden' }, ['Ёлка']),
    ]);
    this.treeImage = createElement('img', {
      class: 'main-tree__image',
      alt: 'Ёлка',
      height: '300',
    });

    this.updateBackground();
    this.updateTreeImage();

    treeImageSubject.subscribe(this.updateTreeImage);
    treeBackgroundSubject.subscribe(this.updateBackground);
  }

  updateBackground = () => {
    const img = new Image();
    img.src = `./assets/bg/${appState.tree.backgroundNum}.jpg`;

    img.addEventListener('load', () => {
      this.container.style.backgroundImage = `url(${img.src})`;
    });
  };

  updateTreeImage = () => {
    const img = new Image();
    img.src = `./assets/tree/${appState.tree.imageNum}.png`;

    img.addEventListener('load', () => {
      if (this.treeImage instanceof HTMLImageElement) {
        this.treeImage.src = img.src;
      }
    });
  };

  render = () => {
    this.container.append(
      createElement('div', { class: 'main-tree__wrapper' }, [this.treeImage, garland.render()])
    );

    return this.container;
  };
}

export default MainTree;
