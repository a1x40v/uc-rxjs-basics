import { Observer, from } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete'),
};

/* array items */
// const source$ = from([1, 2, 3, 4, 5]);

/* string chars */
// const source$ = from('Hello');

/* promise */
// const source$ = from(fetch('https://api.github.com/users/octocat'));

/* iterator */
function* hello() {
  yield 'Hello';
  yield 'World!';
}

const iterator = hello();

const source$ = from(iterator);

source$.subscribe(observer);
