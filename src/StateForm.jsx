import { useState } from "react";
import { validateEmail, validatePassword } from "./validators";

export function StateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    
    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);

    setEmailError(emailResult);
    setPasswordError(passwordResult);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError.length > 0 && (
          <div class="msg">{emailError.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
        {passwordError.length > 0 && (
          <div class="msg">{passwordError.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
// Required (Cannot be blank)
//  Must Be 10 characters or longer
//!  Must include a lowercase letter
// Must include an uppercase letter
// Must include a number
