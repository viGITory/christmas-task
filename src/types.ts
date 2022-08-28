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

export { IToyCard, TValueFilter };
