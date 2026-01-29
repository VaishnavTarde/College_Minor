// ===================== LOGIN =====================
function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.role) {
      alert(data.message);
      localStorage.setItem("role", data.role);
      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Server error");
  });
}

// ===================== SIGNUP =====================
function signup(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message === "Signup successful") {
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }
  })
  .catch(err => {
    console.error(err);
    alert("Server error");
  });
}
