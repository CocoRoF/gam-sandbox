import assert from "node:assert/strict";
import { test } from "node:test";
import { add, subtract } from "./calc.js";

test("add", () => assert.equal(add(2, 3), 5));

test("subtract", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(3, 5), -2);
  assert.equal(subtract(-2, -3), 1);
  assert.equal(subtract(4, 0), 4);
  assert.equal(subtract(4, 4), 0);
});
