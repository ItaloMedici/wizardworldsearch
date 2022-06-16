import { api } from "./api";

export const getCharacters = async () => {
  return await api.get("/characters");
}