# Tiny calculator

A small calculator library with no dependencies.

## API

Import the functions from `calc.js`:

```js
import { add, subtract, multiply } from "./calc.js";

add(2, 3); // 5
subtract(5, 3); // 2
multiply(2, 3); // 6
```

Each function takes two numbers and returns a number:

- `add(a, b)` returns the sum of `a` and `b`.
- `subtract(a, b)` returns `a` minus `b`.
- `multiply(a, b)` returns the product of `a` and `b`.

## Tests

Run `npm test` to run the test suite.
