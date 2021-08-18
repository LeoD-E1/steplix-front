import clientAxios from "../helpers/axios";

export const queryGetRates = async () => {
  try {
    const { data } = await clientAxios({
      method: "GET",
      url: "/rates",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
