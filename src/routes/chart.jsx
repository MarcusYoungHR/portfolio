import React, { useEffect, useState } from "react";
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
import { getAllProgress } from "../http/chart";
import { useLoaderData } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export async function loader() {
  const progress = await getAllProgress();
  console.log(progress);
  return progress;
}

export default function Chart() {
  const [xAxisValues, setXAxisValues] = useState([]);
  const [yAxisValues, setYAxisValues] = useState([]);

  const progress = useLoaderData();

  useEffect(() => {
    const tempXAxisValues = [];
    const tempYAxisValues = [];

    progress.forEach((item) => {
      tempXAxisValues.push(item.date);
      tempYAxisValues.push(item.averagePercentage);
    });

    setXAxisValues(tempXAxisValues);
    setYAxisValues(tempYAxisValues);
  }, [progress]);

  console.log(progress);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: xAxisValues,
    datasets: [
      {
        label: "Completed %",
        data: yAxisValues,
        borderColor: "rgb(52, 178, 51)",
        backgroundColor: "rgba(52, 178, 51, 0.5)",
      }
    ],
  };

  return <Line options={options} data={data} />;
}
