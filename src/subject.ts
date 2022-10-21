import { TObserver } from './types';

class Subject {
  observers: TObserver[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: TObserver) {
    this.observers.push(observer);
  }

  unsubscribe(observer: TObserver) {
    this.observers = this.observers.filter((fn) => fn !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}

const appStateSubject = new Subject();
const musicSubject = new Subject();
const snowfallSubject = new Subject();
const resetFiltersSubject = new Subject();
const favoritesSubject = new Subject();
const pageRouteSubject = new Subject();
const treeImageSubject = new Subject();
const treeBackgroundSubject = new Subject();

export {
  appStateSubject,
  musicSubject,
  snowfallSubject,
  resetFiltersSubject,
  favoritesSubject,
  pageRouteSubject,
  treeImageSubject,
  treeBackgroundSubject,
};
