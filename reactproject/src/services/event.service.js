import { API } from "./service.config";

export const getAllEvents = async () => {
  return API.get("/event")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
