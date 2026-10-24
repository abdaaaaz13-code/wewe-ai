const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const messages = document.querySelector("#messages");
const sendButton = document.querySelector("#send-button");

function addMessage(text, who) {
  const article = document.createElement("article");
  article.className = `bubble ${who}`;
  const label = document.createElement("span");
  label.className = "bubble-label";
  label.textContent = who === "user" ? "أنت" : "WeWe AI";
  const p = document.createElement("p");
  p.textContent = text;
  article.append(label, p);
  messages.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  addMessage(message, "user");
  input.value = "";
  sendButton.disabled = true;

  // Demo response only. The real model/API will be connected in a later step.
  window.setTimeout(() => {
    addMessage("وصلت رسالتك! هذه نسخة واجهة تجريبية، ولسه ما ربطنا نموذج الذكاء الاصطناعي. الخطوة القادمة هي تجهيز الـ API.", "assistant");
    sendButton.disabled = false;
    input.focus();
  }, 350);
});

input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});
