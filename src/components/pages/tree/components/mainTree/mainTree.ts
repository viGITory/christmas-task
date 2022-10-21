import './mainTree.scss';

import appState from '../../../../../appState';

import { treeImageSubject, treeBackgroundSubject } from '../../../../../subject';
import createElement from '../../../../../utils/createElement';

class MainTree {
  container;

  treeImage;

  constructor({ className = '' }) {
    this.container = createElement(
      'section',
      {
        class: `${className} main-tree`.trim(),
        style: `background-image: url(assets/bg/${appState.tree.backgroundNum}.jpg)`,
      },
      [createElement('h3', { class: 'visually-hidden' }, ['Ёлка'])]
    );
    this.treeImage = createElement('img', {
      class: 'main-tree__image',
      src: `./assets/tree/${appState.tree.imageNum}.png`,
      alt: 'Ёлка',
    });

    treeImageSubject.subscribe(this.updateTreeImage);
    treeBackgroundSubject.subscribe(this.updateBackground);
  }

  updateBackground = () => {
    this.container.style.backgroundImage = `url(./assets/bg/${appState.tree.backgroundNum}.jpg)`;
  };

  updateTreeImage = () => {
    if (this.treeImage instanceof HTMLImageElement)
      this.treeImage.src = `./assets/tree/${appState.tree.imageNum}.png`;
  };

  render = () => {
    this.container.append(this.treeImage);
    return this.container;
  };
}

export default MainTree;
