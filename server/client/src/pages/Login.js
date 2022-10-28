import React, {useState} from "react";
import {useLogin} from "../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
    }

    return (
        <form className="login" onSubmit={(e) => handleSubmit(e)}>
            <h3>Авторизация</h3>

            <label>Имя пользователя или E-mail:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Пароль:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Войти</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login;