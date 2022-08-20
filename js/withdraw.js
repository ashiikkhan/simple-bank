const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
  //get input amount:
  const inputField = document.getElementById('withdraw-field');
  const nWA = parseFloat(inputField.value);

  //set new input to total:
  const totalField = document.getElementById('withdraw-total');
  const pTWA = parseFloat(totalField.innerText);
  // get previous balance total:
  const balanceField = document.getElementById('balance-total');
  const pBT = parseFloat(balanceField.innerText);
  //total withdraw and balance calculation:
  if (typeof nWA === 'number' && nWA > 0) {
    if (nWA < pBT) {
      const tWA = nWA + pTWA;
      //display withdraw:
      totalField.innerText = tWA;
      // new total :
      const nBT = pBT - nWA;
      // display total:
      balanceField.innerText = nBT;
    } else {
      alert("you don't have sufficient balance to withdraw");
    }
  } else {
    alert('please give a valid amount');
  }

  //clear input field:
  inputField.value = '';
});
