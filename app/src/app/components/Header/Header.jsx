import React from "react";
import styles from "../../../../styles/Header.module.css";
import Link from "next/link";
import { 
    FaHome, 
    FaAlignJustify, 
    FaUser,  
    FaPhoneAlt
} from "react-icons/fa";


const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link href="/"><FaHome /> Início </Link></li>
                    <li><Link href="/sobre"><FaAlignJustify/>Sobre</Link></li>
                    <li><Link href="/login"><FaUser/>Entrar</Link></li>
                    <li><Link href="/contatos">Contatos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Cabecalho;
