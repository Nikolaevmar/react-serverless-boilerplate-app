import { useState } from "react";
import {useLogin} from '../../hooks/useLogin'
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const {login, error, isPending} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
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
      {!isPending &&<button className="signBtn">Login</button>}
      {isPending && <button className="signBtn" disabled>Loading...</button>} 
      {error && <p>{error}</p>}
    </form>
  );
}
