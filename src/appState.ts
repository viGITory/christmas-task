const appState = {
  filters: {
    shape: new Set(),
    color: new Set(),
    size: new Set(),
    isFavorite: false,
  },
  sorting: '',
  search: '',
  range: {
    count: {
      min: 0,
      max: 0,
    },
    year: {
      min: 0,
      max: 0,
    },
  },
  favorites: new Set(),
  tree: {
    imageNum: 1,
    backgroundNum: 1,
    isDragOverMap: false,
  },
  garland: {
    color: '',
    isActive: false,
  },
};

export default appState;
