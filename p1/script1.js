const loginForm = () =>{
const str = `
<h2> Login Form</h2>
<p> Create Account</p>

`
root.innerHTML = str;
}

const registerForm = () =>{
    const str = `
    <h2> Register Form</h2>
    <p> <button onclick='showHome()'>Submit</button></p>
    <p> <button onclick="loginForm()">Already a memeber ? Login</button></p>`
}

const showHome = () => {
    
}