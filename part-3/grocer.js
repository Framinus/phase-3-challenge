document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const cartCount = document.getElementById("cart-item-count");
  const onionButton = document.getElementById("onion-button");

  let cartCounter = parseInt(cartCount.innerText, 10);


  onionButton.addEventListener('click', (event) => {
    // target cartCount and increase it by one.
    // grab the value of the cartCount.
    console.log('onion button clicked');
    cartCounter += 1;
    console.log(cartCounter);
    cartCount.innerText = cartCounter;
  });













});
