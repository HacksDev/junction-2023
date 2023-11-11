import React from "react";
import classNames from "classnames";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: { display: false },
  },
  scales: {
    y: {
      display: true,
      title: {
        display: true,
        text: "avg. Dosage",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];
const values = [400, 320, 300, 330, 270, 180];
const values2 = [100, 120, 130, 100, 100, 160];

export const data = {
  labels,
  datasets: [
    {
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      label: "Methotrexate (prescription drug)",
      data: values,
      borderColor: "rgb(255, 151, 132)",
      backgroundColor: "rgb(255, 151, 132)",
    },
    {
      cubicInterpolationMode: "monotone",
      tension: 0.4,
      label: "Ibuprofen",
      data: values2,
      borderColor: "rgb(0, 218, 214)",
      backgroundColor: "rgb(0, 218, 214)",
    },
  ],
};

export function Chart(props: { className?: string }) {
  return (
    <section className={classNames("card", props.className)}>
      <Line className="card-body" options={options} data={data} />
    </section>
  );
}
