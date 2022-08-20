const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
  //get input amount:
  const wIA = getInputAmount('withdraw-field');

  //set new input to total:
  const pTWA = getPreviousAmount('withdraw-total');

  // get previous balance total:
  const pTB = getPreviousAmount('balance-total');

  //total withdraw and balance calculation:
  if (wIA < pTB) {
    const tWA = pTWA + wIA;
    //display withdraw:
    displayAmount('withdraw-total', tWA);
    // new total :
    const nTB = pTB - wIA;
    // display total:
    displayAmount('balance-total', nTB);
  } else {
    alert("you don't have sufficient balance to withdraw");
  }
});
