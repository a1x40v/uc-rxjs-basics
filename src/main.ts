import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  interval,
  pluck,
} from 'rxjs';

// elements
const inputBox = document.getElementById('text-input')!;

// streams
const click$ = fromEvent(document, 'click');
const input$ = fromEvent(inputBox, 'keyup');

input$
  .pipe(
    // debounce(() => interval(1000)),
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log);
