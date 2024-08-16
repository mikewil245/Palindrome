let inputfield = document.querySelector("#palindromeInput");

const checkBtn = document.querySelector("#checkBtn");
console.log(checkBtn);

const showMe = document.querySelector("#showMe");

checkBtn.addEventListener("click", () => {
  let inputText = inputfield.value;
  console.log(inputText);
  let normalizedText = inputText.toLowerCase();
  let reverseText = normalizedText.split("").reverse().join("");

  if (normalizedText === "") {
    alert("Enter a text please");
  } else if (normalizedText === reverseText) {
    showMe.style.display = "block";
    showMe.textContent = `${normalizedText} is a palindrome`;
  } else if (normalizedText !== reverseText) {
    showMe.style.display = "block";
    showMe.textContent = `${normalizedText} is a not a palindrome`;
  }
});
