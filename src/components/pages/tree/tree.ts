import './tree.scss';

import Header from '../../header/header';

import createElement from '../../../utils/createElement';

class Tree {
  render = () => {
    const container = createElement('div', { class: 'tree-page' });
    const header = new Header().render();

    container.append(header);

    return container;
  };
}

const treePage = new Tree();
export default treePage;
