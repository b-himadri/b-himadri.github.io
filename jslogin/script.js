const root = document.querySelector('.root')
const info = document.querySelector('.info')
let users = []
let user = {}

const validateForm = () => {
  let email = document.getElementById('txtEmail').value.trim()
  let password = document.getElementById('txtPassword').value.trim()
  const found = users.find(value => value.email === email && value.password === password)
  if (found) {
    user = found
    showHome()
  } else {
    document.getElementById("errorText").innerText = "Invalid email or password"
  }
}

const loginForm = () => {
  const str = `
    <h2>Login Form</h2>
    <p id="errorText"></p>
    <p><input type="email" placeholder="Email" id="txtEmail" /></p>
    <p><input type="password" placeholder="Password" id="txtPassword" /></p>
    <p><button onclick="validateForm()">Submit</button></p>
    <p><button onclick="registerForm()">Not a member? Create Account</button></p>
  `
  root.innerHTML = str
  updateInfo()
}

const registerForm = () => {
  const str = `
    <h2>Register Form</h2>
    <p><input type="text" placeholder="Username" id="txtname" /></p>
    <p><input type="email" placeholder="Email" id="txtemail"/></p>
    <p><input type="password" placeholder="Password" id="txtpassword"/></p>
    <p><button onclick="saveUser()">Submit</button></p>
    <p><button onclick="loginForm()">Already a member? Login</button></p>
  `
  root.innerHTML = str
}

const showHome = () => {
  const str = `
    <h2>Home Page</h2>
    <p>Welcome ${user.name}</p>
    <p><button onclick="logout()">Logout</button></p>
  `
  root.innerHTML = str
  updateInfo()
}

const logout = () => {
  user = {}
  loginForm()
}

const saveUser = () => {
  let name = document.getElementById('txtname').value.trim()
  let email = document.getElementById('txtemail').value.trim()
  let password = document.getElementById('txtpassword').value.trim()
  if (name && email && password) {
    let newUser = { name, email, password }
    users.push(newUser)
    user = newUser
    loginForm()
  } else {
    alert('Please fill in all fields')
  }
}

const updateInfo = () => {
  if (user.name) {
    info.innerHTML = `
      <h2>Last Registered User</h2>
      <p>Username: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Password: ${user.password}</p>
    `
  } else {
    info.innerHTML = ''
  }
}
