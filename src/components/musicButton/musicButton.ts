import './musicButton.scss';

import createElement from '../../utils/createElement';

class MusicButton {
  render = () => {
    const container = createElement('button', { class: 'music-button', type: 'button' }, [
      createElement('span', { class: 'visually-hidden' }, ['Включить музыку']),
    ]);

    const url = '/assets/audio/audio.mp3';
    const audio = new Audio(url);
    audio.volume = 0.5;

    container.addEventListener('click', () => {
      container.classList.toggle('music-button--active');

      if (audio.paused) audio.play();
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    return container;
  };
}

export default MusicButton;
