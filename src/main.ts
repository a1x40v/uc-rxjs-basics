import { fromEvent, Observer } from 'rxjs';

const observer: Observer<Event> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

const source$ = fromEvent(document, 'click');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsubscribe');
  subOne.unsubscribe();
}, 3000);
