// DOM Elements
const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// Toggle chatbot visibility
function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  chatbotWindow.style.display =
    chatbotWindow.style.display === "block" ? "none" : "block";
}

// Chatbot responses
const responses = {
  hi: "Hello! How can I assist you today?",
  "what is your name?": "I'm your friendly chatbot!",
  home: "Welcome to my landing page!",
  help: "I can help you navigate. You can say 'about', 'skills', or 'contact'.",
  about: "You can learn more about me on the About section.",
  skills: "Check out my Skills section for more info!",
  contact: "You can find my contact information in the Contact section.",
};

function handleUserInput() {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;

  displayMessage(input, "user");
  userInput.value = "";

  if (responses[input]) {
    displayMessage(responses[input], "bot");
    handleNavigation(input);
  } else {
    displayMessage("Try saying 'help' to see what I can do!", "bot");
  }
}

function handleNavigation(input) {
  const navigationMap = {
    home: "#Home",
    about: "#About",
    skills: "#skills",
    contact: "#Contact",
  };

  if (navigationMap[input]) {
    window.location.href = navigationMap[input];
  }
}

function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.className = `message ${sender}`;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Initialize event listeners when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Send button click
  sendButton.addEventListener("click", handleUserInput);

  // Enter key press
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserInput();
    }
  });

  // Display welcome message
  displayMessage("Hi! How can I help you today? Try saying 'help'.", "bot");
});
