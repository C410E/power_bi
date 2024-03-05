"use client";
import { useState, useEffect } from "react";
import styles from "../../../../styles/Chart.module.css";

import { Bar } from "react-chartjs-2";
import { 
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip
} from "chart.js";

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const [ chartData, setChartData ] = useState({
        datasets: []
    });

    const [ chartOptions, setChartOptions ] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: "Sales $",
                    data: [ 15234, 224832, 19245, 16243, 28356, 14235, 31000],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgb(53, 162, 235, 0.4)"
                }
            ]
        }),
        setChartOptions({
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                display: true,
                text: "Daily Revenue"
                }
            },
            maintaInAspectRatio: false,
            responsive: true
            
        })
    }, []);
    return (
        <>
            <div className={styles.retangulo}>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/> 
            </div>
            </div>
        </>
    )
}

export default Chart;