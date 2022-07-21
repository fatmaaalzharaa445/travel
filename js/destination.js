// menu for responsive  small screen
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

//_____________________________________________________________________________________________

//sweet alert for submit Btn
document.getElementById('SubmitBtn').onclick = function () {
  swal({
    title: 'Thank You',
    text: 'Check Your Email For Additional Info...',
    icon: 'success',
    button: 'OK',
  });
}