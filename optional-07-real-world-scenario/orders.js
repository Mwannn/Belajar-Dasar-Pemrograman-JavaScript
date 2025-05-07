// orders.js
// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Inisialisasi variabel orders sebagai array kosong untuk menampung data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  // Hitung total harga dari items
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Buat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };

  // Tambahkan ke array orders
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  // Cari pesanan berdasarkan id
  const order = orders.find((order) => order.id === orderId);

  // Jika pesanan ditemukan, perbarui statusnya
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus Selesai
function calculateTotalRevenue() {
  // Filter pesanan yang berstatus Selesai dan jumlahkan totalPrice
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan id
function deleteOrder(id) {
  // Filter out pesanan dengan id yang sesuai
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
