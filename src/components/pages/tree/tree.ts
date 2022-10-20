import './tree.scss';

import Snowfall from '../../snowfall/snowfall';
import Header from '../../header/header';
import MusicButton from '../../musicButton/musicButton';
import SnowButton from '../../snowButton/snowButton';

import createElement from '../../../utils/createElement';

class Tree {
  render = () => {
    const container = createElement('div', { class: 'tree-page' }, [
      new Snowfall({ className: 'snowfall--hide' }).render(),
      new Header().render(),
    ]);
    const mainContainer = createElement('main', { class: 'tree-page__main' }, [
      createElement('h1', { class: 'visually-hidden' }, ['Новогодняя ёлка']),
    ]);
    const leftContainer = createElement('section', { class: 'tree-page__left' }, [
      createElement('h2', { class: 'visually-hidden' }, ['Параментры ёлки']),
      createElement('div', { class: 'tree-page__controls' }, [
        new MusicButton().render(),
        new SnowButton().render(),
      ]),
    ]);

    mainContainer.append(leftContainer);
    container.append(mainContainer);

    return container;
  };
}

const treePage = new Tree();
export default treePage;
