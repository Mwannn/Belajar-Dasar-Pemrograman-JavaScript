// Mengimpor modul pengujian dan asersi dari Node.js
import { test } from 'node:test';
import { strictEqual } from 'node:assert';

// Mengimpor fungsi sum dari file index.js
import { sum } from './index.js';

/**
 * Menguji fungsi sum untuk memastikan penjumlahan dua angka dilakukan dengan benar
 */
test('sum menjumlahkan dua angka dengan benar', () => {
  // Menguji kasus: penjumlahan dua angka positif
  strictEqual(sum(2, 3), 5, '2 + 3 harus menghasilkan 5');

  // Menguji kasus: penjumlahan angka negatif dan positif
  strictEqual(sum(-1, 1), 0, '-1 + 1 harus menghasilkan 0');

  // Menguji kasus: penjumlahan dua angka nol
  strictEqual(sum(0, 0), 0, '0 + 0 harus menghasilkan 0');

  // Menguji kasus: penjumlahan dua angka negatif
  strictEqual(sum(-5, -3), -8, '-5 + -3 harus menghasilkan -8');
});