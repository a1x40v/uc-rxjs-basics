import { fromEvent, interval, takeUntil } from 'rxjs';
import { lab02 } from './labs/lab02';

const counter$ = interval(1000);
const click$ = fromEvent(document, 'click');

counter$.pipe(takeUntil(click$)).subscribe({
  next: console.log,
  complete: () => console.log('complete'),
});

// lab02();
