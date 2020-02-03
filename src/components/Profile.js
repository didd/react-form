import React, { useState } from "react";
import "./Profile.css";

function Profile(props) {
  const { errors, register, setError } = props;
  const [preview, setPreview] = useState(null);

  return (
    <React.Fragment>
      <img
        className="profile-image"
        onClick={() => {
          let profileUploader = document.getElementById("js-profile-uploader");
          profileUploader &&
            document.getElementById("js-profile-uploader").click();
        }}
        src={preview}
      />
      <input
        type="file"
        accept="image/*"
        name="inputProfileImage"
        id="js-profile-uploader"
        ref={register({
          required: "Profile Image is required."
        })}
        onChange={event => {
          if (event.target.files[0].size / 1024 < 1024) {
            setPreview(URL.createObjectURL(event.target.files[0]));
          } else {
            setError(
              "general",
              "custom",
              "Image size is too large. Please select image less than 1MB."
            );
          }
        }}
      />
      {errors.inputProfileImage && (
        <span className="text-danger">{errors.inputProfileImage.message}</span>
      )}
      <div className="form-label-group">
        <input
          type="phone"
          name="inputPhoneNumber"
          className="form-control"
          placeholder="Phone Number"
          ref={register({
            required: "Phone Number is required.",
            pattern: {
              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
              message: "Please enter a valid phone number."
            }
          })}
        />
        {errors.inputPhoneNumber && (
          <span className="text-danger">{errors.inputPhoneNumber.message}</span>
        )}
      </div>
      <div className="form-label-group">
        <textarea
          name="inputAddress"
          className="form-control"
          placeholder="Address"
          ref={register({
            required: "Address is required."
          })}
          className="form-control"
          rows="3"
        ></textarea>

        {errors.address && (
          <span className="text-danger">{errors.address.message}</span>
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
            required: "Email is required.",
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
          type="text"
          name="inputDateOfBirth"
          className="form-control"
          placeholder="Date of Birth"
          onFocus={event => {
            event.target.type = "date";
          }}
          onBlur={event => {
            event.target.type = "text";
          }}
          ref={register({
            required: "Date of Birth is required."
          })}
        />
        {errors.inputDateOfBirth && (
          <span className="text-danger">{errors.inputDateOfBirth.message}</span>
        )}
      </div>
      <br />
      <div className="form-label-group">
        <input
          type="text"
          name="inputSecurityQuestion1"
          className="form-control"
          placeholder="Security Question"
          autoFocus=""
          ref={register({
            required: "Security Question is required."
          })}
        />
        {errors.inputSecurityQuestion1 && (
          <span className="text-danger">
            {errors.inputSecurityQuestion1.message}
          </span>
        )}
      </div>
      <div className="form-label-group">
        <input
          type="text"
          name="inputAnswer1"
          className="form-control"
          placeholder="Answer"
          autoFocus=""
          ref={register({
            required: "Answer is required."
          })}
        />
        {errors.inputAnswer1 && (
          <span className="text-danger">{errors.inputAnswer1.message}</span>
        )}
      </div>
      <br />
      <div className="form-label-group">
        <input
          type="text"
          name="inputSecurityQuestion2"
          className="form-control"
          placeholder="Security Question"
          autoFocus=""
          ref={register({
            required: "Security Question is required."
          })}
        />
        {errors.inputSecurityQuestion2 && (
          <span className="text-danger">
            {errors.inputSecurityQuestion2.message}
          </span>
        )}
      </div>
      <div className="form-label-group">
        <input
          type="text"
          name="inputAnswer2"
          className="form-control"
          placeholder="Answer"
          autoFocus=""
          ref={register({
            required: "Answer is required."
          })}
        />
        {errors.inputAnswer2 && (
          <span className="text-danger">{errors.inputAnswer2.message}</span>
        )}
      </div>
      <br />
      <div className="form-label-group">
        <input
          type="text"
          name="inputSecurityQuestion3"
          className="form-control"
          placeholder="Security Question"
          autoFocus=""
          ref={register({
            required: "Security Question is required."
          })}
        />
        {errors.inputSecurityQuestion3 && (
          <span className="text-danger">
            {errors.inputSecurityQuestion3.message}
          </span>
        )}
      </div>
      <div className="form-label-group">
        <input
          type="text"
          name="inputAnswer3"
          className="form-control"
          placeholder="Answer"
          autoFocus=""
          ref={register({
            required: "Answer is required."
          })}
        />
        {errors.inputAnswer3 && (
          <span className="text-danger">{errors.inputAnswer3.message}</span>
        )}
      </div>
    </React.Fragment>
  );
}

export default Profile;
