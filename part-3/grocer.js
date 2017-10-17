document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const cartButton = document.getElementById("cart-button");
  const modalCloseButton = document.querySelector('.modal-close-button');
  const cartCount = document.getElementById("cart-item-count");

  let cartCounter = parseInt(cartCount.innerText, 10);
  let modal = document.querySelector('.modal');

  cartButton.addEventListener('click', (event) => {
    console.log('cart button clicked');
    event.preventDefault();
    modal.classList.add('modal-open');
  });

  modalCloseButton.addEventListener('click', (event) => {
    console.log('close button clicked');
    modal.classList.remove('modal-open');
  })

  // event listners for product buttons:
  const onionButton = document.getElementById("onion-button");
  const tomatoButton = document.getElementById("tomato-button");
  const carrotButton = document.getElementById("carrot-button");
  const coldcutButton = document.getElementById("coldcut-button");
  const ojButton = document.getElementById("oj-button");
  const icecreamButton = document.getElementById("icecream-button");
  const pizzaButton = document.getElementById("pizza-button");

  onionButton.addEventListener('click', (event) => {
    console.log('onion button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  tomatoButton.addEventListener('click', (event) => {
    console.log('tomato button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  carrotButton.addEventListener('click', (event) => {
    console.log('carrot button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  coldcutButton.addEventListener('click', (event) => {
    console.log('coldcut button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  ojButton.addEventListener('click', (event) => {
    console.log('oj button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  icecreamButton.addEventListener('click', (event) => {
    console.log('ice cream button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  pizzaButton.addEventListener('click', (event) => {
    console.log('pizza button clicked');
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

































});
