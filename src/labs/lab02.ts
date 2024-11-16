import { filter, interval, mapTo, scan } from 'rxjs';

export function lab02() {
  // elem refs
  const countdown = document.getElementById('countdown')!;
  const message = document.getElementById('message')!;

  // streams
  const counter$ = interval(1000);

  counter$
    .pipe(
      mapTo(-1),
      scan((acc, curr) => acc + curr, 10),
      filter((val) => val >= 0)
    )
    .subscribe((val) => {
      countdown.innerHTML = `${val}`;
      if (val <= 0) {
        message.innerHTML = "Time's up!";
      }
    });
}
