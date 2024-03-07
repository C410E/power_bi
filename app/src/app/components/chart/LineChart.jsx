"use client";
import { 
    Chart as Chartjs, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "../../../../styles/LineChart.module.css";

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" 
            },
            title: {
                display: true,
                text: "Grafico teste"
            }
        }
    };

    const labels = ["janeiro", "fevereiro", "Março","Abril", "Maio", "Junho", "Julho"];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => faker.number.int({min: -1000, max: 1000})),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            }
        ]
    }
    return (
        <div className={styles.lineChart}>
            <Line  options={options} data={data}/>
        </div>
    );
};


export default LineChart;