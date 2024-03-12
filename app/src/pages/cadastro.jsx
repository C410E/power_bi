"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/Cadastro.module.css";
import "./globals.css";

const Cadastro = () => {
    const [ form, setForm ] = useState({
        username: "",
        senha: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/cadastro", form);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className={styles.retangulo}>
            <div className={styles.div_cadastro}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>
                    Nome:
                    <input 
                    className={styles.input_group}
                    type="text" 
                    name="username" 
                    placeholder="Nome"
                    value={form.username} 
                    onChange={handleChange}
                    />
                </label>
                <label className={styles.label}>
                    Senha:
                    <input 
                    className={styles.input_group}
                    type="password" 
                    name="senha" 
                    placeholder="Senha"
                    value={form.senha} 
                    onChange={handleChange}
                    />
                </label>
                <button className={styles.button} type="submit">Cadastrar</button>
                <p>Já possui conta? <Link href="/login">Login</Link></p>
            </form>
        </div>
        </div>
    )
}

export default Cadastro