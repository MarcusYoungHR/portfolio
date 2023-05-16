import axios from "axios";

export async function loadProgress({ id }) {
  return axios
    .get("/load-progress", {
      params: {
        id,
      },
    })
    .then((progress) => {
      console.log(progress)
      return progress;
    });
}

export async function updateProgress(data) {
  return axios.put("/update-progress", data).then((progress) => {
    return progress;
  });
}
