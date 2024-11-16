import { first, fromEvent, map, of, take } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map((event: PointerEvent) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    // take(1)
    first(({ y }) => y > 200)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('complete'),
  });
