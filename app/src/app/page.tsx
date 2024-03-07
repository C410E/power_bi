import styles from "./page.module.css";
import Cabecalho from "./components/Header/Header";
import Chart from "./components/chart/Chart";
import Circulo from "./components/chart/Doughnut";
import LineChart from "./components/chart/LineChart"
//https://power-bi-lilac.vercel.app




export default function Home() {
  return (
    <div className={styles.main}>
      <Cabecalho />
      <Chart />
      <Circulo />
      <LineChart />
    </div>
  );
}
