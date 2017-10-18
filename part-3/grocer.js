document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  // cart total function
  const totalAmount = document.getElementById("total-amount");

  const getTotal = () => {
    const priceSpans = document.querySelectorAll('.price')
    const priceArray = [];
    priceSpans.forEach((priceSpan) => {
      const noDollarSign = priceSpan.innerText.replace(/\$/g, '');
      const numericPrice = parseFloat(noDollarSign, 10);
       return priceArray.push(numericPrice);
    });
    let total = priceArray.reduce((total, amount) => {
      return total + amount;
    });
    totalAmount.innerText = '$'+total;
  }

  // utility functions for modal:
  let modal = document.querySelector('.modal');

  // function called when cart button is clicked to open modal.
  const openModal = () => {
    modal.classList.add('modal-open');
    document.body.classList.add('showing-modal');
    getTotal();
  };

  // opens cart modal.
  const cartButton = document.getElementById("cart-button");
  cartButton.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });

  // function called by two click events to close the modal.
  const closeModal = () => {
    modal.classList.remove('modal-open');
    document.body.classList.remove('showing-modal');
  }

  // closes the modal by clicking on the close button.
  const modalCloseButton = document.querySelector('.modal-close-button');
  modalCloseButton.addEventListener('click', (event) => {
    closeModal();
  })

  // closes the modal by clicking on the shroud.
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      event.preventDefault();
      closeModal();
    }
  });

  // adding elements to the modal:
  const cartList = document.querySelector('.cart-list');

  // event listeners for product buttons:
  const cartCount = document.getElementById("cart-item-count");
  let cartCounter = parseInt(cartCount.innerText, 10);
  const itemButtons = document.querySelectorAll(".item-button");

  // creates a new element with name and price for each item button click.
  itemButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
      cartCounter += 1;
      cartCount.innerText = cartCounter;
      const addItem = document.createElement('li');
      addItem.className = 'item flex flex-row-between';
      const itemName = event.target.previousElementSibling.previousElementSibling.innerText;
      const nameSpan = document.createElement('span');
      nameSpan.className = 'modal-span';
      nameSpan.innerText = itemName;
      addItem.appendChild(nameSpan);
      const itemPrice = event.target.previousElementSibling.innerText;
      const priceSpan = document.createElement('span');
      priceSpan.className = 'modal-span price';
      priceSpan.innerText = itemPrice;
      addItem.appendChild(priceSpan);
      cartList.appendChild(addItem);
    });
  });

  // cart clear button function
  const clearButton = document.getElementById("clear-button");

  clearButton.addEventListener('click', (event) => {
    cartCounter = 0;
    cartCount.innerText = cartCounter;
    cartList.innerHTML = '';
    totalAmount.innerText = '';
  });







































});
