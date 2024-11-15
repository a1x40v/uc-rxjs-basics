import { Observer, interval, timer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

// const timer$ = interval(1000);
const timer$ = timer(0, 1000);

timer$.subscribe(console.log);
