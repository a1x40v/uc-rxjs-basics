import { Observer, of, range } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

// const source$ = of(1, 2, 3, 4, 5);
const source$ = range(1, 5);

source$.subscribe(observer);
