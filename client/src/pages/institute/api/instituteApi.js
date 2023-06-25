import axios from "axios";
import { API_URL } from "../../../app/api";

const instituteApi = {
  create: async (data) => {
    const response = await axios.post(`${API_URL}/api/institute/create`, data);
    return response.data;
  },
  fetchAll: async () => {
    const response = await axios.get(`${API_URL}/api/institute`);
    return response.data;
  },
  fetchOne: async (id) => {
    const response = await axios.get(`${API_URL}/api/institute/${id}`);
    return response.data;
  },
  edit: async (id, data) => {
    const response = await axios.put(`${API_URL}/api/institute/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/api/institute/${id}`);
    return response.data;
  },
};

export default instituteApi;