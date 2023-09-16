const eyeActive = document.getElementById('eye-active-password')
const eyeInactive = document.getElementById('eye-inactive')
const inputPassword = document.getElementById('password-input')

function switchVisibility() {
  eyeInactive.classList.toggle('active')
  eyeInactive.classList.toggle('disabled')

  eyeActive.classList.toggle('active')
  eyeActive.classList.toggle('disabled')

  if (eyeActive.classList.contains('active')) {
    inputPassword.type = 'text'
  } else {
    inputPassword.type = 'password'
  }
}

eyeActive.addEventListener('click', switchVisibility)
eyeInactive.addEventListener('click', switchVisibility)
