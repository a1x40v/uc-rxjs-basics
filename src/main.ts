import { fromEvent, map, mapTo, of, pluck } from 'rxjs';

/*  with of */
// of(1, 2, 3, 4, 5)
//   .pipe(map((value) => value * 10))
//   .subscribe(console.log);

/* with fromEvent */
const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(map((event) => (event as KeyboardEvent).key));

/* pluck */
const keycodeWithPluck$ = keyup$.pipe(pluck('key'));

/* mapTo */
const pressed$ = keyup$.pipe(mapTo('Key pressed!'));

pressed$.subscribe(console.log);
