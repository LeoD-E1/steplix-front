import clientAxios from "../helpers/axios";

export const queryGetRatesBySymbol = async (symbol) => {
  try {
    const { data } = await clientAxios({
      method: "GET",
      url: `/rates/${symbol}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
