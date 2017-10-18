document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const cartButton = document.getElementById("cart-button");
  const modalCloseButton = document.querySelector('.modal-close-button');
  const cartCount = document.getElementById("cart-item-count");
  const cartModal = document.querySelector('.modal-window');

  let cartCounter = parseInt(cartCount.innerText, 10);
  let modal = document.querySelector('.modal');

  // utility functions for modal:

  const openModal = () => {
    modal.classList.add('modal-open');
    document.body.classList.add('showing-modal');
  };

  const closeModal = () => {
    modal.classList.remove('modal-open');
    document.body.classList.remove('showing-modal');
  }

  cartButton.addEventListener('click', (event) => {
    console.log('cart button clicked');
    event.preventDefault();
    openModal();
  });

  modalCloseButton.addEventListener('click', (event) => {
    console.log('close button clicked');
    closeModal();
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      event.preventDefault();
      closeModal();
    }
  });


  // adding elements to the modal:
  const cartList = document.querySelector('.cart-list');

  // event listeners for product buttons:
  const onionButton = document.getElementById("onion-button");
  const tomatoButton = document.getElementById("tomato-button");
  const carrotButton = document.getElementById("carrot-button");
  const coldcutButton = document.getElementById("coldcut-button");
  const ojButton = document.getElementById("oj-button");
  const icecreamButton = document.getElementById("icecream-button");
  const pizzaButton = document.getElementById("pizza-button");

  onionButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
    const addItem = document.createElement('li');
    addItem.className = 'listItem';
    const itemName = event.target.previousElementSibling.previousElementSibling.innerText;
    const nameSpan = document.createElement('span');
    nameSpan.innerText = itemName;
    addItem.appendChild(nameSpan);
    const itemPrice = event.target.previousElementSibling.innerText;
    const priceSpan = document.createElement('span');
    priceSpan.innerText = itemPrice;
    addItem.appendChild(priceSpan);
    cartList.appendChild(addItem);
  });

  tomatoButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  carrotButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  coldcutButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  ojButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  icecreamButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

  pizzaButton.addEventListener('click', (event) => {
    cartCounter += 1;
    cartCount.innerText = cartCounter;
  });

































});
