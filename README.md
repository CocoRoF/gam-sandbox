# Tiny calculator

A small calculator library with no dependencies.

## API

Import the operations from `calc.js`:

```js
import { add, subtract, multiply } from "./calc.js";

add(2, 3);      // 5
subtract(5, 3); // 2
multiply(2, 3); // 6
```

Each function takes two numbers and returns a number:

| Function | Result |
| --- | --- |
| `add(a, b)` | The sum of `a` and `b`. |
| `subtract(a, b)` | `b` subtracted from `a`. |
| `multiply(a, b)` | The product of `a` and `b`. |

## Tests

Run `npm test` to test all operations.
