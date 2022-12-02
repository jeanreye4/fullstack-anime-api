import api from "./apiConfig.js";

export const getAnimes = async () => {
  try {
    let response = await api.get("/anime");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
