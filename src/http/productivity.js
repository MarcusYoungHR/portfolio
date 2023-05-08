import axios from "axios";

function refactorTask(task) {
  console.log(task)
  const {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    ...otherKeys
  } = task;
  return {
    ...otherKeys,
    recurrence: {
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    },
  };
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
