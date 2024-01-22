const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


const checkForPalindrome = (input) => {
 const originalInput = input;
 if (input === '') {
  alert('Please input a value');
  return;
 }
const isPalindrome = palindrome(input);

if (isPalindrome) {
 result.textContent = `${originalInput} is a palindrome.`;
} else {
 result.textContent = `${originalInput} is not a palindrome.`;
 }
};


const palindrome = (str) => {
  const regex = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(regex, "");
  const reversed = smallStr.split("")
  .reverse()
  .join("");
  if (reversed === smallStr) return true;
  return false;
 };

checkPalindromeBtn.addEventListener('click', () => {
 const inputValue = userInput.value;
 checkForPalindrome(inputValue);
});
