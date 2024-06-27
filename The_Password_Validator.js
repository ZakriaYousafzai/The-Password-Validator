// The Password Validator: You are building a password validation feature. Create a function that checks if a given
// password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and
//  includes at least one digit.

function validatePassword(password) {
    // Check password length
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    // Check for uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
  
    // Check for lowercase letter
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
  
    // Check for digit
    const hasDigit = /\d/.test(password);
    if (!hasDigit) {
      return "Password must contain at least one digit.";
    }
  
    return true;
  }

  const password = "abhGH153";
  const validationResult = validatePassword(password);
  
  if (validationResult === true) {
    console.log("Password is valid.");
  } else {
    console.error(validationResult); // Error message
  }
  