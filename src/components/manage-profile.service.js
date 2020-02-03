const axios = require("axios");

const baseURL = "https://us-central1-jetcake.cloudfunctions.net/app";

function getProfile(email, token) {
  return axios({
    method: "get",
    url: `${baseURL}/profile?email=${email}`,
    headers: { Authorization: `Bearer ${token}` }
  });
}

function updateProfile(data) {
  return axios({
    method: "put",
    url: `${baseURL}/sign-up`,
    data: data
  });
}

export { updateProfile, getProfile };
