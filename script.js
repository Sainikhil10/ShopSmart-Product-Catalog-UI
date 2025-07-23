const products = [
  { name: "Smartphone", price: 599, category: "Electronics" },
  { name: "Bluetooth Headphones", price: 99, category: "Electronics" },
  { name: "T-Shirt", price: 19, category: "Fashion" },
  { name: "Novel: The Alchemist", price: 10, category: "Books" },
  { name: "Sneakers", price: 49, category: "Fashion" },
  { name: "Laptop", price: 999, category: "Electronics" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(filter = "All") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function addToCart(name) {
  cart.push(name);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function filterProducts() {
  const selected = document.getElementById("category-filter").value;
  renderProducts(selected);
}

renderProducts();
updateCartCount();
