import './tree.scss';

import header from '../../header/header';

import createElement from '../../../utils/createElement';

class Tree {
  render = () => {
    const container = createElement('div', { class: 'tree-page' });
    container.append(header.render());

    return container;
  };
}

const treePage = new Tree();
export default treePage;
