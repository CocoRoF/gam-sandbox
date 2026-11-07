import assert from "node:assert/strict";
import { test } from "node:test";
import { add, subtract, multiply } from "./calc.js";

test("add", () => assert.equal(add(2, 3), 5));
test("subtract", () => assert.equal(subtract(5, 3), 2));
test("multiply", () => assert.equal(multiply(4, 3), 12));
