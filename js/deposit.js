const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
  //get input amount:
  const inputField = document.getElementById('deposit-field');
  const nDA = parseFloat(inputField.value);

  //set new input to total:
  const totalField = document.getElementById('deposit-total');
  const pTDA = parseFloat(totalField.innerText);
  // get previous balance total:
  const balanceField = document.getElementById('balance-total');
  const pBT = parseFloat(balanceField.innerText);
  //total deposit and balance calculation:
  if (typeof nDA === 'number' && nDA > 0) {
    const tDA = nDA + pTDA;
    //display deposit:
    totalField.innerText = tDA;
    // new total :
    const nBT = pBT + nDA;
    // display total:
    balanceField.innerText = nBT;
  } else {
    alert('please give a valid amount');
  }

  //clear input field:
  inputField.value = '';
});
