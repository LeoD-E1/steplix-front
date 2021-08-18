import clientAxios from "../helpers/axios";

export const queryGetCurrencies = async () => {
  const { data } = await clientAxios({
    method: "GET",
    url: "/currencies",
  });
  return data;
};
