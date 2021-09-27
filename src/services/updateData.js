import { fetchData } from "./fetchData";

export const updateData = async (dispatch, task) => {
  // You can await here
  try {
    await fetch(`${window.env.API_URL}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    await fetchData(dispatch);
  } catch (err) {
    alert(err.message);
  }
};
