// Reference to DOM elements
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

// Function to append a message to the chat window
function appendMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle sending the user's message
async function generateMeme() {
  const inputText = userInput.value.trim();

  if (!inputText) return;

  // Append user message
  appendMessage(inputText, "user");
  userInput.value = "";

  try {
    // Send user input to the backend API
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputText })
    });

    const data = await response.json();

    // Append bot response
    appendMessage(data.response, "bot");
  } catch (error) {
    console.error("Error:", error);
    appendMessage("Oops! Something went wrong. Please try again later.", "bot");
  }
}

// Optional: allow pressing Enter to send message
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateMeme();
  }
});

// "Think for me" button action (you can customize this)
function thinkForMe() {
  userInput.value = "Give me a funny meme idea!";
  generateMeme();
}
