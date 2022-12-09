let textInput = document.querySelector("#inputText");
let button = document.querySelector(".checkBtn");

button.addEventListener("click", () => {
  textInput.value = "";
  if (textInput.value.trim().length <= 0) {
    alert("Please Enter Some Input");
    return;
  }

  let userInput = textInput.value.trim();
  let reverseInput = textInput.value.trim().split("").reverse().join("");

  userInput == reverseInput
    ? alert("Input Value Is Palindrome")
    : alert("Input Value Is Not Palindrome");
});
