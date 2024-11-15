import { from, interval, reduce, take } from 'rxjs';

function totalReducer(acc: number, curr: number): number {
  console.log({ acc, curr });
  return acc + curr;
}

// from([1, 2, 3, 4, 5])
// .pipe(reduce(totalReducer))
// .subscribe(console.log);

interval(1000)
  .pipe(take(3), reduce(totalReducer))
  .subscribe({
    next: console.log,
    complete: () => console.log('Completed'),
  });
