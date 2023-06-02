import axios from "axios";
import { API_URL } from "../../../app/api";

const authApi = {
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      username,
      password,
    });
    return response.data;
  },
};

export default authApi;
