import React from "react";
import "./Login.css";
export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Login</h1>
        <input
          className="form__input"
          type="text"
          required
          placeholder="User name"
        />
        <input
          className="form__input"
          type="password"
          required
          placeholder="Password"
        />
        <input className="btn__login" type="submit" value="Login" />
      </form>
    </div>
  );
}
