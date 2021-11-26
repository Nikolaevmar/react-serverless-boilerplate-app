import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Register.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
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
      {!isPending && <button className="btn">Sign up</button> }
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  );
}
