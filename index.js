const FREE_SHIPPING_THRESHOLD = 100;

const products = [
  {
    id: 1,
    name: "Product A",
    price: 30,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Product B",
    price: 50,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Product C",
    price: 80,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
  }
];

let cartTotal = 0;

// DOM references
const promoMsg = document.getElementById("promoMsg");
const progressFill = document.getElementById("progressFill");
const cartDisplay = document.getElementById("cartDisplay");
const productGrid = document.getElementById("productGrid");
const closeBtn = document.getElementById("closeBtn");
const clearBtn = document.getElementById("clearBtn");
const promoBar = document.getElementById("promoBar");


// ✅ Render Products with Images
products.forEach(product => {

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-img">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price}</div>
    </div>

    <div class="product-footer">
      <button class="btn btn-primary" data-price="${product.price}">
        Add to Cart
      </button>
    </div>
  `;

  productGrid.appendChild(card);

});


// ✅ Update Promo Bar
function updatePromoBar() {

  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;
  const progress = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  if (cartTotal >= FREE_SHIPPING_THRESHOLD) {
    promoMsg.textContent = "🎉 Free Shipping Unlocked!";
  } else {
    promoMsg.innerHTML = `You are <strong>$${remaining}</strong> away from Free Shipping!`;
  }

  progressFill.style.width = progress + "%";
  cartDisplay.textContent = "$" + cartTotal;
}


// ✅ Add to Cart
productGrid.addEventListener("click", e => {

  const btn = e.target.closest("[data-price]");

  if (btn) {
    cartTotal += parseInt(btn.dataset.price);
    updatePromoBar();
  }

});


// ✅ Clear Cart
clearBtn.addEventListener("click", () => {
  cartTotal = 0;
  updatePromoBar();
});


// ✅ Close Promo Bar
closeBtn.addEventListener("click", () => {
  promoBar.style.display = "none";
});


// ✅ Initial Load
updatePromoBar();