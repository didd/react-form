import React, { useState } from "react";

import Profile from "./Profile";

import "./SignUp.css";

import signUp from "./sign-up.service";

import { auth } from "../firebase";

import { useForm } from "react-hook-form";

function SignUp() {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, getValues, errors, setError } = useForm();
  const submitHandler = data => {
    const formData = new FormData();
    formData.set("profileImage", data.inputProfileImage[0]);
    formData.set("phone", data.inputPhoneNumber);
    formData.set("address", data.inputAddress);
    formData.set("email", data.inputEmail);
    formData.set("date_of_birth", data.inputDateOfBirth);
    formData.set(
      "security_questions",
      JSON.stringify({
        question: data.inputSecurityQuestion1,
        answer: data.inputAnswer1
      })
    );
    formData.append(
      "security_questions",
      JSON.stringify({
        question: data.inputSecurityQuestion2,
        answer: data.inputAnswer2
      })
    );
    formData.append(
      "security_questions",
      JSON.stringify({
        question: data.inputSecurityQuestion3,
        answer: data.inputAnswer3
      })
    );
    try {
      auth
        .createUserWithEmailAndPassword(data.inputEmail, data.inputPassword)
        .then(async () => {
          let signUpResult = await signUp(formData);
          if (signUpResult.data) {
            setMessage(
              "You have successfully created account on Jetcake Test Project!"
            );
          } else {
            setError("general", "custom", signUpResult.message);
          }
        })
        .catch(error => {
          setError("general", "custom", error.message);
        });
    } catch (error) {
      setError(
        "general",
        "custom",
        "We have encountered an error, please try again latter."
      );
    }
  };

  return (
    <form className="form-app" onSubmit={handleSubmit(submitHandler)}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        {errors.general && (
          <span className="text-danger">{errors.general.message}</span>
        )}
        {message}
      </div>
      <Profile register={register} errors={errors} setError={setError} />
      <React.Fragment>
        <div className="form-label-group">
          <input
            type="password"
            name="inputPassword"
            className="form-control"
            placeholder="Password"
            ref={register({
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long."
              }
            })}
          />
          {errors.inputPassword && (
            <span className="text-danger">{errors.inputPassword.message}</span>
          )}
        </div>

        <div className="form-label-group">
          <input
            type="password"
            name="inputConfirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            ref={register({
              validate: value =>
                value === getValues().inputPassword || "Passwords don't match."
            })}
          />
          {errors.inputConfirmPassword && (
            <span className="text-danger">
              {errors.inputConfirmPassword.message}
            </span>
          )}
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign Up
        </button>
      </React.Fragment>
    </form>
  );
}

export default SignUp;
