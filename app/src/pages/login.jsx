import Link from "next/link";
import "./globals.css";

const Login = () => {
    return (
        <div>
            <p>Não tem uma conta? <Link href="cadastro">Cadastro</Link></p>
        </div>
    )
}

export default Login