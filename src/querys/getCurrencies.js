import clientAxios from "../helpers/axios";

export const queryGetCurrencies = async () => {
  try {
    const { data } = await clientAxios({
      method: "GET",
      url: "/currencies",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
