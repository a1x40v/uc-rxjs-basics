import { from, scan } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

from(numbers)
  .pipe(scan((acc, curr) => acc + curr))
  .subscribe(console.log);
