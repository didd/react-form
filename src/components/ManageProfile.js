import React, { useEffect, useState } from "react";

import Profile from "./Profile";

import { updateProfile, getProfile } from "./manage-profile.service";

import "./ManageProfile.css";

import { useForm } from "react-hook-form";

function ManageProfile(props) {
  const [message, setMessage] = useState("");
  const { register, getValues, errors, setValue, setError } = useForm({
    mode: "onSubmit"
  });

  const { email, token } = props.user;

  const submitHandler = event => {
    let data = getValues();
    const formData = new FormData();
    if (data.inputProfileImage.length > 0) {
      formData.set("profileImage", data.inputProfileImage[0]);
    }
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
    updateProfile(formData)
      .then(() => {
        setMessage("You have successfully updated your profile!");
      })
      .catch(error => {
        setError("general", "custom", error.message);
      });
    event.preventDefault();
  };

  useEffect(() => {
    let profileImage = document.querySelector(".profile-image");
    getProfile(email, token)
      .then(result => {
        let { data } = result.data;
        if (result) {
          let dateOfBirth = new Date(data.date_of_birth._seconds * 1000)
            .toISOString()
            .substring(0, 10);

          profileImage.src = data.photo;
          document.querySelector("input[name=inputDateOfBirth]").type = "date";
          setValue("inputEmail", data.email);
          setValue("inputAddress", data.address);
          setValue("inputDateOfBirth", dateOfBirth);
          setValue("inputPhoneNumber", data.phone);
          setValue(
            "inputSecurityQuestion1",
            data.security_questions[0].question
          );
          setValue("inputAnswer1", data.security_questions[1].answer);
          setValue(
            "inputSecurityQuestion2",
            data.security_questions[1].question
          );
          setValue("inputAnswer2", data.security_questions[1].answer);
          setValue(
            "inputSecurityQuestion3",
            data.security_questions[2].question
          );
          setValue("inputAnswer3", data.security_questions[2].answer);
        }
      })
      .catch(error => {
        setError("general", "custom", error.message);
      });
  }, []);

  return (
    <form className="form-app" onSubmit={submitHandler}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Profile</h1>
        {errors.general && (
          <span className="text-danger">{errors.general.message}</span>
        )}
        {message}
      </div>

      <Profile register={register} errors={errors} setError={setError} />

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Update
      </button>
    </form>
  );
}

export default ManageProfile;
