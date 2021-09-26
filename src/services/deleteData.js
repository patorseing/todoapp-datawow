import { fetchData } from "./fetchData";

export const deleteData = async (dispatch, id) => {
  // You can await here
  try {
    await fetch(`${window.env.API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    await fetchData(dispatch)
  } catch (err) {
    alert(err.message);
  }
};
