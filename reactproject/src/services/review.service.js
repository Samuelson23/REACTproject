import { updateToken } from "../utils/updateToken";
import { API } from "./service.config";

export const deleteReview = async (dataForm, id) => {
  return API.delete(`review/deleteReview/${id}`, dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const createReview = async (formData) => {
  return API.post("/review/createReview", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByNameReview = async (name) => {
  return API.get(`/review/${name}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByIdReview = async (id) => {
  return API.get(`/review/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getAllReviews = async () => {
  return API.get("/review")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
