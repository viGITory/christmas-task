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
const resetFiltersSubject = new Subject();
const favoritesSubject = new Subject();

export { appStateSubject, resetFiltersSubject, favoritesSubject };
