function addToCart(button) {
  const product = button.parentElement;
  const name = product.getAttribute('data-name');
  const price = parseInt(product.getAttribute('data-price'));

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} added to cart!`);
}
