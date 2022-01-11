import axios from "axios";

export const login = async (user) =>
  await axios.post("https://reqres.in/api/login", user);
