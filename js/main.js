

// Get form elements
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");
const signupMessage = document.getElementById("signupMessage");
const loginMessage = document.getElementById("loginMessage");
const homeNav = document.getElementById("homeNav");
const homeContent = document.getElementById("homeContent");
const usernameDisplay = document.getElementById("username");

// Helper functions for toggling visibility
function showElement(element) {
  element.classList.remove("d-none");
}

function hideElement(element) {
  element.classList.add("d-none");
}

// Check if users exist in localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Show the logged-in home page if there's a session
const username = localStorage.getItem("sessionUsername");
if (username) {
  usernameDisplay.innerHTML = "Welcome " + username;
  showElement(homeNav);
  showElement(homeContent);
  hideElement(signupForm);
  hideElement(loginForm);
} else {
  showElement(signupForm);
  hideElement(loginForm);
  hideElement(homeNav);
  hideElement(homeContent);
}

// Sign Up Functionality
signupButton.addEventListener("click", () => {
const name = document.getElementById("signupName").value.trim();
const email = document.getElementById("signupEmail").value.trim();
const password = document.getElementById("signupPassword").value.trim();
const signupMessage = document.getElementById("signupMessage");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (!name || !email || !password) {
  signupMessage.textContent = "All fields are required!";
  signupMessage.style.color = "red";
  return;
}

let emailExists = false;
for (let user of users) {
  if (user.email === email) {
      emailExists = true;
      break;
  }
}

if (emailExists) {
  signupMessage.textContent = "Email already exists!";
  signupMessage.style.color = "red";
} else {
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  signupMessage.textContent = "Sign up successful!";
  signupMessage.style.color = "green";

  // Optionally redirect
  showLoginForm();
}
});

// Login Functionality
loginButton.addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    loginMessage.textContent = "All fields are required!";
    loginMessage.style.color = "red";
    return;
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("sessionUsername", user.name);
    usernameDisplay.innerHTML = "Welcome " + user.name;
    showElement(homeNav);
    showElement(homeContent);
    hideElement(signupForm);
    hideElement(loginForm);
  } else {
    loginMessage.textContent = "Incorrect email or password!";
    loginMessage.style.color = "red";
  }
});

// Logout Functionality
function logout() {
  localStorage.removeItem("sessionUsername");
  hideElement(homeNav);
  hideElement(homeContent);
  showElement(signupForm);
  hideElement(loginForm);
}

// Show Login Form
function showLoginForm() {
  showElement(loginForm);
  hideElement(signupForm);
}

// Show Sign Up Form
function showSignUpForm() {
  showElement(signupForm);
  hideElement(loginForm);
}


