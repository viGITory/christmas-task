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

type TValueFilter = 'shape' | 'color' | 'size' | 'favorite';
type TObserver = () => void;

export { IToyCard, TValueFilter, TObserver };
