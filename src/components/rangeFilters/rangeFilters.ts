import 'nouislider/dist/nouislider.css';
import './rangeFilters.scss';

import * as noUiSlider from 'nouislider';

import { IToyCard, IRangeProps } from '../../types';
import appState from '../../appState';

import createElement from '../../utils/createElement';
import appStateSubject from '../../subject';

class RangeFilters {
  data;

  constructor(data: IToyCard[]) {
    this.data = data;
  }

  createFilterGroup = ({ type, step, minValue, maxValue, title }: IRangeProps) => {
    const container = createElement('div', { class: 'range-filters__item' });
    const groupTitle = createElement('p', { class: 'range-filters__subtitle' }, [`${title}`]);
    const sliderWrapper = createElement('div', { class: 'range-filters__wrapper' });
    const slider: noUiSlider.target = createElement('div', {
      class: 'range-filters__slider',
    });
    const valuesSeparator = createElement('span', { class: 'range-filters__separator' }, ['—']);
    const minValueContainer = createElement('output', { class: 'range-filters__value' }, [
      `${minValue}`,
    ]);
    const maxValueContainer = createElement('output', { class: 'range-filters__value' }, [
      `${maxValue}`,
    ]);

    noUiSlider.create(slider, {
      start: [minValue, maxValue],
      connect: true,
      step,
      behaviour: 'smooth-steps',
      range: {
        min: minValue,
        max: maxValue,
      },
      format: {
        from: (value) => +value,
        to: (value) => Math.round(value),
      },
    });

    if (slider.noUiSlider) {
      slider.noUiSlider.on('change', (value) => {
        const [min, max] = value;

        minValueContainer.textContent = `${min}`;
        maxValueContainer.textContent = `${max}`;

        if (min) appState.range[type].min = +min;
        if (max) appState.range[type].max = +max;

        appStateSubject.notify();
      });
    }

    sliderWrapper.append(slider, minValueContainer, valuesSeparator, maxValueContainer);
    container.append(groupTitle, sliderWrapper);

    return container;
  };

  render = () => {
    const minCount = Math.min(...this.data.map((item) => +item.count));
    const maxCount = Math.max(...this.data.map((item) => +item.count));
    const minYear = Math.min(...this.data.map((item) => +item.year));
    const maxYear = Math.max(...this.data.map((item) => +item.year));

    appState.range.count.min = minCount;
    appState.range.count.max = maxCount;
    appState.range.year.min = minYear;
    appState.range.year.max = maxYear;

    const container = createElement('div', { class: 'range-filters' });
    const title = createElement('h3', { class: 'range-filters__title' }, ['Фильтры по диапазону']);
    const countFilter = this.createFilterGroup({
      type: 'count',
      step: 1,
      minValue: minCount,
      maxValue: maxCount,
      title: 'Количество экземпляров:',
    });
    const yearFilter = this.createFilterGroup({
      type: 'year',
      step: 10,
      minValue: minYear,
      maxValue: maxYear,
      title: 'Год приобретения:',
    });

    container.append(title, countFilter, yearFilter);

    return container;
  };
}

export default RangeFilters;
