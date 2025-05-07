/**
 * Menghasilkan deret Fibonacci hingga elemen ke-n dalam bentuk array
 * @param {number} n - Indeks untuk panjang deret Fibonacci (non-negatif)
 * @returns {number[]} Array berisi deret Fibonacci
 */
 function fibonacci(n) {
  // Kasus tidak valid: mengembalikan array kosong untuk n negatif
  if (n < 0) return [];
  
  // Kasus dasar: mengembalikan [0] untuk n = 0
  if (n === 0) return [0];
  
  // Kasus dasar: mengembalikan [0, 1] untuk n = 1
  if (n === 1) return [0, 1];

  // Rekursi: mendapatkan deret Fibonacci untuk n-1
  const fibArray = fibonacci(n - 1);
  
  // Menghitung angka Fibonacci berikutnya
  const nextFib = fibArray[n - 1] + fibArray[n - 2];
  
  // Menambahkan angka baru ke deret
  fibArray.push(nextFib);
  
  return fibArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;