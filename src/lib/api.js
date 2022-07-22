import axios from "axios";

export const api = axios.create({
  baseURL: "https://id-student-uneb.herokuapp.com",
});
