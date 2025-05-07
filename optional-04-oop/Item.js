/**
 * Kelas untuk merepresentasikan item dalam inventaris
 */
 class Item {
  /**
   * Inisialisasi item dengan ID, nama, jumlah, dan harga
   * @param {string|number} id - ID unik untuk item
   * @param {string} name - Nama item
   * @param {number} quantity - Jumlah item
   * @param {number} price - Harga per unit item
   */
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /**
   * Memperbarui detail item
   * @param {string} name - Nama baru untuk item
   * @param {number} quantity - Jumlah baru untuk item
   * @param {number} price - Harga baru untuk item
   */
  updateDetails(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /**
   * Menampilkan detail item dalam format string
   * @returns {string} String yang berisi detail item
   */
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

export default Item;