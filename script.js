const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.innerText = "Text changed!";
});
