const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
  //deposit input amount
  const dIA = getInputAmount('deposit-field');

  //previous total deposit amount
  const pTDA = getPreviousAmount('deposit-total');

  // previous total balance
  const pTB = getPreviousAmount('balance-total');

  //total deposit amount and total balance calculation:
  if (isNaN(dIA) || dIA < 0) {
    alert('Please Give a Valid Amount');
  } else {
    // total deposit desiplay
    const tDA = dIA + pTDA;
    displayAmount('deposit-total', tDA);

    // total balance display
    const nTB = pTB + dIA;
    displayAmount('balance-total', nTB);
  }
});
