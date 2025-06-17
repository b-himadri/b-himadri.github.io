const root = document.querySelector('.root');

const loginForm = () => {
    const str = `
        <h2>Login Form</h2>
        <p><input type="email" placeholder="Email" /></p>
        <p><input type="password" placeholder="Password" /></p>
        <p><button onclick="showHome()">Submit</button></p>
        <p><button onclick="registerForm()">Not a member? Create Account</button></p>
    `;
    root.innerHTML = str;
};

const registerForm = () => {
    const str = `
        <h2>Register Form</h2>
        <p><input type="text" placeholder="Username" /></p>
        <p><input type="email" placeholder="Email" /></p>
        <p><input type="password" placeholder="Password" /></p>
        <p><button onclick="showHome()">Submit</button></p>
        <p><button onclick="loginForm()">Already a member? Login</button></p>
    `;
    root.innerHTML = str;
};

const showHome = () => {
    const str = `
        <h2>Home Page</h2>
        <p><button onclick="loginForm()">Login</button></p>
        <p><button onclick="registerForm()">Register</button></p>
    `;
    root.innerHTML = str;
};
