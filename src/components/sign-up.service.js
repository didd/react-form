const axios = require("axios");

const baseURL = "https://us-central1-jetcake.cloudfunctions.net/app";

function signUp(data) {
  return axios({
    method: "put",
    url: `${baseURL}/sign-up`,
    data: data
  });
}

export default signUp;
