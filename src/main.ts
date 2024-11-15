import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

const observable = new Observable<string>((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
  subscriber.next('Ignored value');
});

observable.subscribe(observer);
