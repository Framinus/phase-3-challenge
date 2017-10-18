document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const cartButton = document.getElementById("cart-button");
  const modalCloseButton = document.querySelector('.modal-close-button');
  const cartCount = document.getElementById("cart-item-count");
  const cartModal = document.querySelector('.modal-window');

  let cartCounter = parseInt(cartCount.innerText, 10);
  let modal = document.querySelector('.modal');
  const totalAmount = document.getElementById("total-amount");

  // cart total function
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
    totalAmount.innerText = total;
  }

  // utility functions for modal:

  const openModal = () => {
    modal.classList.add('modal-open');
    document.body.classList.add('showing-modal');
    getTotal();
  };

  const closeModal = () => {
    modal.classList.remove('modal-open');
    document.body.classList.remove('showing-modal');
  }

  cartButton.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });

  modalCloseButton.addEventListener('click', (event) => {
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
