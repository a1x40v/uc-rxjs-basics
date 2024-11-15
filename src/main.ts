import { filter, fromEvent, map } from 'rxjs';

// of(1, 2, 3, 4, 5)
//   .pipe(filter((val) => val > 2))
//   .subscribe(console.log);

const keyup$ = fromEvent(document, 'keyup');

const keycode$ = keyup$.pipe(map((event) => (event as KeyboardEvent).code));

keycode$.subscribe(console.log);

const enter$ = keycode$.pipe(filter((code) => code === 'Enter'));

enter$.subscribe(console.log);
