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
  const itemButtons = document.querySelectorAll(".item-button");
  console.log(itemButtons);

  itemButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
      cartCounter += 1;
      cartCount.innerText = cartCounter;
      const addItem = document.createElement('tr');
      addItem.className = 'list-item';
      const itemName = event.target.previousElementSibling.previousElementSibling.innerText;
      const nameSpan = document.createElement('td');
      nameSpan.className = 'modal-span';
      nameSpan.innerText = itemName;
      addItem.appendChild(nameSpan);
      const itemPrice = event.target.previousElementSibling.innerText;
      const priceSpan = document.createElement('td');
      priceSpan.className = 'modal-span price';
      priceSpan.innerText = itemPrice;
      addItem.appendChild(priceSpan);
      cartList.appendChild(addItem);
    });
  });


































});
