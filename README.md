# Tiny calculator

A small calculator library with no dependencies.

## API

Import the functions from `calc.js`. Each function takes two numbers and returns
the result of the operation.

| Function | Returns | Example |
| --- | --- | --- |
| `add(a, b)` | The sum of `a` and `b` | `add(2, 3)` returns `5` |
| `subtract(a, b)` | `b` subtracted from `a` | `subtract(5, 3)` returns `2` |
| `multiply(a, b)` | The product of `a` and `b` | `multiply(4, 3)` returns `12` |

```js
import { add, subtract, multiply } from "./calc.js";

add(2, 3); // 5
subtract(5, 3); // 2
multiply(4, 3); // 12
```

## Tests

Run `npm test` with Node.js installed.
