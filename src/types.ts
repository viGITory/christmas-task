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
  type: 'count' | 'year';
  step: number;
  minValue: number;
  maxValue: number;
  title: string;
}

type TValueFilter = 'shape' | 'color' | 'size' | 'favorite';
type TObserver = () => void;

export { IToyCard, IRangeProps, TValueFilter, TObserver };
