import { axiosInstance } from "../axiosinstance";

export const prepare = axiosInstance.request({
  url: "/prepare",
});
