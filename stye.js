
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  const slideInterval = setInterval(() => {
    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0; // Go back to first image
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4000); // Slides every 4 seconds

  let cart = [];
let total = 0;

function addToCart(button) {
  const product = button.parentElement;
  const name = product.getAttribute("data-name");
  const price = parseInt(product.getAttribute("data-price"));

  cart.push({ name, price });
  total += price;

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalSpan = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₦${item.price}`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hello! I'd like to order:\n";
  cart.forEach(item => {
    message += `- ${item.name} (₦${item.price})\n`;
  });
  message += `Total: ₦${total}`;

  const whatsappURL = `https://wa.me/2348088035607?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

