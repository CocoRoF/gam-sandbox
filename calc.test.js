import assert from "node:assert/strict";
import { test } from "node:test";
import { add, multiply, divide } from "./calc.js";

test("add", () => assert.equal(add(2, 3), 5));

test("multiply: 일반 곱", () => assert.equal(multiply(3, 4), 12));
test("multiply: 0", () => {
  assert.equal(multiply(0, 5), 0);
  assert.equal(multiply(5, 0), 0);
});
test("multiply: 음수", () => {
  assert.equal(multiply(-2, 3), -6);
  assert.equal(multiply(-2, -3), 6);
});
test("multiply: 소수", () => assert.equal(multiply(0.5, 4), 2));

test("divide: 정상 나눗셈", () => assert.equal(divide(12, 4), 3));
test("divide: 소수", () => {
  assert.equal(divide(1, 4), 0.25);
  assert.equal(divide(7.5, 2.5), 3);
});
test("divide: 음수", () => {
  assert.equal(divide(-6, 3), -2);
  assert.equal(divide(6, -3), -2);
  assert.equal(divide(-6, -3), 2);
});
test("divide: 0 ÷ n", () => assert.equal(divide(0, 5), 0));
test("divide: 0 으로 나누면 오류", () => {
  assert.throws(() => divide(5, 0), Error);
  assert.throws(() => divide(0, 0), Error);
});
