import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import constants from "../constants/constants.js";

class RetrospectiveUserService {
  /**
   * Use this function to post a message
   * @param {*} message is an object and it contains user identification and the message itself
   */
  postMessage(message) {
    axios.post("RetrospectiveUser/postmessage", {
      message,
    });
  }
}

export default new RetrospectiveUserService();
