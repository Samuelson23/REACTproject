import { updateToken } from "../utils/updateToken";
import { API } from "./service.config";

export const getAllEvents = async () => {
  return API.get("/event")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//create

export const createEvent = async (formData) => {
  return API.post("/event/createEvent", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//update

export const updateEvent = async (formData, id) => {
  return API.patch(`/event/updateEvent/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//delete

export const deleteEvent = async (id) => {
  return API.delete(`/event/deleteEvent/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByNameEvent = async (name) => {
  return API.get(`/event/${name}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByIdEvent = async (id) => {
  return API.get(`/event/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
