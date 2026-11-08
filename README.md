# Tiny calculator

A small calculator library with no dependencies.

## 사용법

`calc.js` 는 ES 모듈이며 `add(a, b)`, `multiply(a, b)`, `divide(a, b)` 를 내보냅니다.

### 예시

아래 코드를 `example.mjs` 로 저장합니다.

```js
import { add, multiply } from './calc.js';

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(add(0.5, 0.25));
console.log(multiply(-3, 7));
```

실행 명령:

```
node example.mjs
```

실제 출력 (Node 로 돌려 얻은 그대로):

```
5
20
0.75
-21
```

### divide 예시

`divide(a, b)` 는 `a / b` 를 돌려주며, `b` 가 0 이면 오류(`Error`)를 던집니다. 아래 코드를 `divide-example.mjs` 로 저장합니다.

```js
import { divide } from './calc.js';

console.log(divide(10, 4));
console.log(divide(-9, 3));

try {
  divide(1, 0);
} catch (e) {
  console.log(e.message);
}
```

실행 명령:

```
node divide-example.mjs
```

실제 출력 (Node 로 돌려 얻은 그대로):

```
2.5
-3
0 으로 나눌 수 없습니다
```
