import React from "react";
import "./Login.css";

import { auth } from "../firebase";

import { useForm } from "react-hook-form";

function Login(props) {
  const { register, handleSubmit, errors, setError } = useForm();

  const submitHandler = data => {
    auth
      .signInWithEmailAndPassword(data.inputEmail, data.inputPassword)
      .catch(() => {
        setError(
          "general",
          "custom",
          "The email and password you entered did not match our records."
        );
      });
  };

  return (
    <form className="form-app" onSubmit={handleSubmit(submitHandler)}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        {errors.general && (
          <span className="text-danger">{errors.general.message}</span>
        )}
      </div>

      <div className="form-label-group">
        <input
          type="email"
          name="inputEmail"
          className="form-control"
          placeholder="Email"
          autoFocus=""
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email address."
            }
          })}
        />
        {errors.inputEmail && (
          <span className="text-danger">{errors.inputEmail.message}</span>
        )}
      </div>
      <div className="form-label-group">
        <input
          type="password"
          name="inputPassword"
          className="form-control"
          placeholder="Password"
          ref={register({
            required: "Password is required."
          })}
        />
        {errors.inputPassword && (
          <span className="text-danger">{errors.inputPassword.message}</span>
        )}
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Log in
      </button>
    </form>
  );
}

export default Login;
