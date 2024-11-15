import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

const observable = new Observable<number>((subscriber) => {
  let count = 0;

  const id = setInterval(() => {
    subscriber.next(count);
    subscriber.complete(); // complete after first value
    count++;
  }, 1000);

  return () => {
    // clean up resources
    console.log('clearing called');
    clearInterval(id);
  };
});

console.log('begin');
observable.subscribe(observer);
console.log('end');
