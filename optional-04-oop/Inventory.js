/**
 * Kelas untuk mengelola inventaris item
 */
 class Inventory {
  /**
   * Inisialisasi inventaris dengan array kosong
   */
  constructor() {
    this.items = [];
  }

  /**
   * Menambahkan item baru ke inventaris
   * @param {Object} item - Objek item yang akan ditambahkan
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Menghapus item dari inventaris berdasarkan ID
   * @param {string|number} id - ID item yang akan dihapus
   */
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  /**
   * Menampilkan detail semua item dalam inventaris
   * @returns {string} String yang berisi detail semua item, dipisahkan oleh baris baru
   */
  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

export default Inventory;