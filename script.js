const cartData = [
  {
    id: 1,
    name: 'Green Bag',
    price: 50.0,
    quantity: 1,
    image: 'img1.jpg'
  },
  {
    id: 2,
    name: 'Gucci Bag',
    price: 100.0,
    quantity: 1,
    image: 'img3.jpg'
  },
  {
    id: 3,
    name: 'Brown Bag',
    price: 70.0,
    quantity: 1,
    image: 'img4.jpg'
  },
  {
    id: 4,
    name: 'White Bag',
    price: 70.0,
    quantity: 1,
    image: 'img5.jpg'
  }
];

// Function to update the subtotal and total price
function updateTotalPrice() {
  let totalPrice = 0;
  cartData.forEach(item => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
  });
}

// Checkout function (placeholder)
function checkout() {
  alert('Proceeding to checkout...');
}

// Function to render cart items
function renderCartItems() {
  const cartTableBody = document.getElementById('cart-table-body');
  cartData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}"></td>
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
    `;
  });
  
  updateTotalPrice();
}

renderCartItems();