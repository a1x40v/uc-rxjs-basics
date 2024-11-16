import { fromEvent, interval, map, mergeMap, takeUntil } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const click$ = fromEvent<MouseEvent>(document, 'click');
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');

const interval$ = interval(1000);

// mousedown$
//   .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
//   .subscribe(console.log);

const coordinates$ = click$.pipe(
  map((event) => ({ x: event.clientX, y: event.clientY }))
);

const coordinatesWithSave$ = coordinates$.pipe(
  mergeMap((coords) =>
    ajax.post(
      `https://run.mocky.io/v3/73f5e08e-d6ba-4fd7-a5de-1c5e4d89b329`,
      coords
    )
  )
);

coordinatesWithSave$.subscribe((response) => {
  console.log('Coordinates saved:', response);
});
