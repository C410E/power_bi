import styles from "./page.module.css";
import Cabecalho from "./components/Header/Header";
//https://power-bi-lilac.vercel.app


//teste do sign do github apagar mais tarde

export default function Home() {
  return (
    <main className={styles.main}>
      <Cabecalho />
      <h1>Pdf reader</h1>
    </main>
  );
}
