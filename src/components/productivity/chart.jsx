import React, { useEffect, useState, useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ProductivityContext } from "../../store/context/productivity-context";
import { parseISO, eachDayOfInterval, format } from "date-fns";

function getDatesFromArray(arr) {
  // Check if array is empty or does not contain necessary data
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr[0].date ||
    !arr[arr.length - 1].date
  ) {
    return [];
  }

  const startDate = parseISO(arr[0].date);
  const endDate = parseISO(arr[arr.length - 1].date);

  const dates = eachDayOfInterval({ start: startDate, end: endDate });

  return dates.map((date) => format(date, "yyyy-MM-dd"));
}

const colors = [
  [128, 128, 0], // Olive
  [0, 255, 0], //Green
  [255, 0, 0], // Red
  [0, 0, 255], // Blue
  [255, 255, 0], // Yellow
  [0, 255, 255], // Cyan
  [255, 0, 255], // Magenta
  [128, 0, 0], // Maroon
  [0, 128, 0], // DarkGreen
  [0, 0, 128], // Navy
  [128, 0, 128], // Purple
  [0, 128, 128], // Teal
  [192, 192, 192], // Silver
  [128, 128, 128], // Gray
  [255, 165, 0], // Orange
  [255, 192, 203], // Pink
  [165, 42, 42], // Brown
  [255, 255, 240], // Ivory
  [240, 248, 255], // AliceBlue
  [210, 105, 30], // Chocolate
];

function rgbaString(array, opacity) {
  if (array.length != 3 || opacity < 0 || opacity > 1) {
    return "Invalid input";
  }

  return `rgba(${array[0]},${array[1]},${array[2]},${opacity})`;
}

const groupProgressByDate = (progress) => {
  const groupedProgress = progress.reduce((acc, curr) => {
    if (curr.percentage !== null) {
      if (!acc[curr.date]) {
        acc[curr.date] = {
          date: curr.date,
          total: curr.percentage,
          count: 1,
        };
      } else {
        acc[curr.date].total += curr.percentage;
        acc[curr.date].count += 1;
      }
    }
    return acc;
  }, {});

  return Object.values(groupedProgress).map((item) => {
    return {
      date: item.date,
      percentage: item.total / item.count,
    };
  });
};

function convertMillisToMinutes(millis) {
  let seconds = millis / 1000;
  let minutes = seconds / 60;
  return Math.floor(minutes);
}

const createDatasets = (values) => {
  const results = [];
  for (let prop in values) {
    results.push({
      label: prop,
      data: values[prop],
      borderColor: rgbaString(colors[results.length], 0.7),
      backgroundColor: rgbaString(colors[results.length], 0.2),
      spanGaps: true,
      pointRadius: 4,
    });
  }
  return results;
};

const dataTypes = {
  dailyAverage: {
    title: "Task Average Completion",
    name: "Task Average",
    type: "dailyAverage",
    label: "Completed %",
  },
  individualTask: {
    title: "Individual Task Completion",
    name: "Individual Task",
    type: "individualTask",
    label: "Completed %",
  },
  wastedTime: {
    title: "Wasted Time",
    name: "Wasted Time",
    type: "wastedTime",
    label: "Minutes",
  },
};

function groupByTaskId(dataArray, dates) {
  return dataArray.reduce((grouped, item) => {
    // If the group doesn't exist yet, create it
    if (!grouped[item.name]) {
      grouped[item.name] = [];
    }

    // Push the current item into its group
    grouped[item.name].push(item.percentage);

    // Return the updated groups object
    return grouped;
  }, {});
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const { progress, wastedTime, tasks } = useContext(ProductivityContext);
  const [dataType, setDataType] = useState(dataTypes.individualTask);
  const [xAxisValues, setXAxisValues] = useState([]);
  const [yAxisValues, setYAxisValues] = useState([]);

  const plotTaskAverage = (xAxis, yAxis) => {
    const pointsArray = groupProgressByDate(progress);
    pointsArray.forEach((item) => {
      xAxis.push(item.date);
      yAxis.push(item.percentage);
    });

    setXAxisValues(xAxis);
    setYAxisValues({ "Completed %": yAxis });
  };

  const plotWastedTime = (xAxis, yAxis) => {
    wastedTime.forEach((item) => {
      xAxis.push(item.date);
      yAxis.push(convertMillisToMinutes(item.time));
    });
    setXAxisValues(xAxis);
    setYAxisValues({ Minutes: yAxis });
  };

  const plotIndividualTask = (xAxis, yAxis) => {
    xAxis = getDatesFromArray(progress);
    const groupedProgress = groupByTaskId(progress, xAxis);
    setXAxisValues(xAxis);
    setYAxisValues(groupedProgress);
  };

  useEffect(() => {
    const tempXAxisValues = [];
    const tempYAxisValues = [];
    dataType.type === "dailyAverage"
      ? plotTaskAverage(tempXAxisValues, tempYAxisValues)
      : dataType.type === "wastedTime"
      ? plotWastedTime(tempXAxisValues, tempYAxisValues)
      : dataType.type === "individualTask"
      ? plotIndividualTask(tempXAxisValues, tempYAxisValues)
      : console.log("not daily average");
  }, [progress, dataType]);

  const data = {
    labels: xAxisValues,
    datasets: createDatasets(yAxisValues, dataType),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: dataType.title,
      },
    },
  };

  return (
    <div className="row min-vh-100 mt-5">
      <div className="col">
        <div className="row mb-2 mt-2">
          <div className="col">
            <div className="mx-auto">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle fw-semibold"
                  id="dataTypeDropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dataType.name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setDataType(dataTypes.dailyAverage)}
                    >
                      Task Average
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setDataType(dataTypes.individualTask)}
                    >
                      Individual Task
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setDataType(dataTypes.wastedTime)}
                    >
                      Wasted Time
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 min-vh-75">
          <div className="col">
              <Line options={options} data={data} className="bg-white rounded-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}
