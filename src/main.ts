import {
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
  map,
  of,
} from 'rxjs';

/*  example 1 */
// const numbers$ = of(1, 1, 2, 3, 3, 3, 4, 5);
// numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

/* example 2*/
const people = [
  { name: 'Alex', isLoggedIn: false },
  { name: 'Alex', isLoggedIn: true },
  { name: 'Alex', isLoggedIn: true },
];

const state$ = from(people)
  .pipe(
    // distinctUntilChanged((curr, prev) => curr.name === prev.name),
    distinctUntilKeyChanged('name'),
    map(({ name }) => name)
  )
  .subscribe(console.log);
