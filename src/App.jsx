import "./styles.css";
import { useState, useEffect } from "react";
import { validateEmail, validatePassword } from "./validators"; 


export  default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);





function onSubmit(e) {
  e.preventDefault();

  const emailResults = validateEmail(email);
  setEmailErrors(emailResults);

  const passwordResults = validatePassword(password);
  setPasswordErrors(passwordResults);
 }




  return (
    <form className="form" onSubmit={onSubmit}>
    <div className={`form-group ${emailErrors.length > 0 ? " error" : ""}`}>
      <label className="label" htmlFor="email">Email</label>
      <input className="input" type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <div className="msg">{emailErrors.join(", ")} </div>
    </div>
    <div className={`form-group ${passwordErrors.length > 0 ? " error" : ""}`}>
      <label className="label" htmlFor="password">Password</label>
      <input
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      />
    </div>
    {passwordErrors.length > 0 && (
      <div className="msg">{passwordErrors.join(", ")}</div>
    )}
    <button className="btn" type="submit">Submit</button>
  </form>
  );
}



// Working on how forms work using both ref and stafe to understand the differences

