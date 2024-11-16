import { fromEvent, interval, mapTo, scan, takeUntil, tap } from 'rxjs';

export function lab02() {
  // elem refs
  const countdown = document.getElementById('countdown')!;
  const message = document.getElementById('message')!;
  const abortButton = document.getElementById('abort')!;

  // streams
  const counter$ = interval(1000);
  const abortClick$ = fromEvent(abortButton, 'click');

  counter$
    .pipe(
      mapTo(-1),
      scan((acc, curr) => acc + curr, 10),
      tap(console.log),
      takeUntil(abortClick$)
    )
    .subscribe((val) => {
      countdown.innerHTML = `${val}`;
      if (val <= 0) {
        message.innerHTML = "Time's up!";
      }
    });
}
