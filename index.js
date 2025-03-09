function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "`~!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeUppercase ? upperCase : "";
  allowedChars += includeLowercase ? lowerCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length < 0) {
    return ("Must be atleast 1 character");
  }
  if (allowedChars.length === 0) {
    return ("must be at least 1 selected chars");
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
    
  }
  return password;
}

const passwordLength = 10;
const includeUppercase = false;
const includeLowercase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

console.log(`Your Password : ${password}`);
