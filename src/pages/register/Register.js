import { useState } from "react";
import styles from "./Register.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>
        <span>Username:</span>
      </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>
        <span>Password:</span>
      </label>
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={password}
      />
      <button className="btn">Sign up</button>
    </form>
  );
}
