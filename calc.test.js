import assert from "node:assert/strict";
import { test } from "node:test";
import { add, multiply } from "./calc.js";

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
