# optimised-js
A dependency-less modern collection of functions and utilities guaranteed to have the least performance impact.
This library is written in TypeScript, using the latest ECMAScripts features, transpiled to ES6 (ES2015).

# Usage

```ts
import { Arrays, Strings } from 'optimised';

const array = [1, 5, 1, 7, 3, 2, 5];
const stringArray = ['a', 'bb', 'ca', 'er', 'ff', 'aa', 'b'];

console.log(Arrays.max(array)); // 7
console.log(Arrays.max(stringArray, false, true)); // ff

console.log(Strings.max('a', 'bb', 'ca', 'er', 'ff', 'aa', 'b')); // ff
```
