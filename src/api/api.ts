import { Configuration, Pet, PetApi, UserApi } from "./generated";
import { baseURL } from "./apiConfig";
import axiosInstance from "./axiosInstance";

const configuration = new Configuration({ basePath: baseURL });

export default {
  pet: new PetApi(configuration, baseURL, axiosInstance),
  user: new UserApi(configuration, baseURL, axiosInstance),
};

export * from "./generated";
