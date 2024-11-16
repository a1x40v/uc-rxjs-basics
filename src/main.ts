import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

/* example 1 */
// const click$ = fromEvent<MouseEvent>(document, 'click');
// const interval$ = interval(1000);

// click$.pipe(switchMap(() => interval$)).subscribe(console.log);

/* example 2 */

const BASE_URL = 'https://api.openbrewerydb.org/v1/breweries/search';

const inputBox = document.getElementById('text-input')!;

fromEvent<KeyboardEvent>(inputBox, 'keyup')
  .pipe(
    debounceTime(500),
    map((event) => (event.target as HTMLInputElement).value),
    distinctUntilChanged(),
    switchMap((term) => ajax.getJSON(`${BASE_URL}?query=${term}`))
  )
  .subscribe(console.log);
