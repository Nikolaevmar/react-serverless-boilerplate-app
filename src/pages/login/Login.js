import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>
        <span>Password:</span>
      </label>
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={password}
      />
      <button className="btn">Login</button>
    </form>
  );
}
