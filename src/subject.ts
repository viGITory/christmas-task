import { TObserverData, TObserver } from './types';

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

  notify(data?: TObserverData) {
    this.observers.forEach((observer) => observer(data));
  }
}

const appStateSubject = new Subject();
const resetFiltersSubject = new Subject();
const favoritesSubject = new Subject();
const pageRouteSubject = new Subject();

export { appStateSubject, resetFiltersSubject, favoritesSubject, pageRouteSubject };
