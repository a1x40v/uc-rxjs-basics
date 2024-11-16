import { fromEvent, map, takeWhile } from 'rxjs';
import { lab02 } from './labs/lab02';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map((event: PointerEvent) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    // true if we want to emit the final value
    takeWhile(({ y }) => y <= 200, true)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('complete'),
  });

// lab02();
