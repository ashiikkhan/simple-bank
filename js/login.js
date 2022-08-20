const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
  const email = document.getElementById('email-field').value;
  const password = document.getElementById('password-field').value;
  if (email === 'myemail@bank.com' && password === 'mypassword') {
    window.location.href = 'bank.html';
  } else {
    alert('Write given email and password in placeholder!');
  }
});
