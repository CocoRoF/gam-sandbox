# Tiny calculator

A small calculator library with no dependencies.

## 사용법

`calc.js` 는 ES 모듈이며 `add(a, b)` 와 `multiply(a, b)` 를 내보냅니다.

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
