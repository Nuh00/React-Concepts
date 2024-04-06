export function validateEmail(email) {
  const errors = [];
  if (email === "") {
    errors.push("Required");
  }
  if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("Must be a valid email");
  }

    return errors;
}

export function validatePassword(password) {

    const error = [];
  // Check if password is blank
  if (!password) {
    error.push( "Password is required.");
  }

  // Check if password is at least 10 characters long
  if (password.length < 10) {
    error.push( "Password must be at least 10 characters long.");
  }

  // Check if password includes a lowercase letter
  if (!/[a-z]/.test(password)) {
    error.push( "Password must include a lowercase letter.");
  }

  // Check if password includes an uppercase letter
  if (!/[A-Z]/.test(password)) {
    error.push( "Password must include an uppercase letter.");
  }

  // Check if password includes a number
  if (!/[0-9]/.test(password)) {
    error.push( "Password must include a number.");
  }


    return error;
}
