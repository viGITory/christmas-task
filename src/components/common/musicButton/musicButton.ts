import './musicButton.scss';

import createElement from '../../../utils/createElement';
import { musicSubject } from '../../../subject';

class MusicButton {
  container;

  audio;

  constructor() {
    this.container = createElement('button', { class: 'music-button', type: 'button' }, [
      createElement('span', { class: 'visually-hidden' }, ['Включить музыку']),
    ]);

    this.audio = new Audio('./assets/audio/audio.mp3');
    this.audio.volume = 0.5;

    this.addListeners();
    musicSubject.subscribe(this.togglePlay);
  }

  togglePlay = () => {
    this.container.classList.toggle('music-button--active');

    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  };

  addListeners = () => {
    this.container.addEventListener('click', () => {
      musicSubject.notify();
    });
  };

  render = () => {
    return this.container;
  };
}

export default MusicButton;
