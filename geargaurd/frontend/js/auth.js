const firebaseConfig = {
  apiKey: "AIzaSyCbELfNLvlQ5_qaXX9YmjGUwdyZI28bPe0",
  authDomain: "gear-gaurd.firebaseapp.com",
  projectId: "gear-gaurd",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const token = await userCredential.user.getIdToken();

    localStorage.setItem("token", token);
    window.location.href = "index.html";
  } catch (err) {
    document.getElementById("error").innerText = err.message;
  }
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert("Account created. Please login.");
  } catch (err) {
    document.getElementById("error").innerText = err.message;
  }
}
