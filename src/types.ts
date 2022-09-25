import * as noUiSlider from 'nouislider';

type TValueFilter = 'shape' | 'color' | 'size' | 'favorite';
type TRangeType = 'count' | 'year';
type TObserverData = string;
type TObserver = (data?: TObserverData) => void;

interface IComponentProps {
  className?: string;
}

interface IToyCard {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

interface IRangeProps {
  type: TRangeType;
  step: number;
  minValue: number;
  maxValue: number;
  title: string;
}

interface IRangeGroup {
  slider: noUiSlider.API | undefined;
  type: TRangeType;
  minValueContainer: HTMLElement;
  maxValueContainer: HTMLElement;
}

export {
  IComponentProps,
  IToyCard,
  IRangeProps,
  IRangeGroup,
  TValueFilter,
  TObserverData,
  TObserver,
};
