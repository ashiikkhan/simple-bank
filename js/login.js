const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
  const email = document.getElementById('email-field').value;
  const password = document.getElementById('password-field').value;
  if (email === 'myemail@bank.com' && password === 'mypassword') {
    console.log('valid user');
  } else {
    alert('Write given email and password in placeholder!');
  }
});
