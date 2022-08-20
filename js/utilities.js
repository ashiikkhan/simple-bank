function getInputAmount(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const nIA = parseFloat(inputField.value);
  //clear input field:
  inputField.value = '';
  return nIA;
}
function getPreviousAmount(elementId) {
  const amountField = document.getElementById(elementId);
  const pTA = parseFloat(amountField.innerText);
  return pTA;
}
function displayAmount(elementId, newValue) {
  const amountField = document.getElementById(elementId);
  amountField.innerText = newValue;
}
