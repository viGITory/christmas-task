const appState = {
  filters: {
    shape: new Set(),
    color: new Set(),
    size: new Set(),
    favorite: false,
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
};

export default appState;
