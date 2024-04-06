"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";
import "./globals.css";

const Login = () => {
    const [ username, setUserName ] = useState("");
    const [ senha, setSenha ] = useState("");

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                username,
                senha
            });
            
            console.log(response.data.token);

            if (response.status === 200) {
           
                router.push('/');
              } else {
               
                console.error('Login falhou');
              }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className={styles.div_login}>
            {/* <h2>Login</h2> */}
            <form onSubmit={handleLogin}>
                <label className={styles.label}>
                    Nome:
                    <input 
                        className={styles.input_group}
                        type="text"
                        placeholder="Nome"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    Senha:
                    <input 
                        className={styles.input_group}
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <button 
                    className={styles.button} 
                    onClick={handleLogin} 
                    type="submit"
                >
                    Login
                </button>
                <p>
                    Não tem uma conta? 
                    <Link 
                        className={styles.paragrafo} 
                        href="cadastro"
                    >
                        Cadastro
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login