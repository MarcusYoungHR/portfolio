import axios from "axios";

export async function addTask(task) {
  task.recurrence = task.recurrence.split(",");
  return axios
    .post("/add-task", {
      task,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      if (error.response) {
        alert("Something went wrong");
      } else {
        console.log("Error:", error.message);
      }
    });
}

export async function loadProductivityData() {
  return axios.get("/load-productivity").then((data) => {
    return data;
  });
}

export async function updateWastedTime(wastedTime) {
  const response = await axios.put('/wasted-time', wastedTime);
  return response
}

export async function updateProgress(data) {
  return axios.put("/update-progress", data).then((progress) => {
    return progress;
  });
}