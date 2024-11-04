function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// chatbot
// Toggle Chatbot visibility
// Global variable declaration
let isChatbotOpen = false;

document.addEventListener("DOMContentLoaded", function () {
  const chatbot = document.getElementById("chatbot");

  if (chatbot) {
    chatbot.style.display = "none";
  }
});

function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  isChatbotOpen = !isChatbotOpen;
  chatbot.style.display = isChatbotOpen ? "flex" : "none";
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (message) {
    addMessage("user", message);
    generateBotResponse(message);
    userInput.value = "";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function addMessage(sender, message) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
  const responses = {
    hello: "Hi there! How can I help you today?",
    hi: "Hello! How can I assist you?",
    "who are you":
      "I am Bokang's portfolio chatbot assistant. Feel free to ask me questions!",
    about:
      " a software developer passionate about creating innovative solutions. I specialize in building creative websites and exciting programs, driven by a love for technology and continuous learning",
    contact: "You can reach Bokang at bokangkhumalo0@gmail.com",
    skills:
      "Bokang is skilled in HTML, CSS, JavaScript, Java, C#, Android Kotlin, and SQL",
    experience:
      "Bokang is currently working as an Advanced Technical Academy Candidate at Capaciti x FNB",
    education:
      "Bokang holds a National Diploma in IT Software Development from IIE Rosebank College",
  };

  const defaultResponse =
    "I'm not sure about that. Feel free to ask about Bokang's skills, education, experience, or contact information!";

  const lowercaseMessage = userMessage.toLowerCase();
  let botResponse = defaultResponse;

  for (let key in responses) {
    if (lowercaseMessage.includes(key)) {
      botResponse = responses[key];
      break;
    }
  }

  setTimeout(() => {
    addMessage("bot", botResponse);
  }, 500);
}
