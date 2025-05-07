// Objek untuk menyimpan data buku
const books = {};

/**
 * Mengambil semua buku yang tersimpan
 * @returns {Object} Objek yang berisi semua buku
 */
function getBooks() {
  return books;
}

/**
 * Mengambil ID buku berdasarkan ID yang diberikan
 * @param {string} id - ID buku yang akan dicari
 * @returns {string|null} ID buku jika ditemukan, null jika tidak ditemukan
 */
function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

/**
 * Menyimpan buku ke dalam objek books
 * @param {Object} book - Objek buku dengan properti id dan name
 */
function saveBook(book) {
  books[book.id] = book;
}

// Menyimpan buku baru dengan ID "book-1" dan nama "Book 1"
saveBook({ id: "book-1", name: "Book 1" });

// Mengambil semua buku
const myBooks = getBooks();
// Mengambil ID buku berdasarkan ID "book-1"
const myBook = getBookById("book-1");

// Menampilkan daftar buku dan ID buku
console.log(myBooks);
console.log(myBook);