import { debounceTime, fromEvent, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// elements
const inputBox = document.getElementById('text-input')!;

// streams
const input$ = fromEvent(inputBox, 'keyup');

input$
  .pipe(
    debounceTime(1000),
    mergeMap((event) => {
      const term = (event.target as HTMLInputElement).value;
      return ajax.getJSON(`https://api.github.com/users/${term}`);
    })
  )
  .subscribe(console.log);
