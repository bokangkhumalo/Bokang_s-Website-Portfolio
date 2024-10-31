function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  chatbotWindow.style.display =
    chatbotWindow.style.display === "block" ? "none" : "block";
}

const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

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

  // Don't process empty messages
  if (!input) return;

  displayMessage(input, "user");
  userInput.value = "";

  if (responses[input]) {
    displayMessage(responses[input], "bot");

    // Handle navigation
    switch (input) {
      case "home":
        window.location.href = "#Home";
        break;
      case "about":
        window.location.href = "#About";
        break;
      case "skills":
        window.location.href = "#skills";
        break;
      case "contact":
        window.location.href = "#Contact";
        break;
    }
  } else {
    displayMessage("I'm sorry, I don't understand that.", "bot");
  }
}

function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.className = `message ${sender}`;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  sendButton.addEventListener("click", handleUserInput);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserInput();
    }
  });
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
