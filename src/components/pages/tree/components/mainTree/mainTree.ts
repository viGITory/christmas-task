import './mainTree.scss';

import appState from '../../../../../appState';

import { treeImageSubject, treeBackgroundSubject } from '../../../../../subject';
import createElement from '../../../../../utils/createElement';
import garland from '../garland/garland';

class MainTree {
  container;

  treeWrapper;

  mapArea;

  treeImage;

  constructor({ className = '' }) {
    this.container = createElement('section', { class: `${className} main-tree`.trim() }, [
      createElement('h3', { class: 'visually-hidden' }, ['Ёлка']),
    ]);
    this.mapArea = createElement('area', {
      alt: 'Ёлка',
      coords: '248,50,159,279,84,472,29,620,83,651,149,662,248,664,331,661,389,651,455,625',
      shape: 'poly',
    });
    this.treeImage = createElement('img', {
      class: 'main-tree__image',
      alt: 'Ёлка',
      height: '300',
      usemap: '#tree-map',
    });
    this.treeWrapper = createElement('div', { class: 'main-tree__wrapper' }, [
      this.treeImage,
      garland.render(),
    ]);

    this.updateBackground();
    this.updateTreeImage();
    this.addListeners();

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

  addListeners = () => {
    this.mapArea.addEventListener('dragover', (event) => {
      event.preventDefault();
      appState.tree.isDragOverMap = true;
    });

    this.mapArea.addEventListener('dragleave', () => {
      appState.tree.isDragOverMap = false;
    });

    this.mapArea.addEventListener('drop', (event) => {
      if (event.dataTransfer) {
        const draggableElementId = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(draggableElementId);

        if (draggableElement) {
          draggableElement.classList.add('favorites__image--draggable');

          const wrapperRect = this.treeWrapper.getBoundingClientRect();
          const halfDraggableElementWidth = draggableElement.getBoundingClientRect().width / 2;

          draggableElement.style.top = `${
            event.clientY - wrapperRect.top - halfDraggableElementWidth
          }px`;
          draggableElement.style.left = `${
            event.clientX - wrapperRect.left - halfDraggableElementWidth
          }px`;

          this.mapArea.append(draggableElement);
          event.dataTransfer.clearData();
        }
      }
    });
  };

  render = () => {
    this.treeWrapper.append(createElement('map', { name: 'tree-map' }, [this.mapArea]));
    this.container.append(this.treeWrapper);

    return this.container;
  };
}

export default MainTree;
