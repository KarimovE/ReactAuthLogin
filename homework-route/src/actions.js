import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAllProducts = (setState) => {
  axios.get(`${baseUrl}/products`).then(({ data }) => setState(data));
};