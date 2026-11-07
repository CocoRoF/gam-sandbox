import assert from "node:assert/strict";
import { test } from "node:test";
import { add, subtract, multiply } from "./calc.js";

test("add", () => assert.equal(add(2, 3), 5));

test("multiply", () => {
  assert.equal(multiply(2, 3), 6);
  assert.equal(multiply(-2, 3), -6);
  assert.equal(multiply(-2, -3), 6);
  assert.equal(multiply(3, 0), 0);
});

test("subtract", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(3, 5), -2);
  assert.equal(subtract(-3, -5), 2);
  assert.equal(subtract(3, 0), 3);
});
