// Mengimpor kelas Item dan Inventory dari file masing-masing
import Item from './Item.js';
import Inventory from './Inventory.js';

// Membuat instance baru dari Inventory
const inventory = new Inventory();

// Membuat dua item baru untuk inventaris
const item1 = new Item(1, 'Laptop', 10, 1000);
const item2 = new Item(2, 'Mouse', 50, 20);

// Menambahkan item ke inventaris
inventory.addItem(item1);
inventory.addItem(item2);

// Menampilkan inventaris awal
console.log('Initial Inventory:');
console.log(inventory.listItems());

// Memperbarui detail item1
item1.updateDetails('Laptop', 8, 950);

// Menampilkan inventaris setelah pembaruan
console.log('\nInventory after update:');
console.log(inventory.listItems());

// Menghapus item dengan ID 2 dari inventaris
inventory.removeItem(2);

// Menampilkan inventaris setelah penghapusan
console.log('\nInventory after removal:');
console.log(inventory.listItems());