function btnClick () {
  //// Get Input Values of UserName
  let username = document.getElementById('username').value
  document.getElementById('usernameError').innerHTML = ''
  if (username.length <= 5) {
    document.getElementById('usernameError').innerHTML =
      'Username must be at least 5 characters.'
    return
  }

  //// Password Validation

  let password = document.getElementById('password').value
  document.getElementById('passwordError').innerHTML = ''

  let minNum = 5
  let maxNum = 16
  let regExp = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

  if (password.length < minNum || password.length > maxNum) {
    document.getElementById('passwordError').innerHTML =
      'Password must be at least 5 and Max will 16'
    return
  } else if (!regExp.test(password)) {
    document.getElementById('passwordError').innerHTML =
      'Password must be in Special Character'
    return
  }

  //// Email Validation

  let email = document.getElementById('email').value

  document.getElementById('emailError').innerHTML = ''

  let emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!emailReg.test(email)) {
    document.getElementById('emailError').innerHTML = 'Invalid Email Address'
    return
  }

  //// Mobile Number Validation

  let mobileNumber = document.getElementById('mobileNumber').value
  document.getElementById('numberError').innerHTML = ''

  if (isNaN(mobileNumber) || mobileNumber == '' || !isFinite(mobileNumber)) {
    document.getElementById('numberError').innerHTML = 'Invalid Number'
    return
  }

  //// Form Submission

  alert('Form submitted successfully!')
}
