const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
  //withdraw input amount
  const wIA = getInputAmount('withdraw-field');

  //previous total withdraw amount
  const pTWA = getPreviousAmount('withdraw-total');

  //previous total balance
  const pTB = getPreviousAmount('balance-total');

  //total withdraw amount and total balance calculation
  if (isNaN(wIA) || wIA < 0) {
    alert('Please Giva a Valid Number');
  } else if (wIA > pTB) {
    alert("You don't have sufficient balance to withdraw.");
  } else {
    //display total withdraw amount
    const tWA = pTWA + wIA;
    displayAmount('withdraw-total', tWA);
    // display total balance
    const nTB = pTB - wIA;
    displayAmount('balance-total', nTB);
  }
});
