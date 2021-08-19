import clientAxios from "../helpers/axios";

export const postRate = async (data) => {
  try {
    await clientAxios({
      method: "POST",
      url: "/rates",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
