import React, { useState } from "react";
import "./Login.css";
import firebase from "../config/firebase";
import { FaHistory } from "react-icons/fa";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  function handleSubmit(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        // setIsLoggedIn(true);
        history.replace("/");
        setErrors("");
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.message);
        setIsLoading(false);
      });
  }
  function handleOnchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // if (isLoggedIn) return <Redirect to="/" />;
  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        {errors !== "" && <p className="error__text">{errors}</p>}
        <h1 className="form__title">Đăng nhập</h1>
        <input
          className="form__input"
          type="text"
          required
          placeholder="Tài khoản"
          name="email"
          value={form.email}
          onChange={handleOnchange}
        />
        <input
          className="form__input"
          type="password"
          required
          placeholder="Mật khẩu"
          name="password"
          value={form.password}
          onChange={handleOnchange}
        />
        <button className="btn__login">
          {isLoading && <FaHistory className="loading" />}Đăng nhập
        </button>
      </form>
    </div>
  );
}
