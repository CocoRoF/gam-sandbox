# Tiny calculator

A small calculator library with no dependencies.

## API

Import the functions from `calc.js` in an ES module:

```js
import { add, subtract, multiply } from "./calc.js";

add(2, 3);      // 5
subtract(5, 3); // 2
multiply(2, 3); // 6
```

| Function | Description |
| --- | --- |
| `add(a, b)` | Returns the sum of `a` and `b`. |
| `subtract(a, b)` | Returns `a` minus `b`. |
| `multiply(a, b)` | Returns the product of `a` and `b`. |

These functions use JavaScript's arithmetic operators directly. Use numeric
arguments for numeric arithmetic; no input validation or coercion is added.

## Tests

Run `npm test` to execute the test suite with Node.js's built-in test runner.
