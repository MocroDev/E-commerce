const productList = document.querySelector("#product-list");
const cartList = document.querySelector("#cart-list");
const checkoutButton = document.querySelector("#checkout-button");

productList.addEventListener("click", event => {
  if (event.target.classList.contains("add-to-cart-button")) {
    const product = event.target.parentElement;
    addProductToCart(product);
  }
});

cartList.addEventListener("click", event => {
  if (event.target.classList.contains("remove-from-cart-button")) {
    const product = event.target.parentElement;
    removeProductFromCart(product);
  }
});