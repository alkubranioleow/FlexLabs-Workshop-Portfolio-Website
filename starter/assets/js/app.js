// JavaScript role:
// JavaScript is used to make the website interactive.

// Select HTML elements
const helloButton = document.getElementById("helloButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");

const sendButton = document.getElementById("sendButton");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

// Button click interaction
helloButton.addEventListener("click", function () {
  // DOM manipulation concept
  welcomeMessage.textContent = "Hello! Thanks for visiting Sena Kendali's portfolio.";

  // Show popup
  contactPopup.classList.add("active");
});

// Close popup interaction
closePopup.addEventListener("click", function () {
  contactPopup.classList.remove("active");
});

// Close popup when user clicks outside the popup box
contactPopup.addEventListener("click", function (event) {
  if (event.target === contactPopup) {
    contactPopup.classList.remove("active");
  }
});

// Simple form interaction
sendButton.addEventListener("click", function () {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    formMessage.textContent = "Please complete your name, email, and project message.";
  } else {
    formMessage.textContent = "Thank you, " + nameValue + "! Your project message has been prepared.";
  }
});