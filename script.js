// chatbot
const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

const responses = {
  hi: "Hello! How can I assist you today?",
  "what is your name?": "I'm your friendly chatbot!",
  help: "I can help you navigate. You can say 'about', 'skills', or 'contact'.",
  about: "You can learn more about me on the About section.",
  skills: "Check out my Skills section for more info!",
  contact: "You can find my contact information in the Contact section.",
};

// Function to handle user input
function handleUserInput() {
  const input = userInput.value.toLowerCase();
  displayMessage(input, "user");
  userInput.value = "";

  // Check for responses
  if (responses[input]) {
    displayMessage(responses[input], "bot");
    // If response is a navigation command, you can implement navigation
    if (input === "about") {
      window.location.href = "#About"; // Navigate to About section
    } else if (input === "skills") {
      window.location.href = "#skills"; // Navigate to Skills section
    } else if (input === "contact") {
      window.location.href = "#Contact"; // Navigate to Contact section
    }
  } else {
    displayMessage("I'm sorry, I don't understand that.", "bot");
  }
}

// Function to display messages
function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.className = `message ${sender}`;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserInput);

// Allow pressing Enter to send the message
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});
