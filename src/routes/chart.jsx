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
import { ProductivityContext } from "../store/context/productivity-context";


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

export default function Chart() {
  const {progress, wastedTime, tasks} = useContext(ProductivityContext);

  const [xAxisValues, setXAxisValues] = useState([]);
  const [yAxisValues, setYAxisValues] = useState([]);

  const groupProgressByDate = (progress) => {
    const groupedProgress = progress.reduce((acc, curr) => {
      if (!acc[curr.date]) {
        acc[curr.date] = {
            date: curr.date,
            total: curr.percentage,
            count: 1
        };
    } else {
        acc[curr.date].total += curr.percentage;
        acc[curr.date].count += 1;
    }
    return acc;
    }, {})

    return Object.values(groupedProgress).map((item) => {
      return {
        date: item.date,
        percentage: item.total / item.count
      }
    })
  }

  useEffect(() => {
    const tempXAxisValues = [];
    const tempYAxisValues = [];

    const pointsArray = groupProgressByDate(progress);

    console.log('pointsArray', pointsArray)

    pointsArray.forEach((item) => {
      tempXAxisValues.push(item.date);
      tempYAxisValues.push(item.percentage);
    });

    setXAxisValues(tempXAxisValues);
    setYAxisValues(tempYAxisValues);
  }, [progress]);

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
