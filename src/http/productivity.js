import axios from "axios";

function refactorTask(task) {
  const refactoredTask = {
    recurrence: [],
  };

  for (const key in task) {
    if (task[key] === "on") {
      refactoredTask.recurrence.push(key);
    } else {
      refactoredTask[key] = task[key];
    }
  }

  return refactoredTask;
}

export async function addTask(task) {
  task = refactorTask(task);
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

export async function loadTasks() {
  return axios.get("/load-tasks").then((tasks) => {
    return tasks;
  });
}
