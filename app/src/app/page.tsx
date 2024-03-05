import styles from "./page.module.css";
import Cabecalho from "./components/Header/Header";
import Chart from "./components/chart/Chart";
//https://power-bi-lilac.vercel.app




export default function Home() {
  return (
    <div className={styles.main}>
      <Cabecalho />
      <Chart />
    </div>
  );
}
