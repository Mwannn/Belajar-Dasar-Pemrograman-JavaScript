import { test } from 'node:test';
import { strictEqual } from 'node:assert';
import sum from './index.js';

test('should return correct sum for positive integers', () => {
  strictEqual(sum(2, 3), 5, '2 + 3 should return 5');
  strictEqual(sum(0, 0), 0, '0 + 0 should return 0');
  strictEqual(sum(10, 20), 30, '10 + 20 should return 30');
});

test('should return 0 for negative numbers', () => {
  strictEqual(sum(-1, 5), 0, '-1 + 5 should return 0');
  strictEqual(sum(5, -2), 0, '5 + -2 should return 0');
  strictEqual(sum(-3, -4), 0, '-3 + -4 should return 0');
});

test('should return 0 for non-number inputs', () => {
  strictEqual(sum('1', 2), 0, '"1" + 2 should return 0');
  strictEqual(sum(1, '2'), 0, '1 + "2" should return 0');
  strictEqual(sum('a', 'b'), 0, '"a" + "b" should return 0');
  strictEqual(sum(null, 5), 0, 'null + 5 should return 0');
  strictEqual(sum(5, undefined), 0, '5 + undefined should return 0');
  strictEqual(sum({}, 10), 0, '{} + 10 should return 0');
  strictEqual(sum(10, []), 0, '10 + [] should return 0');
});

test('should handle non-negative floating-point numbers', () => {
  strictEqual(sum(1.5, 2.5), 4.0, '1.5 + 2.5 should return 4.0');
  // Use tolerance for 0.1 + 0.2 due to floating-point precision
  const result = sum(0.1, 0.2);
  const expected = 0.3;
  const tolerance = 1e-10; // Small tolerance for floating-point comparison
  strictEqual(
    Math.abs(result - expected) < tolerance,
    true,
    '0.1 + 0.2 should be approximately 0.3'
  );
});