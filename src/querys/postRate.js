import clientAxios from "../helpers/axios";

export const postRate = async (data) => {
  await clientAxios({
    method: "POST",
    url: "/rates",
    data,
  });
};
