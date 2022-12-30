import './treeImages.scss';

import appState from '../../../../../appState';

import { treeImageSubject } from '../../../../../subject';
import createElement from '../../../../../utils/createElement';

class TreeImages {
  render = () => {
    const container = createElement('div', { class: 'tree-images' }, [
      createElement('h3', { class: 'tree-images__title' }, ['Выберите ёлку']),
    ]);
    const imagesList = createElement('ul', { class: 'tree-images__list' });

    for (let i = 1; i <= 6; i += 1) {
      const listItem = createElement('li', { class: 'tree-images__item' });
      const itemImage = createElement('img', {
        class: 'tree-images__image',
        src: `./assets/webp/tree/${i}.webp`,
        alt: `Ёлка ${i}`,
        height: '300',
      });

      if (i === appState.tree.imageNum) listItem.classList.add('tree-images__item--active');

      listItem.addEventListener('click', () => {
        [...imagesList.children].forEach((item) =>
          item.classList.remove('tree-images__item--active')
        );

        listItem.classList.add('tree-images__item--active');

        appState.tree.imageNum = i;
        treeImageSubject.notify();
      });

      listItem.append(itemImage);
      imagesList.append(listItem);
    }

    container.append(imagesList);

    return container;
  };
}

const treeImages = new TreeImages();
export default treeImages;
