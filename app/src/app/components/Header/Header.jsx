import React from "react";
import styles from "../../../../styles/Header.module.css";
import Link from "next/link";

const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contatos">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Cabecalho;
