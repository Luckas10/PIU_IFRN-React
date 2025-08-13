// 03 - Crie um componente que implemente uma tela login. As informações inseridas pelo usuário (login e senha) devem ser enviadas e mostradas ao console.log.

import { useState } from "react";
import './LoginScreen.css'

function LoginScreen() {
    const [textLogin, setTextLogin] = useState('')
    const [textPassword, setTextPassword] = useState('')

    function sendData(e) {
        e.preventDefault();

        console.log(`Seu login é: ${textLogin}`)
        console.log(`Sua senha é: ${textPassword}`)

        setTextLogin("");
        setTextPassword("");
    }

    return (
        <>
            <h4>03 - Crie um componente que implemente uma tela login. As informações inseridas pelo usuário (login e senha) devem ser enviadas e mostradas ao console.log.</h4>
            <div className="login-container">
                <form onSubmit={sendData}>
                    <label>
                        <input
                            onChange={(e) => setTextLogin(e.target.value)}
                            value={textLogin}
                            type="text"
                            placeholder="Digite seu login:"
                        />
                    </label>

                    <label>
                        <input
                            onChange={(e) => setTextPassword(e.target.value)}
                            value={textPassword}
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </label>

                    <input type="submit" value="Entrar" />
                </form>
            </div>

        </>
    )
}

export default LoginScreen;

