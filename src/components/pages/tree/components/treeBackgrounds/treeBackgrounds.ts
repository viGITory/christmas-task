import './treeBackgrounds.scss';

import appState from '../../../../../appState';

import createElement from '../../../../../utils/createElement';
import { treeBackgroundSubject } from '../../../../../subject';

class TreeBackgrounds {
  render = () => {
    const container = createElement('div', { class: 'tree-backgrounds' }, [
      createElement('h3', { class: 'tree-backgrounds__title' }, ['Выберите фон']),
    ]);
    const backgroundsList = createElement('ul', { class: 'tree-backgrounds__list' });

    for (let i = 1; i <= 10; i += 1) {
      const listItem = createElement('li', { class: 'tree-backgrounds__item' });
      const itemImage = createElement('img', {
        class: 'tree-backgrounds__image',
        src: `./assets/bg/${i}.jpg`,
        alt: `Фон ${i}`,
      });

      if (i === appState.tree.backgroundNum)
        listItem.classList.add('tree-backgrounds__item--active');

      listItem.addEventListener('click', () => {
        [...backgroundsList.children].forEach((item) =>
          item.classList.remove('tree-backgrounds__item--active')
        );

        listItem.classList.add('tree-backgrounds__item--active');

        appState.tree.backgroundNum = i;
        treeBackgroundSubject.notify();
      });

      listItem.append(itemImage);
      backgroundsList.append(listItem);
    }

    container.append(backgroundsList);
    return container;
  };
}

const treeBackgrounds = new TreeBackgrounds();
export default treeBackgrounds;
